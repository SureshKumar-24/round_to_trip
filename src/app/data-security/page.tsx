import Image from "next/image";

export default function DataSecurity() {
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
                                    className="h-16 sm:h-18 md:h-20 w-auto"
                                    priority
                                />
                            </a>
                        </div>
                        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
                            <a href="/" className="text-gray-700 hover:text-[#1E73BE] font-medium text-sm xl:text-base transition-colors">
                                Home
                            </a>
                            <a href="/contact" className="bg-[#1E73BE] text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-full hover:bg-[#155A96] font-semibold text-sm xl:text-base transition-all shadow-lg hover:shadow-xl hover:scale-105">
                                Contact Us
                            </a>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="pt-32 sm:pt-36 md:pt-40 pb-12 bg-gradient-to-br from-gray-900 to-gray-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-block bg-[#1E73BE]/20 backdrop-blur-sm border border-[#1E73BE]/30 rounded-full px-6 py-2 mb-6">
                        <span className="text-[#1E73BE] font-semibold">🔒 Enterprise-Grade Security</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                        Data Security & Compliance
                    </h1>
                    <p className="text-lg text-gray-300">
                        Protecting your data with bank-level security protocols
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Introduction */}
                    <div className="mb-16">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            At Aalishaan Global, data security is not an afterthought—it's fundamental to everything we do. We implement comprehensive security measures to protect your sensitive business information and customer data at every level of our operations.
                        </p>
                    </div>

                    {/* Security Framework */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                            <span className="text-[#1E73BE]">1.</span> Our Security Framework
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-[#1E73BE]/10 to-white rounded-2xl p-6 border-2 border-[#1E73BE]/20">
                                <div className="w-14 h-14 bg-[#1E73BE] rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Data Encryption</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1E73BE] mt-1">•</span>
                                        <span>AES-256 encryption for data at rest</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1E73BE] mt-1">•</span>
                                        <span>TLS 1.3 for data in transit</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1E73BE] mt-1">•</span>
                                        <span>End-to-end encryption for sensitive communications</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-200">
                                <div className="w-14 h-14 bg-gray-900 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Access Control</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1E73BE] mt-1">•</span>
                                        <span>Multi-factor authentication (MFA)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1E73BE] mt-1">•</span>
                                        <span>Role-based access control (RBAC)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1E73BE] mt-1">•</span>
                                        <span>Principle of least privilege</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-200">
                                <div className="w-14 h-14 bg-gray-900 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Infrastructure</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1E73BE] mt-1">•</span>
                                        <span>Secure cloud hosting (AWS/Azure)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1E73BE] mt-1">•</span>
                                        <span>Firewall and intrusion detection</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1E73BE] mt-1">•</span>
                                        <span>Regular security patches and updates</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-[#1E73BE]/10 to-white rounded-2xl p-6 border-2 border-[#1E73BE]/20">
                                <div className="w-14 h-14 bg-[#1E73BE] rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Monitoring & Auditing</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1E73BE] mt-1">•</span>
                                        <span>24/7 security monitoring</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1E73BE] mt-1">•</span>
                                        <span>Comprehensive audit logs</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1E73BE] mt-1">•</span>
                                        <span>Regular security audits</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* GDPR Awareness */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                            <span className="text-[#1E73BE]">2.</span> GDPR & Compliance
                        </h2>

                        <div className="bg-gradient-to-br from-[#1E73BE] to-[#155A96] rounded-3xl p-8 text-white mb-8">
                            <h3 className="text-2xl font-bold mb-4">Full GDPR Compliance</h3>
                            <p className="text-white/90 text-lg leading-relaxed">
                                We are fully committed to GDPR compliance and have implemented all necessary technical and organizational measures to protect EU citizen data. Our processes ensure lawful, fair, and transparent data processing at all times.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { title: "Data Minimization", desc: "We collect only necessary data" },
                                { title: "Purpose Limitation", desc: "Data used only for stated purposes" },
                                { title: "Storage Limitation", desc: "Data retained only as long as needed" },
                                { title: "Accuracy", desc: "Data kept accurate and up-to-date" },
                                { title: "Integrity & Confidentiality", desc: "Appropriate security measures" },
                                { title: "Accountability", desc: "Full documentation and compliance" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                                    <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Data Handling Practices */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                            <span className="text-[#1E73BE]">3.</span> Data Handling Practices
                        </h2>

                        <div className="space-y-6">
                            <div className="border-l-4 border-[#1E73BE] pl-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Data Classification</h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    We classify all data based on sensitivity levels and apply appropriate security controls:
                                </p>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1E73BE] mt-1">•</span>
                                        <span><strong>Public:</strong> Information intended for public access</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1E73BE] mt-1">•</span>
                                        <span><strong>Internal:</strong> Business information for internal use</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1E73BE] mt-1">•</span>
                                        <span><strong>Confidential:</strong> Sensitive business and customer data</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1E73BE] mt-1">•</span>
                                        <span><strong>Restricted:</strong> Highly sensitive data requiring maximum protection</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="border-l-4 border-[#1E73BE] pl-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Data Transfer</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    All data transfers, whether internal or external, are conducted through secure, encrypted channels. We use VPNs, SFTP, and other secure protocols to ensure data integrity and confidentiality during transmission.
                                </p>
                            </div>

                            <div className="border-l-4 border-[#1E73BE] pl-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Data Backup & Recovery</h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    We maintain robust backup and disaster recovery procedures:
                                </p>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1E73BE] mt-1">•</span>
                                        <span>Automated daily backups with encryption</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1E73BE] mt-1">•</span>
                                        <span>Geographically distributed backup storage</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1E73BE] mt-1">•</span>
                                        <span>Regular backup testing and recovery drills</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1E73BE] mt-1">•</span>
                                        <span>Business continuity planning</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="border-l-4 border-[#1E73BE] pl-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Data Disposal</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    When data is no longer needed, we ensure secure disposal through cryptographic erasure, physical destruction of media, or certified data wiping services, depending on the data classification level.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Physical Security */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                            <span className="text-[#1E73BE]">4.</span> Physical Security
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Facility Access Control</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1E73BE] mt-1">•</span>
                                        <span>Biometric access control systems</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1E73BE] mt-1">•</span>
                                        <span>24/7 security personnel</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1E73BE] mt-1">•</span>
                                        <span>CCTV surveillance</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1E73BE] mt-1">•</span>
                                        <span>Visitor management system</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Workstation Security</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1E73BE] mt-1">•</span>
                                        <span>Locked workstations when unattended</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1E73BE] mt-1">•</span>
                                        <span>Clean desk policy</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1E73BE] mt-1">•</span>
                                        <span>No personal devices in production areas</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1E73BE] mt-1">•</span>
                                        <span>Secure document disposal</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Employee Training */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                            <span className="text-[#1E73BE]">5.</span> Employee Training & NDA Culture
                        </h2>

                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white mb-6">
                            <h3 className="text-2xl font-bold mb-4">Security-First Culture</h3>
                            <p className="text-white/90 text-lg leading-relaxed">
                                Every employee undergoes comprehensive security training before handling any client data. We foster a culture where data protection is everyone's responsibility.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-[#1E73BE]/10 rounded-2xl p-6 border border-[#1E73BE]/20">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Mandatory Training</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1E73BE] mt-1">•</span>
                                        <span>Data protection and GDPR training</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1E73BE] mt-1">•</span>
                                        <span>Security awareness programs</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1E73BE] mt-1">•</span>
                                        <span>Phishing and social engineering awareness</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1E73BE] mt-1">•</span>
                                        <span>Regular refresher courses</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-[#1E73BE]/10 rounded-2xl p-6 border border-[#1E73BE]/20">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">NDA & Confidentiality</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1E73BE] mt-1">•</span>
                                        <span>All employees sign comprehensive NDAs</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1E73BE] mt-1">•</span>
                                        <span>Strict confidentiality policies</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1E73BE] mt-1">•</span>
                                        <span>Background verification for all staff</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1E73BE] mt-1">•</span>
                                        <span>Consequences for policy violations</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Incident Response */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                            <span className="text-[#1E73BE]">6.</span> Incident Response Plan
                        </h2>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            We maintain a comprehensive incident response plan to quickly identify, contain, and resolve security incidents:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {[
                                { step: "1", title: "Detection", desc: "24/7 monitoring identifies potential incidents" },
                                { step: "2", title: "Containment", desc: "Immediate action to limit impact" },
                                { step: "3", title: "Investigation", desc: "Root cause analysis and assessment" },
                                { step: "4", title: "Resolution", desc: "Remediation and prevention measures" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
                                    <div className="w-12 h-12 bg-[#1E73BE] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-white font-bold text-xl">{item.step}</span>
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                            <span className="text-[#1E73BE]">7.</span> Security Standards & Certifications
                        </h2>

                        <div className="bg-gradient-to-br from-[#1E73BE]/10 to-white rounded-3xl p-8 border-2 border-[#1E73BE]/20">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                While we don't yet hold ISO certifications, we follow industry best practices and are committed to achieving formal certifications as we grow. Our security measures align with:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {[
                                    "ISO 27001 Standards",
                                    "GDPR Requirements",
                                    "SOC 2 Principles",
                                    "PCI DSS Guidelines"
                                ].map((standard, idx) => (
                                    <div key={idx} className="bg-white rounded-xl p-4 border border-gray-200 text-center">
                                        <svg className="w-10 h-10 text-[#1E73BE] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                        <p className="font-semibold text-gray-900 text-sm">{standard}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="text-[#1E73BE]">8.</span> Security Inquiries
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            For security-related questions or to report a security concern, please contact our Security Team:
                        </p>
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                            <p className="text-gray-700 mb-2"><strong>Security Team</strong></p>
                            <p className="text-gray-700 mb-2">Email: <a href="mailto:security@aalishaan-global.com" className="text-[#1E73BE] hover:underline font-semibold">security@aalishaan-global.com</a></p>
                            <p className="text-gray-700">Phone: +1 (234) 567-8900</p>
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
                            { title: "GDPR Policy", href: "/gdpr" },
                            { title: "Terms & Conditions", href: "/terms" },
                            { title: "Cookie Policy", href: "/cookie-policy" }
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
                            <p className="text-gray-400">Premium BPO services for global businesses.</p>
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
