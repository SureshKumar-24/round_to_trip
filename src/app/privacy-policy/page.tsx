import Image from "next/image";

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
                                    src="/company.svg"
                                    alt="Aalishaan Global BPO Services"
                                    width={280}
                                    height={95}
                                    className="h-16 sm:h-18 md:h-20 w-auto"
                                    priority
                                />
                            </a>
                        </div>
                        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
                            <a href="/" className="text-gray-700 hover:text-[#C9A961] font-medium text-sm xl:text-base transition-colors">
                                Home
                            </a>
                            <a href="/contact" className="bg-[#C9A961] text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-full hover:bg-[#a88a4d] font-semibold text-sm xl:text-base transition-all shadow-lg hover:shadow-xl hover:scale-105">
                                Contact Us
                            </a>
                        </nav>
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
                        Last Updated: December 19, 2024
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
                                At Aalishaan Global BPO Services ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                            </p>
                        </div>

                        {/* 1. Information We Collect */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-[#C9A961]">1.</span> Information We Collect
                            </h2>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">1.1 Personal Information</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We may collect personal information that you voluntarily provide to us when you:
                            </p>
                            <ul className="space-y-2 text-gray-700 ml-6">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span>Fill out contact forms on our website</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span>Request a quote or consultation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span>Subscribe to our newsletter</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span>Engage with our services</span>
                                </li>
                            </ul>

                            <p className="text-gray-700 leading-relaxed mt-6 mb-4">
                                This information may include:
                            </p>
                            <ul className="space-y-2 text-gray-700 ml-6">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span>Name and contact information (email address, phone number)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span>Company name and job title</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span>Business requirements and preferences</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span>Any other information you choose to provide</span>
                                </li>
                            </ul>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">1.2 Automatically Collected Information</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                When you visit our website, we may automatically collect certain information about your device, including:
                            </p>
                            <ul className="space-y-2 text-gray-700 ml-6">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span>IP address and browser type</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span>Operating system and device information</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span>Pages visited and time spent on pages</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span>Referring website addresses</span>
                                </li>
                            </ul>
                        </div>

                        {/* 2. How We Use Your Information */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-[#C9A961]">2.</span> How We Use Your Information
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We use the information we collect for the following purposes:
                            </p>
                            <ul className="space-y-3 text-gray-700 ml-6">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span><strong>Service Delivery:</strong> To provide, maintain, and improve our BPO services</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span><strong>Communication:</strong> To respond to your inquiries and communicate with you about our services</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span><strong>Marketing:</strong> To send you promotional materials and updates (with your consent)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span><strong>Analytics:</strong> To analyze website usage and improve user experience</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span><strong>Legal Compliance:</strong> To comply with legal obligations and protect our rights</span>
                                </li>
                            </ul>
                        </div>

                        {/* 3. Data Sharing and Disclosure */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-[#C9A961]">3.</span> Data Sharing and Disclosure
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We do not sell your personal information. We may share your information in the following circumstances:
                            </p>
                            <ul className="space-y-3 text-gray-700 ml-6">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our business</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span><strong>Legal Requirements:</strong> When required by law or to protect our legal rights</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span><strong>With Your Consent:</strong> When you have given us explicit permission to share your information</span>
                                </li>
                            </ul>
                        </div>

                        {/* 4. Data Security */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-[#C9A961]">4.</span> Data Security
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                            </p>
                            <ul className="space-y-2 text-gray-700 ml-6">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span>Encryption of data in transit and at rest</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span>Regular security assessments and updates</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span>Access controls and authentication procedures</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span>Employee training on data protection</span>
                                </li>
                            </ul>
                        </div>

                        {/* 5. Your Rights */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-[#C9A961]">5.</span> Your Rights
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Depending on your location, you may have the following rights regarding your personal information:
                            </p>
                            <ul className="space-y-2 text-gray-700 ml-6">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span><strong>Access:</strong> Request access to your personal information</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span><strong>Correction:</strong> Request correction of inaccurate information</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span><strong>Deletion:</strong> Request deletion of your personal information</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span><strong>Objection:</strong> Object to processing of your information</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span><strong>Portability:</strong> Request transfer of your data to another service</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span><strong>Withdraw Consent:</strong> Withdraw consent for data processing</span>
                                </li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mt-6">
                                To exercise these rights, please contact us at <a href="mailto:privacy@aalishaan-global.com" className="text-[#C9A961] hover:underline font-semibold">privacy@aalishaan-global.com</a>
                            </p>
                        </div>

                        {/* 6. Data Retention */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-[#C9A961]">6.</span> Data Retention
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
                            </p>
                        </div>

                        {/* 7. Cookies */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-[#C9A961]">7.</span> Cookies and Tracking Technologies
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We use cookies and similar tracking technologies to enhance your experience on our website. For detailed information about our use of cookies, please see our <a href="/cookie-policy" className="text-[#C9A961] hover:underline font-semibold">Cookie Policy</a>.
                            </p>
                        </div>

                        {/* 8. Changes to Privacy Policy */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-[#C9A961]">8.</span> Changes to This Privacy Policy
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically for any changes.
                            </p>
                        </div>

                        {/* 9. Contact Us */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-[#C9A961]">9.</span> Contact Us
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
                            </p>
                            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                <p className="text-gray-700 mb-2"><strong>Aalishaan Global BPO Services</strong></p>
                                <p className="text-gray-700 mb-2">Email: <a href="mailto:privacy@aalishaan-global.com" className="text-[#C9A961] hover:underline">privacy@aalishaan-global.com</a></p>
                                <p className="text-gray-700 mb-2">Phone: +1 (234) 567-8900</p>
                                <p className="text-gray-700">Address: Global Business Center, 123 Business Avenue, New York, NY 10001, United States</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Links */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Policies</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { title: "GDPR Policy", href: "/gdpr" },
                            { title: "Terms & Conditions", href: "/terms" },
                            { title: "Data Security", href: "/data-security" },
                            { title: "Cookie Policy", href: "/cookie-policy" }
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
                            <p className="text-gray-400">Premium BPO services for global businesses.</p>
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
                                <li>+1 (234) 567-8900</li>
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
