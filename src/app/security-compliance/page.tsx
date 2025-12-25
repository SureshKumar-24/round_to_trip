import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";
import { Shield, Lock, Monitor, Globe, Users, BarChart3, RefreshCw, Handshake, Mail, Calendar, Phone, CheckCircle2 } from "lucide-react";

export default function SecurityCompliance() {
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
                            <a href="/services" className="text-gray-700 hover:text-[#1E73BE] font-medium text-sm xl:text-base transition-colors">
                                Services
                            </a>
                            <a href="/why-choose-us" className="text-gray-700 hover:text-[#1E73BE] font-medium text-sm xl:text-base transition-colors">
                                Why Us
                            </a>
                            <a href="/about" className="text-gray-700 hover:text-[#1E73BE] font-medium text-sm xl:text-base transition-colors">
                                About
                            </a>
                            <a href="/contact" className="bg-[#1E73BE] text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-full hover:bg-[#155A96] font-semibold text-sm xl:text-base transition-all shadow-lg hover:shadow-xl hover:scale-105">
                                Request a Pilot
                            </a>
                        </nav>
                        <MobileMenu />
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-[#1E73BE] rounded-full filter blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-[#6F8FA6] rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <Shield className="w-12 h-12 sm:w-16 sm:h-16 text-[#1E73BE]" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        Security & <span className="bg-gradient-to-r from-[#1E73BE] via-[#5BA3E6] to-[#1E73BE] bg-clip-text text-transparent">Compliance</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
                        At Aalishaan Global BPO Services, data security and confidentiality are foundational to how we operate.
                    </p>
                    <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        We understand that our clients trust us with sensitive customer information, and we treat that responsibility with the highest priority. Our security framework is designed to meet the expectations of UK, US, and EU businesses while remaining transparent, ethical, and scalable.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-12">

                        {/* Data Protection & Confidentiality */}
                        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10">
                            <div className="flex items-start gap-6 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#1E73BE] to-[#155A96] rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <Lock className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Data Protection & Confidentiality</h2>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "All client engagements begin with a Non-Disclosure Agreement (NDA)",
                                    "Strict confidentiality policies are followed across all teams",
                                    "Customer data is accessed only for defined support purposes",
                                    "No data is shared with third parties without written authorization"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#1E73BE] mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-6 text-gray-600 bg-gray-50 rounded-xl p-4 border-l-4 border-[#1E73BE]">
                                We operate on a <strong>need-to-know access model</strong>, ensuring information is only visible to authorized personnel.
                            </p>
                        </div>

                        {/* Access Control & Infrastructure */}
                        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10">
                            <div className="flex items-start gap-6 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#1E73BE] to-[#155A96] rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <Monitor className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Access Control & Infrastructure</h2>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "Role-based system access for agents and supervisors",
                                    "Secure login credentials with periodic access reviews",
                                    "No local data storage on agent systems",
                                    "Work is performed on controlled environments only"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#1E73BE] mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-6 text-gray-600 bg-gray-50 rounded-xl p-4 border-l-4 border-[#1E73BE]">
                                All access rights are <strong>reviewed and revoked immediately</strong> when no longer required.
                            </p>
                        </div>

                        {/* GDPR Awareness & Global Compliance */}
                        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10">
                            <div className="flex items-start gap-6 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#1E73BE] to-[#155A96] rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <Globe className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">GDPR Awareness & Global Compliance</h2>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-6">
                                While we are not currently ISO-certified, we operate with strong GDPR awareness and compliance practices, including:
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Data minimization and purpose limitation",
                                    "Secure handling of EU customer data",
                                    "Awareness training for agents handling EU/UK customers",
                                    "Respect for data subject privacy and confidentiality"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#1E73BE] mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-6 text-gray-600 bg-gray-50 rounded-xl p-4 border-l-4 border-[#1E73BE]">
                                We actively align our processes with the expectations of <strong>European and international clients</strong>.
                            </p>
                        </div>

                        {/* Agent Training & Compliance Culture */}
                        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10">
                            <div className="flex items-start gap-6 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#1E73BE] to-[#155A96] rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <Users className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Agent Training & Compliance Culture</h2>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "Mandatory onboarding on data security and confidentiality",
                                    "Regular refreshers on privacy, phishing, and information handling",
                                    "Clear SOPs for customer identity verification",
                                    "Zero tolerance policy for misuse of customer data"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#1E73BE] mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-6 text-gray-600 bg-gray-50 rounded-xl p-4 border-l-4 border-[#1E73BE]">
                                Our team is trained not just to support customers — <strong>but to protect them</strong>.
                            </p>
                        </div>

                        {/* Monitoring, Reporting & Accountability */}
                        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10">
                            <div className="flex items-start gap-6 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#1E73BE] to-[#155A96] rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <BarChart3 className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Monitoring, Reporting & Accountability</h2>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "Supervisor oversight on all live operations",
                                    "Regular quality and compliance checks",
                                    "Incident escalation procedures in place",
                                    "Transparent reporting available during pilot and ongoing operations"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#1E73BE] mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-6 text-gray-600 bg-gray-50 rounded-xl p-4 border-l-4 border-[#1E73BE]">
                                Any compliance concern is <strong>addressed immediately and documented</strong>.
                            </p>
                        </div>

                        {/* Continuous Improvement */}
                        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10">
                            <div className="flex items-start gap-6 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#1E73BE] to-[#155A96] rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <RefreshCw className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Continuous Improvement</h2>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-6">
                                Security is not a one-time setup — it is an <strong>ongoing commitment</strong>. We continuously review:
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Access policies",
                                    "Internal SOPs",
                                    "Client-specific compliance requirements"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#1E73BE] mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-6 text-gray-600 bg-gray-50 rounded-xl p-4 border-l-4 border-[#1E73BE]">
                                As we scale, we plan to formalize <strong>additional certifications</strong> based on client needs.
                            </p>
                        </div>

                        {/* Our Commitment */}
                        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10">
                            <div className="flex items-start gap-6 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#1E73BE] to-[#155A96] rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <Handshake className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Commitment</h2>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-6">
                                We may be a growing organization, but our security mindset matches <strong>enterprise expectations</strong>. We believe trust is earned through:
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    "Transparency",
                                    "Discipline",
                                    "Clear processes",
                                    "Ethical operations"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                                        <CheckCircle2 className="w-5 h-5 text-[#1E73BE] flex-shrink-0" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-6 text-gray-600 bg-[#1E73BE]/10 rounded-xl p-4 border-l-4 border-[#1E73BE]">
                                If you have specific compliance or security requirements, we are happy to <strong>review and align during the pilot phase</strong>.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-20 bg-gradient-to-r from-[#1E73BE] via-[#155A96] to-[#1E73BE]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <Mail className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        Questions About Security?
                    </h2>
                    <p className="text-lg sm:text-xl text-white/95 mb-10 max-w-3xl mx-auto">
                        Book a call or request a pilot to discuss your compliance needs in detail.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/contact" className="bg-white text-[#1E73BE] px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all shadow-2xl hover:scale-105 flex items-center justify-center gap-2">
                            <Calendar className="w-5 h-5" />
                            Request a Pilot
                        </a>
                        <a href="/contact" className="bg-gray-900 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-800 transition-all shadow-2xl flex items-center justify-center gap-2">
                            <Phone className="w-5 h-5" />
                            Book a Call
                        </a>
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
                                <li><a href="/about" className="text-gray-400 hover:text-[#1E73BE] transition-colors">About</a></li>
                                <li><a href="/why-choose-us" className="text-gray-400 hover:text-[#1E73BE] transition-colors">Why Choose Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4 text-[#1E73BE]">Legal</h3>
                            <ul className="space-y-2">
                                <li><a href="/privacy-policy" className="text-gray-400 hover:text-[#1E73BE] transition-colors">Privacy Policy</a></li>
                                <li><a href="/gdpr" className="text-gray-400 hover:text-[#1E73BE] transition-colors">GDPR</a></li>
                                <li><a href="/terms" className="text-gray-400 hover:text-[#1E73BE] transition-colors">Terms & Conditions</a></li>
                                <li><a href="/security-compliance" className="text-gray-400 hover:text-[#1E73BE] transition-colors">Security & Compliance</a></li>
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
