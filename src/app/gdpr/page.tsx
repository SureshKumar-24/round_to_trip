import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";
import { Shield, Lock, FileCheck, Users, Bell, HelpCircle, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "GDPR Compliance - Data Protection Practices",
    description:
        "Learn about Aalishaan Global's GDPR-aligned data protection practices. We respect your privacy and protect your personal data in accordance with EU data protection principles.",
    keywords: [
        "GDPR compliance",
        "data protection",
        "EU data privacy",
        "personal data rights",
        "data security",
        "privacy policy",
    ],
    openGraph: {
        title: "GDPR Compliance - Aalishaan Global BPO Services",
        description:
            "Our commitment to protecting your data in accordance with GDPR principles.",
        url: "/gdpr",
        type: "website",
    },
    alternates: {
        canonical: "/gdpr",
    },
};

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
                    <div className="inline-block bg-[#1E73BE]/20 backdrop-blur-sm border border-[#1E73BE]/30 rounded-full px-6 py-2 mb-6">
                        <span className="text-[#1E73BE] font-semibold">🇪🇺 Data Protection</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                        GDPR-Aligned Practices
                    </h1>
                    <p className="text-lg text-gray-300">
                        Our commitment to protecting your data in accordance with GDPR principles
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
                                Aalishaan Global BPO Services follows <strong>GDPR-aligned practices</strong> and respects the data protection rights of individuals in the European Union. This page outlines our approach to data protection and your rights.
                            </p>
                        </div>

                        {/* Our Commitment */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-[#1E73BE]">1.</span> Our Data Protection Commitment
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We follow GDPR-aligned practices to ensure:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { Icon: Shield, title: "Lawful Processing", desc: "All personal data is processed lawfully, fairly, and transparently" },
                                    { Icon: FileCheck, title: "Purpose Limitation", desc: "Data is collected for specified, explicit, and legitimate purposes" },
                                    { Icon: Lock, title: "Data Minimization", desc: "We collect only the data necessary for our purposes" },
                                    { Icon: Users, title: "Integrity & Confidentiality", desc: "Appropriate security measures protect your data" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                                        <div className="w-12 h-12 bg-[#1E73BE]/10 rounded-xl flex items-center justify-center mb-4">
                                            <item.Icon className="w-6 h-6 text-[#1E73BE]" />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                        <p className="text-gray-600 text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Your Rights */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-[#1E73BE]">2.</span> Your Rights
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Under GDPR principles, you have the following rights regarding your personal data:
                            </p>

                            <div className="space-y-4">
                                {[
                                    { title: "Right to Access", desc: "You can request copies of your personal data." },
                                    { title: "Right to Rectification", desc: "You can request correction of any inaccurate information." },
                                    { title: "Right to Erasure", desc: "You can request deletion of your personal data under certain conditions." },
                                    { title: "Right to Restrict Processing", desc: "You can request restriction of processing under certain conditions." },
                                    { title: "Right to Data Portability", desc: "You can request transfer of your data to another organization." },
                                    { title: "Right to Object", desc: "You can object to our processing of your personal data." }
                                ].map((item, idx) => (
                                    <div key={idx} className="border-l-4 border-[#1E73BE] pl-6">
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                                        <p className="text-gray-700">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-[#1E73BE]/10 rounded-2xl p-6 mt-8 border border-[#1E73BE]/20">
                                <p className="text-gray-900 font-semibold mb-2">How to Exercise Your Rights</p>
                                <p className="text-gray-700">
                                    To exercise any of these rights, please contact us at{' '}
                                    <a href="mailto:info@aalishaanglobalbposervices.com" className="text-[#1E73BE] hover:underline font-semibold">info@aalishaanglobalbposervices.com</a>
                                </p>
                            </div>
                        </div>

                        {/* Data Protection Measures */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-[#1E73BE]">3.</span> Data Protection Measures
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We have implemented technical and organizational measures to protect your personal data:
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    { Icon: Lock, title: "Encryption", desc: "Data encrypted in transit and at rest" },
                                    { Icon: Shield, title: "Access Control", desc: "Strict access controls" },
                                    { Icon: FileCheck, title: "Regular Reviews", desc: "Periodic security assessments" },
                                    { Icon: Users, title: "Staff Training", desc: "Team trained on data protection" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
                                        <div className="w-10 h-10 bg-[#1E73BE]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                                            <item.Icon className="w-5 h-5 text-[#1E73BE]" />
                                        </div>
                                        <h3 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h3>
                                        <p className="text-gray-600 text-xs">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Data Breach */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-[#1E73BE]">4.</span> Data Breach Response
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                In the unlikely event of a data breach that poses a risk to your rights, we will:
                            </p>
                            <ul className="space-y-2 text-gray-700 ml-6">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-[#1E73BE] mt-0.5 flex-shrink-0" />
                                    <span>Take immediate steps to mitigate the breach</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-[#1E73BE] mt-0.5 flex-shrink-0" />
                                    <span>Notify affected individuals as appropriate</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-[#1E73BE] mt-0.5 flex-shrink-0" />
                                    <span>Document the breach and our response</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-[#1E73BE] mt-0.5 flex-shrink-0" />
                                    <span>Implement measures to prevent future occurrences</span>
                                </li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-[#1E73BE]">5.</span> Contact Us
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                For any data protection questions or to exercise your rights, please contact:
                            </p>
                            <div className="bg-gradient-to-br from-[#1E73BE]/10 to-white rounded-2xl p-6 border-2 border-[#1E73BE]/20">
                                <p className="text-gray-900 font-bold mb-4">Aalishaan Global BPO Services</p>
                                <p className="text-gray-700 mb-2">Email: <a href="mailto:info@aalishaanglobalbposervices.com" className="text-[#1E73BE] hover:underline font-semibold">info@aalishaanglobalbposervices.com</a></p>
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
                            { title: "Data Security", href: "/data-security" },
                            { title: "Terms of Service", href: "/terms" }
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
                                <li>info@aalishaanglobalbposervices.com</li>
                                <li>Country: India</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
                        <p>&copy; 2026 Aalishaan Global BPO Services. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
