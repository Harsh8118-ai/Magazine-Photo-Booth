"use client"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LegalModalProps {
  isOpen: boolean
  onClose: () => void
  type: "privacy" | "terms" | "cookies"
}

export function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  if (!isOpen) return null

  const getContent = () => {
    switch (type) {
      case "privacy":
        return {
          title: "Privacy Policy",
          content: (
            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-bold mb-3">Information We Collect</h3>
                <p className="text-gray-300 mb-4">
                  We collect information you provide directly to us, such as when you book our services, contact us, or
                  subscribe to our newsletter.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Contact information (name, email, phone number)</li>
                  <li>Event details (date, location, preferences)</li>
                  <li>Payment information (processed securely through third parties)</li>
                  <li>Photos taken during events (with your consent)</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3">How We Use Your Information</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>To provide and improve our photo booth services</li>
                  <li>To communicate with you about your booking</li>
                  <li>To send you marketing communications (with your consent)</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3">Data Security</h3>
                <p className="text-gray-300">
                  We implement appropriate security measures to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3">Contact Us</h3>
                <p className="text-gray-300">
                  If you have questions about this Privacy Policy, please contact Luxury Booth at hello@magazinephotobooth.com
                </p>
              </section>
            </div>
          ),
        }

      case "terms":
        return {
          title: "Terms of Service",
          content: (
            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-bold mb-3">Service Agreement</h3>
                <p className="text-gray-300 mb-4">
                  By booking our magazine photo booth services, you agree to these terms and conditions.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3">Booking and Payment</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>A 50% deposit is required to secure your booking</li>
                  <li>Final payment is due 7 days before your event</li>
                  <li>Cancellations made 30+ days in advance receive full refund</li>
                  <li>Cancellations made 14-29 days in advance receive 50% refund</li>
                  <li>Cancellations made less than 14 days in advance are non-refundable</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3">Service Delivery</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Setup requires 60-90 minutes before event start</li>
                  <li>Minimum 8x10 ft space required</li>
                  <li>Access to standard electrical outlet (15A) required</li>
                  <li>Digital gallery delivered within 48 hours</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3">Liability</h3>
                <p className="text-gray-300">
                  Our liability is limited to the amount paid for services. We are not responsible for venue-related
                  issues or guest behavior.
                </p>
              </section>
            </div>
          ),
        }

      case "cookies":
        return {
          title: "Cookie Policy",
          content: (
            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-bold mb-3">What Are Cookies</h3>
                <p className="text-gray-300 mb-4">
                  Cookies are small text files stored on your device when you visit our website. They help us provide
                  you with a better experience.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3">Types of Cookies We Use</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <strong>Essential Cookies:</strong> Required for website functionality
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Help us understand how visitors use our site
                  </li>
                  <li>
                    <strong>Marketing Cookies:</strong> Used to show relevant advertisements
                  </li>
                  <li>
                    <strong>Preference Cookies:</strong> Remember your settings and preferences
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3">Managing Cookies</h3>
                <p className="text-gray-300">
                  You can control cookies through your browser settings. Note that disabling cookies may affect website
                  functionality.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3">Third-Party Cookies</h3>
                <p className="text-gray-300">
                  We use Google Analytics and Facebook Pixel to improve our services and marketing efforts.
                </p>
              </section>
            </div>
          ),
        }

      default:
        return { title: "", content: null }
    }
  }

  const { title, content } = getContent()

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h2 className="text-2xl font-bold text-gradient">{title}</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-white/20">
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[60vh]">{content}</div>

        <div className="p-6 border-t border-gray-800">
          <p className="text-sm text-gray-400 mb-4">Last updated: December 2024</p>
          <Button onClick={onClose} className="bg-purple-600 hover:bg-purple-700">
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}
