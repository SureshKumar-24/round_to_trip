import Image from "next/image";

export default function GDPR() {
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
                    <div className="inline-block bg-[#C9A961]/20 backdrop-blur-sm border border-[#C9A961]/30 rounded-full px-6 py-2 mb-6">
                        <span className="text-[#C9A961] font-semibold">🇪🇺 EU Data Protection</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                        GDPR Compliance
                    </h1>
                    <p className="text-lg text-gray-300">
                        Our commitment to protecting your data under EU regulations
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
                                Aalishaan Global BPO Services is committed to full compliance with the General Data Protection Regulation (GDPR) and respecting the data protection rights of individuals in the European Union. This policy outlines our GDPR compliance measures and your rights under this regulation.
                            </p>
                        </div>

                        {/* GDPR Awareness */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-[#C9A961]">1.</span> GDPR Awareness & Commitment
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We recognize the importance of GDPR compliance and have implemented comprehensive measures to ensure:
                            </p>
                            <ul className="space-y-3 text-gray-700 ml-6">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span><strong>Lawful Processing:</strong> All personal data is processed lawfully, fairly, and transparently</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span><strong>Purpose Limitation:</strong> Data is collected for specified, explicit, and legitimate purposes</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span><strong>Data Minimization:</strong> We collect only the data necessary for our purposes</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span><strong>Accuracy:</strong> Personal data is kept accurate and up to date</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span><strong>Storage Limitation:</strong> Data is retained only as long as necessary</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span><strong>Integrity & Confidentiality:</strong> Appropriate security measures protect your data</span>
                                </li>
                            </ul>
                        </div>

                        {/* Legal Basis for Processing */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-[#C9A961]">2.</span> Legal Basis for Processing
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We process personal data under the following legal bases:
                            </p>
                            <div className="space-y-4">
                                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Consent</h3>
                                    <p className="text-gray-700">You have given clear consent for us to process your personal data for specific purposes (e.g., marketing communications).</p>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Contract Performance</h3>
                                    <p className="text-gray-700">Processing is necessary for the performance of a contract with you or to take steps at your request before entering into a contract.</p>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Legitimate Interests</h3>
                                    <p className="text-gray-700">Processing is necessary for our legitimate business interests, provided these do not override your rights and freedoms.</p>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Legal Obligation</h3>
                                    <p className="text-gray-700">Processing is necessary to comply with legal obligations to which we are subject.</p>
                                </div>
                            </div>
                        </div>

                        {/* Your GDPR Rights */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-[#C9A961]">3.</span> Your Rights Under GDPR
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Under GDPR, you have the following rights regarding your personal data:
                            </p>

                            <div className="space-y-6">
                                <div className="border-l-4 border-[#C9A961] pl-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Right to Access</h3>
                                    <p className="text-gray-700">You have the right to request copies of your personal data. We may charge a small fee for this service.</p>
                                </div>

                                <div className="border-l-4 border-[#C9A961] pl-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Right to Rectification</h3>
                                    <p className="text-gray-700">You have the right to request correction of any information you believe is inaccurate or incomplete.</p>
                                </div>

                                <div className="border-l-4 border-[#C9A961] pl-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Right to Erasure ("Right to be Forgotten")</h3>
                                    <p className="text-gray-700">You have the right to request deletion of your personal data under certain conditions.</p>
                                </div>

                                <div className="border-l-4 border-[#C9A961] pl-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Right to Restrict Processing</h3>
                                    <p className="text-gray-700">You have the right to request restriction of processing of your personal data under certain conditions.</p>
                                </div>

                                <div className="border-l-4 border-[#C9A961] pl-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Right to Data Portability</h3>
                                    <p className="text-gray-700">You have the right to request transfer of your data to another organization or directly to you in a structured, commonly used format.</p>
                                </div>

                                <div className="border-l-4 border-[#C9A961] pl-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Right to Object</h3>
                                    <p className="text-gray-700">You have the right to object to our processing of your personal data under certain conditions.</p>
                                </div>

                                <div className="border-l-4 border-[#C9A961] pl-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Rights Related to Automated Decision-Making</h3>
                                    <p className="text-gray-700">You have the right not to be subject to decisions based solely on automated processing, including profiling.</p>
                                </div>
                            </div>

                            <div className="bg-[#C9A961]/10 rounded-2xl p-6 mt-8 border border-[#C9A961]/20">
                                <p className="text-gray-900 font-semibold mb-2">How to Exercise Your Rights</p>
                                <p className="text-gray-700">
                                    To exercise any of these rights, please contact our Data Protection Officer at{' '}
                                    <a href="mailto:dpo@aalishaan-global.com" className="text-[#C9A961] hover:underline font-semibold">dpo@aalishaan-global.com</a>
                                    {' '}or use our <a href="/contact" className="text-[#C9A961] hover:underline font-semibold">contact form</a>.
                                </p>
                                <p className="text-gray-700 mt-2">
                                    We will respond to your request within one month. In complex cases, we may extend this period by two additional months.
                                </p>
                            </div>
                        </div>

                        {/* Data Protection Measures */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-[#C9A961]">4.</span> Data Protection Measures
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We have implemented robust technical and organizational measures to protect your personal data:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
                                    <div className="w-12 h-12 bg-[#C9A961]/10 rounded-xl flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-[#C9A961]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Encryption</h3>
                                    <p className="text-gray-600">Data encrypted in transit (SSL/TLS) and at rest</p>
                                </div>

                                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
                                    <div className="w-12 h-12 bg-[#C9A961]/10 rounded-xl flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-[#C9A961]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Access Control</h3>
                                    <p className="text-gray-600">Strict access controls and authentication</p>
                                </div>

                                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
                                    <div className="w-12 h-12 bg-[#C9A961]/10 rounded-xl flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-[#C9A961]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Regular Audits</h3>
                                    <p className="text-gray-600">Periodic security assessments and compliance reviews</p>
                                </div>

                                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
                                    <div className="w-12 h-12 bg-[#C9A961]/10 rounded-xl flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-[#C9A961]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Staff Training</h3>
                                    <p className="text-gray-600">Comprehensive GDPR training for all employees</p>
                                </div>
                            </div>
                        </div>

                        {/* Data Transfers */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-[#C9A961]">5.</span> International Data Transfers
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                When we transfer personal data outside the European Economic Area (EEA), we ensure appropriate safeguards are in place:
                            </p>
                            <ul className="space-y-2 text-gray-700 ml-6">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span>Standard Contractual Clauses (SCCs) approved by the European Commission</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span>Adequacy decisions by the European Commission</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span>Binding Corporate Rules where applicable</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span>Your explicit consent when required</span>
                                </li>
                            </ul>
                        </div>

                        {/* Data Breach Notification */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-[#C9A961]">6.</span> Data Breach Notification
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                In the unlikely event of a data breach that poses a risk to your rights and freedoms, we will:
                            </p>
                            <ul className="space-y-2 text-gray-700 ml-6">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span>Notify the relevant supervisory authority within 72 hours of becoming aware of the breach</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span>Notify affected individuals without undue delay if the breach is likely to result in high risk</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span>Document the breach and our response in accordance with GDPR requirements</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#C9A961] mt-1">•</span>
                                    <span>Take immediate steps to mitigate the breach and prevent future occurrences</span>
                                </li>
                            </ul>
                        </div>

                        {/* Supervisory Authority */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-[#C9A961]">7.</span> Right to Lodge a Complaint
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                If you believe we have not handled your personal data in accordance with GDPR, you have the right to lodge a complaint with your local supervisory authority. However, we encourage you to contact us first so we can address your concerns.
                            </p>
                            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                <p className="text-gray-700 mb-2"><strong>Our Data Protection Officer:</strong></p>
                                <p className="text-gray-700">Email: <a href="mailto:dpo@aalishaan-global.com" className="text-[#C9A961] hover:underline">dpo@aalishaan-global.com</a></p>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-[#C9A961]">8.</span> Contact Us
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                For any GDPR-related questions or to exercise your rights, please contact:
                            </p>
                            <div className="bg-gradient-to-br from-[#C9A961]/10 to-white rounded-2xl p-6 border-2 border-[#C9A961]/20">
                                <p className="text-gray-900 font-bold mb-4">Data Protection Officer</p>
                                <p className="text-gray-700 mb-2">Aalishaan Global BPO Services</p>
                                <p className="text-gray-700 mb-2">Email: <a href="mailto:dpo@aalishaan-global.com" className="text-[#C9A961] hover:underline font-semibold">dpo@aalishaan-global.com</a></p>
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
                            { title: "Privacy Policy", href: "/privacy-policy" },
                            { title: "Data Security", href: "/data-security" },
                            { title: "Terms & Conditions", href: "/terms" },
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
