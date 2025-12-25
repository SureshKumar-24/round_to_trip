import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header/Navigation */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
                    <div className="flex justify-between items-center">
                        <div>
                            <a href="/">
                                <Image
                                    src="/round_logo.png"
                                    alt="Aalishaan Global BPO Services"
                                    width={280}
                                    height={95}
                                    className="h-14 sm:h-16 md:h-18 w-auto"
                                    priority
                                />
                            </a>
                        </div>
                        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
                            <a href="/" className="text-gray-700 hover:text-[#1E73BE] font-medium text-sm xl:text-base transition-colors">
                                Home
                            </a>
                            <a href="/contact" className="bg-[#1E73BE] text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-full hover:bg-[#155A96] font-semibold text-sm xl:text-base transition-all shadow-lg hover:shadow-xl hover:scale-105">
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
                        Privacy Policy
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
                                We respect your privacy and are committed to protecting personal data. This Privacy Policy explains how Aalishaan Global BPO Services ("we," "our," or "us") collects, uses, and protects your information.
                            </p>
                        </div>

                        {/* Information We Collect */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-[#1E73BE]">1.</span> Information We Collect
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We may collect basic contact information such as name, email address, and company details when you contact us. This includes:
                            </p>
                            <ul className="space-y-2 text-gray-700 ml-6">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#1E73BE] mt-1">•</span>
                                    <span>Name and contact information (email address)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#1E73BE] mt-1">•</span>
                                    <span>Company name</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#1E73BE] mt-1">•</span>
                                    <span>Business requirements and preferences you share with us</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#1E73BE] mt-1">•</span>
                                    <span>Any other information you choose to provide</span>
                                </li>
                            </ul>
                        </div>

                        {/* Purpose of Data Processing */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-[#1E73BE]">2.</span> Purpose of Data Processing
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Personal data is used only for:
                            </p>
                            <ul className="space-y-3 text-gray-700 ml-6">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#1E73BE] mt-1">•</span>
                                    <span><strong>Responding to inquiries:</strong> To answer your questions and provide information about our services</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#1E73BE] mt-1">•</span>
                                    <span><strong>Service communication:</strong> To communicate with you about our services and your requirements</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#1E73BE] mt-1">•</span>
                                    <span><strong>Business relationship management:</strong> To manage our relationship with you and provide requested services</span>
                                </li>
                            </ul>
                            <p className="text-gray-900 font-semibold mt-6 p-4 bg-[#1E73BE]/10 rounded-xl border border-[#1E73BE]/20">
                                We do not sell or misuse personal data.
                            </p>
                        </div>

                        {/* Data Protection & GDPR */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-[#1E73BE]">3.</span> Data Protection & GDPR
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We follow <strong>GDPR-aligned</strong> and global data protection practices, including:
                            </p>
                            <ul className="space-y-2 text-gray-700 ml-6">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#1E73BE] mt-1">•</span>
                                    <span>Purpose-limited usage of data</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#1E73BE] mt-1">•</span>
                                    <span>Restricted access to personal information</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#1E73BE] mt-1">•</span>
                                    <span>Secure storage practices</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#1E73BE] mt-1">•</span>
                                    <span>Data minimization principles</span>
                                </li>
                            </ul>
                        </div>

                        {/* Your Rights */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-[#1E73BE]">4.</span> Your Rights
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Users may request:
                            </p>
                            <ul className="space-y-2 text-gray-700 ml-6">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#1E73BE] mt-1">•</span>
                                    <span><strong>Access:</strong> Request access to your personal data</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#1E73BE] mt-1">•</span>
                                    <span><strong>Correction:</strong> Request correction of inaccurate information</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#1E73BE] mt-1">•</span>
                                    <span><strong>Deletion:</strong> Request deletion of your personal data</span>
                                </li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mt-6">
                                To exercise these rights, please contact us at{' '}
                                <a href="mailto:info@aalishaan-global.com" className="text-[#1E73BE] hover:underline font-semibold">info@aalishaan-global.com</a>
                            </p>
                        </div>

                        {/* Data Security */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-[#1E73BE]">5.</span> Data Security
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                            </p>
                        </div>

                        {/* Data Retention */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-[#1E73BE]">6.</span> Data Retention
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy. When we no longer need your information, we will securely delete or anonymize it.
                            </p>
                        </div>

                        {/* Changes to Privacy Policy */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-[#1E73BE]">7.</span> Changes to This Policy
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                            </p>
                        </div>

                        {/* Contact */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-[#1E73BE]">8.</span> Contact
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                For privacy-related requests, contact:
                            </p>
                            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                <p className="text-gray-700 mb-2"><strong>Aalishaan Global BPO Services</strong></p>
                                <p className="text-gray-700 mb-2">Email: <a href="mailto:info@aalishaan-global.com" className="text-[#1E73BE] hover:underline">info@aalishaan-global.com</a></p>
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
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                        {[
                            { title: "GDPR Compliance", href: "/gdpr" },
                            { title: "Terms of Service", href: "/terms" },
                            { title: "Data Security", href: "/data-security" },
                            { title: "Security & Compliance", href: "/security-compliance" }
                        ].map((link, idx) => (
                            <a key={idx} href={link.href} className="bg-white rounded-xl p-4 border-2 border-gray-200 hover:border-[#1E73BE] transition-all text-center font-semibold text-gray-900 hover:text-[#1E73BE]">
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
                                src="/round_logo.png"
                                alt="Aalishaan Global"
                                width={180}
                                height={60}
                                className="h-16 w-auto mb-4 brightness-200"
                            />
                            <p className="text-gray-400 mb-2">Customer Support Outsourcing for UK, US & European Businesses</p>
                            <p className="text-gray-500 text-sm">Based in India | Global Delivery</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4 text-[#1E73BE]">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="/" className="text-gray-400 hover:text-[#1E73BE] transition-colors">Home</a></li>
                                <li><a href="/services" className="text-gray-400 hover:text-[#1E73BE] transition-colors">Services</a></li>
                                <li><a href="/contact" className="text-gray-400 hover:text-[#1E73BE] transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4 text-[#1E73BE]">Legal</h3>
                            <ul className="space-y-2">
                                <li><a href="/privacy-policy" className="text-gray-400 hover:text-[#1E73BE] transition-colors">Privacy Policy</a></li>
                                <li><a href="/gdpr" className="text-gray-400 hover:text-[#1E73BE] transition-colors">GDPR</a></li>
                                <li><a href="/terms" className="text-gray-400 hover:text-[#1E73BE] transition-colors">Terms</a></li>
                                <li><a href="/security-compliance" className="text-gray-400 hover:text-[#1E73BE] transition-colors">Security</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4 text-[#1E73BE]">Contact</h3>
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
