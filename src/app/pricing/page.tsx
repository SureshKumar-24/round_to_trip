import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";
import { Mail, MessageSquare, Phone, Headphones, ClipboardList, CheckCircle2, XCircle, Calendar, Shield, BarChart3, Users, Clock, Globe } from "lucide-react";

export default function Pricing() {
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
                            <a href="/pricing" className="text-[#1E73BE] hover:text-[#155A96] font-semibold text-sm xl:text-base transition-colors">
                                Pricing
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
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        Pricing & <span className="bg-gradient-to-r from-[#1E73BE] via-[#5BA3E6] to-[#1E73BE] bg-clip-text text-transparent">Engagement Models</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
                        Flexible, pilot-first pricing models designed for growing businesses across the UK, US, and European markets.
                    </p>
                    <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Our pricing is transparent, scalable, and aligned with inbound customer support operations only. We do not offer outbound sales or cold-calling services.
                    </p>
                </div>
            </section>

            {/* Supported Channels */}
            <section className="py-12 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Supported Channels</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                        {[
                            { Icon: Mail, label: "Email Support" },
                            { Icon: MessageSquare, label: "Live Chat" },
                            { Icon: Headphones, label: "Inbound Voice" },
                            { Icon: ClipboardList, label: "Ticket Management" }
                        ].map((channel, idx) => (
                            <div key={idx} className="flex items-center gap-2 bg-gray-50 rounded-full px-5 py-3 border border-gray-200">
                                <channel.Icon className="w-5 h-5 text-[#1E73BE]" />
                                <span className="text-gray-700 font-medium">{channel.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Regional Pricing */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Regional <span className="text-[#1E73BE]">Pricing</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Tailored pricing for UK, US, and European markets with local currency support
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* UK Pricing */}
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-100 hover:border-[#1E73BE] transition-all">
                            <div className="bg-gradient-to-r from-[#1E73BE] to-[#155A96] p-6 text-white text-center">
                                <span className="text-4xl mb-2 block">🇬🇧</span>
                                <h3 className="text-2xl font-bold">UK Pricing</h3>
                                <p className="text-white/80 text-sm mt-1">Customer Support Outsourcing</p>
                            </div>
                            <div className="p-6">
                                <div className="space-y-4 mb-6">
                                    <div className="bg-gray-50 rounded-xl p-4">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-gray-700 font-medium">Email & Chat Support</span>
                                        </div>
                                        <div className="text-2xl font-bold text-[#1E73BE]">£9 – £12 <span className="text-sm font-normal text-gray-500">/ agent / hour</span></div>
                                    </div>
                                    <div className="bg-gray-50 rounded-xl p-4">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-gray-700 font-medium">Inbound Voice Support</span>
                                        </div>
                                        <div className="text-2xl font-bold text-[#1E73BE]">£11 – £14 <span className="text-sm font-normal text-gray-500">/ agent / hour</span></div>
                                    </div>
                                </div>
                                <div className="border-t border-gray-200 pt-4 mb-4">
                                    <h4 className="font-semibold text-gray-900 mb-3">Coverage</h4>
                                    <ul className="space-y-2">
                                        {["UK business hours", "Extended hours on request", "Weekend support available"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                                <CheckCircle2 className="w-4 h-4 text-[#1E73BE]" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-[#1E73BE]/10 rounded-xl p-4">
                                    <h4 className="font-semibold text-[#1E73BE] mb-2">Pilot Option</h4>
                                    <ul className="space-y-1 text-sm text-gray-700">
                                        <li>• 7–14 day pilot engagement</li>
                                        <li>• 1–3 dedicated agents</li>
                                        <li>• No long-term commitment</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* US Pricing */}
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-[#1E73BE] relative">
                            <div className="absolute top-4 right-4 bg-[#1E73BE] text-white text-xs font-bold px-3 py-1 rounded-full">
                                POPULAR
                            </div>
                            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 text-white text-center">
                                <span className="text-4xl mb-2 block">🇺🇸</span>
                                <h3 className="text-2xl font-bold">US Pricing</h3>
                                <p className="text-white/80 text-sm mt-1">Customer Experience & Support</p>
                            </div>
                            <div className="p-6">
                                <div className="space-y-4 mb-6">
                                    <div className="bg-gray-50 rounded-xl p-4">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-gray-700 font-medium">Email & Chat Support</span>
                                        </div>
                                        <div className="text-2xl font-bold text-[#1E73BE]">$10 – $13 <span className="text-sm font-normal text-gray-500">/ agent / hour</span></div>
                                    </div>
                                    <div className="bg-gray-50 rounded-xl p-4">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-gray-700 font-medium">Inbound Voice Support</span>
                                        </div>
                                        <div className="text-2xl font-bold text-[#1E73BE]">$12 – $15 <span className="text-sm font-normal text-gray-500">/ agent / hour</span></div>
                                    </div>
                                </div>
                                <div className="border-t border-gray-200 pt-4 mb-4">
                                    <h4 className="font-semibold text-gray-900 mb-3">Coverage</h4>
                                    <ul className="space-y-2">
                                        {["US EST / CST / PST", "Night and weekend coverage", "Scalable shift planning"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                                <CheckCircle2 className="w-4 h-4 text-[#1E73BE]" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-[#1E73BE]/10 rounded-xl p-4">
                                    <h4 className="font-semibold text-[#1E73BE] mb-2">Pilot Option</h4>
                                    <ul className="space-y-1 text-sm text-gray-700">
                                        <li>• 7–10 working days</li>
                                        <li>• 1–2 trained agents</li>
                                        <li>• Real workflow handling</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Europe Pricing */}
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-100 hover:border-[#1E73BE] transition-all">
                            <div className="bg-gradient-to-r from-[#1E73BE] to-[#155A96] p-6 text-white text-center">
                                <span className="text-4xl mb-2 block">🇪🇺</span>
                                <h3 className="text-2xl font-bold">Europe Pricing</h3>
                                <p className="text-white/80 text-sm mt-1">English & German Support</p>
                            </div>
                            <div className="p-6">
                                <div className="space-y-4 mb-6">
                                    <div className="bg-gray-50 rounded-xl p-4">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-gray-700 font-medium">English Email & Chat</span>
                                        </div>
                                        <div className="text-2xl font-bold text-[#1E73BE]">€9 – €12 <span className="text-sm font-normal text-gray-500">/ agent / hour</span></div>
                                    </div>
                                    <div className="bg-gray-50 rounded-xl p-4">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-gray-700 font-medium">German Support (B2)</span>
                                        </div>
                                        <div className="text-2xl font-bold text-[#1E73BE]">€12 – €15 <span className="text-sm font-normal text-gray-500">/ agent / hour</span></div>
                                    </div>
                                    <div className="bg-gray-50 rounded-xl p-4">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-gray-700 font-medium">Inbound Voice (EN/DE)</span>
                                        </div>
                                        <div className="text-2xl font-bold text-[#1E73BE]">€13 – €16 <span className="text-sm font-normal text-gray-500">/ agent / hour</span></div>
                                    </div>
                                </div>
                                <div className="border-t border-gray-200 pt-4 mb-4">
                                    <h4 className="font-semibold text-gray-900 mb-3">Coverage</h4>
                                    <ul className="space-y-2">
                                        {["CET & GMT-aligned shifts", "Weekend support available", "EU holiday-aware scheduling"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                                <CheckCircle2 className="w-4 h-4 text-[#1E73BE]" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-[#1E73BE]/10 rounded-xl p-4">
                                    <h4 className="font-semibold text-[#1E73BE] mb-2">Pilot Option</h4>
                                    <ul className="space-y-1 text-sm text-gray-700">
                                        <li>• 7–14 day pilot</li>
                                        <li>• Language-tested agents</li>
                                        <li>• Quality & process validation</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Engagement Models */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Flexible <span className="text-[#1E73BE]">Engagement Models</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Multiple engagement structures depending on your needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {[
                            { icon: Clock, title: "Hourly Pricing", desc: "Pay only for the hours you need" },
                            { icon: Users, title: "Dedicated Agent", desc: "Full-time agents dedicated to your account" },
                            { icon: Calendar, title: "Pilot-First", desc: "Test before long-term commitment" },
                            { icon: BarChart3, title: "Scale-Up", desc: "Grow after validation" }
                        ].map((model, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-2xl p-6 text-center border-2 border-gray-100 hover:border-[#1E73BE] transition-all">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#1E73BE] to-[#155A96] rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <model.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{model.title}</h3>
                                <p className="text-gray-600 text-sm">{model.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Final Pricing Determined By</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {["Number of agents", "Coverage hours", "Support channels", "Ticket or call volume"].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2 bg-white rounded-xl p-4 shadow-sm">
                                    <CheckCircle2 className="w-5 h-5 text-[#1E73BE] flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Included */}
                        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                                    <CheckCircle2 className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">What's Included</h3>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    "NDA-first engagement",
                                    "GDPR-aware operations",
                                    "Quality monitoring & reporting",
                                    "Supervisor oversight",
                                    "Secure access-controlled environment"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                                        <span className="text-white">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Not Offered */}
                        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                                    <XCircle className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">What We Do Not Offer</h3>
                            </div>
                            <ul className="space-y-4 mb-6">
                                {[
                                    "Outbound sales",
                                    "Cold calling",
                                    "Lead generation"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                                        <span className="text-white">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-300 bg-white/10 rounded-xl p-4 border-l-4 border-[#1E73BE]">
                                Our focus is strictly on <strong className="text-white">inbound customer support</strong> and experience delivery.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-20 bg-gradient-to-r from-[#1E73BE] via-[#155A96] to-[#1E73BE]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        Get Started Today
                    </h2>
                    <p className="text-lg sm:text-xl text-white/95 mb-10 max-w-3xl mx-auto">
                        Test our team before committing long-term. Discuss your requirements and receive a tailored proposal.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <a href="/contact" className="bg-white text-[#1E73BE] px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all shadow-2xl hover:scale-105 flex items-center justify-center gap-2">
                            <Calendar className="w-5 h-5" />
                            Request a Pilot
                        </a>
                        <a href="/contact" className="bg-gray-900 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-800 transition-all shadow-2xl flex items-center justify-center gap-2">
                            <Phone className="w-5 h-5" />
                            Book a 15-Min Call
                        </a>
                    </div>
                    <p className="text-white/80 text-sm">
                        📌 Pricing listed above is indicative and subject to final scoping during the pilot or discovery call.
                    </p>
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
                                <li><a href="/about" className="text-gray-400 hover:text-[#1E73BE] transition-colors">About</a></li>
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
