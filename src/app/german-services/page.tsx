import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";
import { CheckCircle2, Plane, ShoppingCart, DollarSign, Monitor, Building2, ShoppingBag, Smile, Clock, Award } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "German Language BPO Services - Native German Support",
    description:
        "Native-level German customer support (C1/C2 proficiency) for Germany, Austria, and Switzerland. Travel, e-commerce, fintech, and SaaS industries served. Pilot-first approach.",
    keywords: [
        "German customer support",
        "German language BPO",
        "Deutsch Kundenservice",
        "Germany Austria Switzerland support",
        "C1 C2 German",
        "native German speakers",
        "German travel support",
    ],
    openGraph: {
        title: "German Language BPO Services - Aalishaan Global",
        description:
            "Native-level German customer support with C1/C2 proficiency for DACH region.",
        url: "/german-services",
        type: "website",
    },
    alternates: {
        canonical: "/german-services",
    },
};

export default function GermanServices() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header/Navigation */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
                    <div className="flex justify-between items-center">
                        <div>
                            <a href="/">
                                <Image
                                    src="/logo_round.svg"
                                    alt="Aalishaan Global BPO Services"
                                    width={280}
                                    height={95}
                                    className="h-16 sm:h-18 md:h-20 w-auto"
                                    priority
                                />
                            </a>
                        </div>
                        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
                            <a href="/services" className="text-gray-700 hover:text-[#1E73BE] font-medium text-sm xl:text-base transition-colors">
                                Services
                            </a>
                            <a href="/industries" className="text-gray-700 hover:text-[#1E73BE] font-medium text-sm xl:text-base transition-colors">
                                Industries
                            </a>
                            <a href="/german-services" className="text-[#1E73BE] hover:text-[#155A96] font-semibold text-sm xl:text-base transition-colors">
                                German Services
                            </a>
                            <a href="/why-choose-us" className="text-gray-700 hover:text-[#1E73BE] font-medium text-sm xl:text-base transition-colors">
                                Why Us
                            </a>
                            <a href="/about" className="text-gray-700 hover:text-[#1E73BE] font-medium text-sm xl:text-base transition-colors">
                                About
                            </a>
                            <a href="/contact" className="bg-[#1E73BE] text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-full hover:bg-[#155A96] font-semibold text-sm xl:text-base transition-all shadow-lg hover:shadow-xl hover:scale-105">
                                Contact Us
                            </a>
                        </nav>

                        {/* Mobile Menu */}
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
                    <div className="inline-block bg-[#1E73BE]/20 backdrop-blur-sm border border-[#1E73BE]/30 rounded-full px-6 py-2 mb-6">
                        <span className="text-[#1E73BE] font-semibold">🇩🇪 Native German Language Expertise</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-[#1E73BE] via-[#5BA3E6] to-[#1E73BE] bg-clip-text text-transparent">
                            German Language
                        </span>
                        <br />
                        BPO Services
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
                        Native-level German customer support that drives customer satisfaction and business growth
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/contact" className="bg-[#1E73BE] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#155A96] transition-all shadow-2xl hover:scale-105">
                            Start Your Pilot Project
                        </a>
                        <a href="#proficiency" className="bg-white/10 backdrop-blur-md text-white px-10 py-4 rounded-full text-lg font-bold border-2 border-white/30 hover:bg-white/20 transition-all">
                            Learn More
                        </a>
                    </div>
                </div>
            </section>

            {/* German Proficiency Levels */}
            <section id="proficiency" className="py-16 sm:py-20 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            German <span className="text-[#1E73BE]">Proficiency Levels</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                            Our team consists of highly qualified German speakers with proven language expertise
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-[#1E73BE]/10 to-white rounded-3xl p-8 border-2 border-[#1E73BE]/20 hover:border-[#1E73BE] transition-all">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#1E73BE] to-[#155A96] rounded-2xl flex items-center justify-center">
                                    <span className="text-white text-2xl font-bold">C1</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">Advanced Level</h3>
                                    <p className="text-[#1E73BE] font-semibold">Proficient User</p>
                                </div>
                            </div>
                            <ul className="space-y-3">
                                {[
                                    "Can understand a wide range of demanding texts",
                                    "Express ideas fluently and spontaneously",
                                    "Use language flexibly for social and professional purposes"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-[#1E73BE] mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white border-2 border-gray-700 hover:border-[#1E73BE] transition-all">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#1E73BE] to-[#155A96] rounded-2xl flex items-center justify-center">
                                    <span className="text-white text-2xl font-bold">C2</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">Mastery Level</h3>
                                    <p className="text-[#1E73BE] font-semibold">Native-Like Proficiency</p>
                                </div>
                            </div>
                            <ul className="space-y-3">
                                {[
                                    "Understand virtually everything heard or read",
                                    "Express themselves precisely and fluently",
                                    "Handle complex professional and academic topics"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-[#1E73BE] mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Accent Neutrality */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Accent <span className="text-[#1E73BE]">Neutrality</span>
                            </h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Our German-speaking agents are trained to maintain neutral, professional accents that resonate with customers across all German-speaking regions.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { title: "Standard German (Hochdeutsch)", desc: "Clear, professional communication understood across all regions" },
                                    { title: "Regional Adaptability", desc: "Can adapt to Austrian and Swiss German when needed" },
                                    { title: "Continuous Training", desc: "Regular accent coaching and quality monitoring" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-[#1E73BE]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <CheckCircle2 className="w-6 h-6 text-[#1E73BE]" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                            <p className="text-gray-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-[#1E73BE] to-[#155A96] rounded-3xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-6">Coverage Areas</h3>
                            <div className="space-y-4">
                                {[
                                    { country: "🇩🇪 Germany", desc: "Complete coverage across all states" },
                                    { country: "🇦🇹 Austria", desc: "Vienna, Salzburg, and all regions" },
                                    { country: "🇨🇭 Switzerland", desc: "German-speaking cantons" },
                                    { country: "🇱🇮 Liechtenstein", desc: "Full support" },
                                    { country: "🇱🇺 Luxembourg", desc: "German-speaking communities" }
                                ].map((area, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                        <div className="font-bold text-lg mb-1">{area.country}</div>
                                        <div className="text-white/80">{area.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industry Exposure */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Industry <span className="text-[#1E73BE]">Exposure</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                            Our German-speaking team has extensive experience across multiple industries
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { Icon: Plane, title: "Travel & Tourism", desc: "Airlines, OTAs, hotels, tour operators" },
                            { Icon: ShoppingCart, title: "E-commerce", desc: "Online retail, marketplaces, DTC brands" },
                            { Icon: DollarSign, title: "Fintech", desc: "Banking, payments, crypto, insurance" },
                            { Icon: Monitor, title: "SaaS & Tech", desc: "Software platforms, cloud services" },
                            { Icon: Building2, title: "Real Estate", desc: "Property management, rentals, sales" },
                            { Icon: ShoppingBag, title: "Retail & Fashion", desc: "Fashion brands, luxury goods, retail" }
                        ].map((industry, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-2xl p-6 hover:bg-gradient-to-br hover:from-[#1E73BE]/10 hover:to-white transition-all border border-gray-200 hover:border-[#1E73BE]">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#1E73BE] to-[#155A96] rounded-xl flex items-center justify-center mb-4">
                                    <industry.Icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.title}</h3>
                                <p className="text-gray-600">{industry.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality & Training Process */}
            <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                            Quality & <span className="text-[#1E73BE]">Training Process</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                            Rigorous training ensures every interaction meets the highest standards
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { step: "01", title: "Language Assessment", desc: "Comprehensive German proficiency testing (C1/C2 level verification)" },
                            { step: "02", title: "Industry Training", desc: "Specialized training in your industry, products, and processes" },
                            { step: "03", title: "Quality Monitoring", desc: "Continuous call monitoring, feedback, and performance tracking" },
                            { step: "04", title: "Ongoing Development", desc: "Regular coaching, language refreshers, and skill enhancement" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                                <div className="text-5xl font-black text-[#1E73BE]/50 mb-4">{item.step}</div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-300">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pilot Model */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-[#1E73BE] to-[#155A96] rounded-3xl p-8 sm:p-12 md:p-16 text-white">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                                <span className="font-semibold">🚀 Risk-Free Start</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                                Start with a Pilot Project
                            </h2>
                            <p className="text-lg sm:text-xl mb-10 text-white/90 leading-relaxed">
                                We understand you need to see results before making a commitment. That's why we offer a pilot-first approach with 5-10 agents to prove our value.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                                    <div className="text-4xl font-bold mb-2">5-10</div>
                                    <div className="text-white/80">Agents to Start</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                                    <div className="text-4xl font-bold mb-2">2-4</div>
                                    <div className="text-white/80">Weeks Duration</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                                    <div className="text-4xl font-bold mb-2">100%</div>
                                    <div className="text-white/80">Flexible Terms</div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="/contact" className="bg-white text-[#1E73BE] px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all shadow-2xl hover:scale-105">
                                    Start Your Pilot
                                </a>
                                <a href="/why-choose-us" className="bg-gray-900 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-800 transition-all shadow-2xl">
                                    Why Choose Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Metrics */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Proven <span className="text-[#1E73BE]">Results</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                            Our German language services deliver measurable business impact
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { metric: "98%", label: "Customer Satisfaction", Icon: Smile },
                            { metric: "95%", label: "First Call Resolution", Icon: CheckCircle2 },
                            { metric: "<30s", label: "Average Response Time", Icon: Clock },
                            { metric: "C1/C2", label: "Language Proficiency", Icon: Award }
                        ].map((stat, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#1E73BE] to-[#155A96] rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <stat.Icon className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.metric}</div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-20 bg-gradient-to-r from-[#1E73BE] via-[#155A96] to-[#1E73BE]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Experience German Excellence?
                    </h2>
                    <p className="text-lg sm:text-xl text-white/95 mb-10 max-w-3xl mx-auto">
                        Start with a pilot project and see the difference native German support makes
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/contact" className="bg-white text-[#1E73BE] px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all shadow-2xl hover:scale-105">
                            Schedule a Consultation
                        </a>
                        <a href="/services" className="bg-gray-900 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-800 transition-all shadow-2xl">
                            View All Services
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
                                src="/logo_round.svg"
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
                                <li><a href="/industries" className="text-gray-400 hover:text-[#1E73BE] transition-colors">Industries</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4 text-[#1E73BE]">Legal</h3>
                            <ul className="space-y-2">
                                <li><a href="/privacy-policy" className="text-gray-400 hover:text-[#1E73BE] transition-colors">Privacy Policy</a></li>
                                <li><a href="/gdpr" className="text-gray-400 hover:text-[#1E73BE] transition-colors">GDPR</a></li>
                                <li><a href="/data-security" className="text-gray-400 hover:text-[#1E73BE] transition-colors">Data Security</a></li>
                                <li><a href="/security-compliance" className="text-gray-400 hover:text-[#1E73BE] transition-colors">Security</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4 text-[#1E73BE]">Contact</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>info@aalishaanglobalbposervices.com</li>
                                <li>+1 (234) 567-8900</li>
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
