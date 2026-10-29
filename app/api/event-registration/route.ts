
import { NextResponse } from "next/server"

export const runtime = "nodejs"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const name =
      typeof body.name === "string" ? body.name.trim() : ""

    const contact =
      typeof body.contact === "string"
        ? body.contact.trim()
        : ""

    const consent = body.consent === true
    const eventId = body.eventId

    if (
      eventId !== "imbesharam" ||
      name.length < 2 ||
      name.length > 100 ||
      contact.length > 254 ||
      !consent
    ) {
      return NextResponse.json(
        { success: false, message: "Please check your details." },
        { status: 400 }
      )
    }

    const isEmail =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)

    const normalizedPhone = contact.replace(/[\s()-]/g, "")
    const isPhone = /^\+?\d{10,15}$/.test(normalizedPhone)

    if (!isEmail && !isPhone) {
      return NextResponse.json(
        {
          success: false,
          message: "Enter a valid phone number or email address.",
        },
        { status: 400 }
      )
    }

    const webhookUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_IMBESHARAM_WEBHOOK_URL

    if (!webhookUrl) {
      throw new Error("Google Sheets webhook is not configured.")
    }

    const payload = new URLSearchParams({
      eventId,
      name,
      contact,
      contactType: isEmail ? "email" : "phone",
      consent: "true",
    })

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: payload.toString(),
      cache: "no-store",
      redirect: "follow",
      signal: AbortSignal.timeout(10000),
    })


    const responseText = await response.text()

    console.log("Apps Script status:", response.status)
    console.log("Apps Script response:", responseText.slice(0, 500))

    if (!response.ok) {
      throw new Error(`Apps Script HTTP ${response.status}`)
    }

    let result

    try {
      result = JSON.parse(responseText)
    } catch {
      throw new Error("Apps Script did not return JSON.")
    }

    if (result.success !== true) {
      throw new Error(
        result.message || "Could not save the registration."
      )
    }


    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Event registration failed:", error)

    return NextResponse.json(
      {
        success: false,
        message: "We couldn't register you. Please try again.",
      },
      { status: 500 }
    )
  }
}
