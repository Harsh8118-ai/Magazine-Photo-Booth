"use client"
export default function FooterClientOne() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <>
            <div>
                <h4 className="font-semibold mb-4 text-sm sm:text-base">Company</h4>
                <ul className="space-y-2 text-gray-400 text-sm sm:text-base">

                    <li>
                        <button
                            onClick={() => scrollToSection("hero-section")}
                            className="hover:text-white transition-colors"
                        >
                            Home
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection("products")}
                            className="hover:text-white transition-colors"
                        >
                            Products
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection("about-section")}
                            className="hover:text-white transition-colors"
                        >
                            About Us
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection("testimonials-section")}
                            className="hover:text-white transition-colors"
                        >
                            Reviews
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}