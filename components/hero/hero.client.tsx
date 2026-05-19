import { Calendar, Package } from "lucide-react"




export default function HeroClient() {

    const buttonBase =
        "relative overflow-hidden transition-all duration-300 ease-out rounded-md inline-flex items-center justify-center transform-gpu"

    const buttonEffect =
        "glass border-2 border-white/20 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-600/20 before:to-blue-600/20 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 after:absolute after:inset-0 after:bg-gradient-to-r after:from-white/10 after:to-transparent after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]"

    const buttonSize =
        "text-base sm:text-lg px-6 sm:px-8 py-3 font-semibold"

    return (
        <>
            <div
                className="glass-enhanced rounded-2xl p-4 sm:p-6 max-w-3xl mx-auto"
                role="region"
                aria-label="Company statistics"
            >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
                    <div>
                        <span
                            className="text-2xl sm:text-3xl font-bold text-gold mb-2"
                        > +1200</span>
                        <div className="text-xs sm:text-sm text-gray-400">Magazine Covers Printed</div>
                    </div>
                    <div>
                        <span className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">
                            +250
                        </span>
                        <div className="text-xs sm:text-sm text-gray-400">Successful Events</div>
                    </div>
                    <div>
                        <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">3+</div>
                        <div className="text-xs sm:text-sm text-gray-400">Premium Booth Options</div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">

                <a href="/#features-section">
                <button
                    aria-label="Book your The Luxury Booth now"
                    className={`${buttonBase} ${buttonEffect} ${buttonSize} bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700`}
                >
                    <span className="relative z-10 flex items-center">
                        <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                        Book Now
                    </span>
                </button></a>

                <a href="/#products">
                <button
                    aria-label="View our packages and pricing"
                    className={`${buttonBase} ${buttonEffect} ${buttonSize} border-gold text-gold hover:bg-gold hover:text-black bg-transparent`}
                >
                    <span className="relative z-10 flex items-center">
                        <Package className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                        See Packages
                    </span>
                </button></a>

            </div>
        </>
    )
}