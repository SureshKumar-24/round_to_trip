import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";

export default function Terms() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header/Navigation */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
                    <div className="flex justify-between items-center">
                        <div>
                            <a href="/">
                                <Image
                                    src="/company.svg"
                                    alt="Aalishaan Global BPO Services"
                                    width={280}
                                    height={95}
                                    className="h-14 sm:h-16 md:h-18 w-auto"
                                    priority
                                />
                            </a>
                        </div>
                        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
                            <a href="/" className="text-gray-700 hover:text-[#C9A961] font-medium text-sm xl:text-base transition-colors">
                                Home
                            </a>
                            <a href="/contact" className="bg-[#C9A961] text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-full hover:bg-[#a88a4d] font-semibold text-sm xl:text-base transition-all shadow-lg hover:shadow-xl hover:scale-105">
                                Request a Pilot
                            </a>
                        </nav>

                        {/* Mobile Menu */}
                        <MobileMenu />
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="pt-32 sm:pt-36 md:pt-40 pb-12 bg-gradient-to-br from-gray-900 to-gray-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                        Terms of Service
                    </h1>
                    <p className="text-lg text-gray-300">
                        Last Updated: December 2024
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none">
                        {/* Introduction */}
                        <div className="mb-12">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                These Terms of Service govern your use of the Aalishaan Global BPO Services website and our services. By using our website or engaging our services, you agree to these terms.
                            </p>
                        </div>

                        {/* Services */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-[#C9A961]">1.</span> Our Services
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Aalishaan Global BPO Services provides customer support outsourcing services including email support, live chat support, travel and booking support, and ticket management. All services are provided under mutually agreed scope, NDA, and contractual terms.
                            </p>
                        </div>

                        {/* Engagement */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-[#C9A961]">2.</span> Service Engagement
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Our service engagements typically follow this process:
                            </p>
                            <ul className="space-y-2 text-gray-700 ml-6">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span>Initial requirements discussion</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span>NDA and contractual agreement</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span>Pilot engagement with defined scope</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span>Review and scaling based on performance</span>
                                </li>
                            </ul>
                        </div>

                        {/* Confidentiality */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-[#C9A961]">3.</span> Confidentiality
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                All client information, business processes, and data shared with us are treated as confidential. We maintain strict confidentiality protocols and sign NDAs with all clients prior to service commencement.
                            </p>
                        </div>

                        {/* Intellectual Property */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-[#C9A961]">4.</span> Intellectual Property
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                All content on this website, including text, graphics, logos, and images, is the property of Aalishaan Global BPO Services. Client data and intellectual property remain the property of the respective clients.
                            </p>
                        </div>

                        {/* Limitation of Liability */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-[#C9A961]">5.</span> Limitation of Liability
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                While we strive to provide the highest quality services, specific liability terms are defined in individual service agreements. We encourage all clients to review these terms carefully before engagement.
                            </p>
                        </div>

                        {/* Governing Law */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-[#C9A961]">6.</span> Governing Law
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                These terms and any service agreements are governed by applicable laws. Specific jurisdictional terms are defined in individual contracts.
                            </p>
                        </div>

                        {/* Changes */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-[#C9A961]">7.</span> Changes to Terms
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                We may update these terms from time to time. Continued use of our website constitutes acceptance of updated terms.
                            </p>
                        </div>

                        {/* Contact */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-[#C9A961]">8.</span> Contact
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                For questions about these terms, please contact:
                            </p>
                            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                <p className="text-gray-700 mb-2"><strong>Aalishaan Global BPO Services</strong></p>
                                <p className="text-gray-700 mb-2">Email: <a href="mailto:info@aalishaan-global.com" className="text-[#C9A961] hover:underline">info@aalishaan-global.com</a></p>
                                <p className="text-gray-700">Country: India</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Links */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Policies</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {[
                            { title: "Privacy Policy", href: "/privacy-policy" },
                            { title: "GDPR Compliance", href: "/gdpr" },
                            { title: "Data Security", href: "/data-security" }
                        ].map((link, idx) => (
                            <a key={idx} href={link.href} className="bg-white rounded-xl p-4 border-2 border-gray-200 hover:border-[#C9A961] transition-all text-center font-semibold text-gray-900 hover:text-[#C9A961]">
                                {link.title}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <Image
                                src="/company.svg"
                                alt="Aalishaan Global"
                                width={180}
                                height={60}
                                className="h-16 w-auto mb-4 brightness-200"
                            />
                            <p className="text-gray-400 mb-2">Customer Support Outsourcing for UK, US & European Businesses</p>
                            <p className="text-gray-500 text-sm">Based in India | Global Delivery</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4 text-[#C9A961]">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="/" className="text-gray-400 hover:text-[#C9A961] transition-colors">Home</a></li>
                                <li><a href="/services" className="text-gray-400 hover:text-[#C9A961] transition-colors">Services</a></li>
                                <li><a href="/contact" className="text-gray-400 hover:text-[#C9A961] transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4 text-[#C9A961]">Legal</h3>
                            <ul className="space-y-2">
                                <li><a href="/privacy-policy" className="text-gray-400 hover:text-[#C9A961] transition-colors">Privacy Policy</a></li>
                                <li><a href="/gdpr" className="text-gray-400 hover:text-[#C9A961] transition-colors">GDPR</a></li>
                                <li><a href="/terms" className="text-gray-400 hover:text-[#C9A961] transition-colors">Terms</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4 text-[#C9A961]">Contact</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>info@aalishaan-global.com</li>
                                <li>Country: India</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
                        <p>&copy; 2024 Aalishaan Global BPO Services. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
