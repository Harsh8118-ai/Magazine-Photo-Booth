// app/api/folders/[folder]/route.ts
import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!, 
});

export async function GET(
  req: Request,
  { params }: { params: { folder: string } } 
) {
  try {
    const folder = params.folder;

    const result = await cloudinary.search
      .expression(`folder="${folder}"`)
      .max_results(100)
      .execute();

    const images = result.resources.map((r: any) => ({
      id: r.asset_id,
      url: r.secure_url,
      publicId: r.public_id,
    }));

    return NextResponse.json({ images });
  } catch (error) {
    console.error("Cloudinary fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch images" }, { status: 500 });
  }
}
