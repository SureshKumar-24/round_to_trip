import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";
import { CheckCircle2, Users, Shield, Zap, MessageSquare, Plane, Calendar, Phone, ArrowRight } from "lucide-react";

export default function WhyChooseUs() {
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
                                    className="h-14 sm:h-16 md:h-18 w-auto"
                                    priority
                                />
                            </a>
                        </div>
                        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
                            <a href="/services" className="text-gray-700 hover:text-[#1E73BE] font-medium text-sm xl:text-base transition-colors">
                                Services
                            </a>
                            <a href="/why-choose-us" className="text-[#1E73BE] hover:text-[#155A96] font-semibold text-sm xl:text-base transition-colors">
                                Why Us
                            </a>
                            <a href="/about" className="text-gray-700 hover:text-[#1E73BE] font-medium text-sm xl:text-base transition-colors">
                                About
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
            <section className="pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-[#1E73BE] rounded-full filter blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-[#6F8FA6] rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        Why Work <span className="bg-gradient-to-r from-[#1E73BE] via-[#5BA3E6] to-[#1E73BE] bg-clip-text text-transparent">With Us?</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
                        Honest, professional, and focused on long-term partnerships
                    </p>
                </div>
            </section>

            {/* Key Reasons */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                Icon: Users,
                                title: "Trained CX Professionals",
                                description: "Professionally managed customer experience team with structured training and quality processes.",
                                emoji: null
                            },
                            {
                                Icon: MessageSquare,
                                title: "Strong English Communication",
                                description: "Excellent communication skills tailored for UK & US customers, maintaining brand tone and quality.",
                                emoji: null
                            },
                            {
                                Icon: null,
                                title: "Certified German Capability",
                                description: "Goethe B2-certified German language capability for European customer support.",
                                emoji: "🇩🇪"
                            },
                            {
                                Icon: Plane,
                                title: "Travel & Tech Experience",
                                description: "Familiar with travel and technology customer workflows, booking systems, and support processes.",
                                emoji: null
                            },
                            {
                                Icon: Shield,
                                title: "Ethical & Transparent",
                                description: "Honest, transparent customer handling practices. No exaggeration, no false promises.",
                                emoji: null
                            },
                            {
                                Icon: Zap,
                                title: "Pilot-Based Engagement",
                                description: "Start with 1-2 agents. Evaluate quality and alignment before scaling. Low-risk approach.",
                                emoji: null
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border-2 border-gray-100 hover:border-[#1E73BE] transition-all hover:shadow-xl">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#1E73BE] to-[#155A96] rounded-2xl flex items-center justify-center mb-6">
                                    {item.emoji ? <span className="text-3xl">{item.emoji}</span> : item.Icon && <item.Icon className="w-8 h-8 text-white" />}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Direct Management */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-block bg-[#1E73BE]/10 rounded-full px-6 py-2 mb-6">
                                <span className="text-[#1E73BE] font-semibold flex items-center gap-2 justify-center">
                                    <Users className="w-5 h-5" />
                                    Direct Management Oversight
                                </span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Small, Dedicated Team
                            </h2>
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Unlike large BPO corporations, we offer direct access to management and a personal touch. Your account matters to us, and you'll work directly with people who care about your success.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
                                    <CheckCircle2 className="w-10 h-10 text-[#1E73BE] mx-auto mb-3" />
                                    <div className="font-bold text-gray-900 mb-2">Direct Access</div>
                                    <div className="text-gray-600 text-sm">Reach decision-makers directly</div>
                                </div>
                                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
                                    <CheckCircle2 className="w-10 h-10 text-[#1E73BE] mx-auto mb-3" />
                                    <div className="font-bold text-gray-900 mb-2">Personal Touch</div>
                                    <div className="text-gray-600 text-sm">We know your business</div>
                                </div>
                                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
                                    <CheckCircle2 className="w-10 h-10 text-[#1E73BE] mx-auto mb-3" />
                                    <div className="font-bold text-gray-900 mb-2">Quick Response</div>
                                    <div className="text-gray-600 text-sm">Issues resolved fast</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Work */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            How We <span className="text-[#1E73BE]">Work</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                            A transparent process from start to scale
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        {[
                            { step: "1", title: "Requirement Discussion", desc: "Understanding your product and support needs" },
                            { step: "2", title: "NDA & Access", desc: "Secure setup and documentation" },
                            { step: "3", title: "Agent Onboarding", desc: "7-10 days product training" },
                            { step: "4", title: "Pilot Launch", desc: "Start with 1-2 agents" },
                            { step: "5", title: "Review & Scale", desc: "Performance review and growth" }
                        ].map((item, idx) => (
                            <div key={idx} className="relative text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#1E73BE] to-[#155A96] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                                    {item.step}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                                {idx < 4 && (
                                    <div className="hidden md:block absolute top-8 -right-3">
                                        <ArrowRight className="w-6 h-6 text-[#1E73BE]" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* We Focus On */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                            We Focus On <span className="text-[#1E73BE]">Long-Term Partnerships</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Not quick volume. Every relationship is built on trust and measurable results.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {[
                            "Reliable people",
                            "Clear processes",
                            "Ethical delivery",
                            "Continuous improvement"
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-md border-2 border-gray-100 hover:border-[#1E73BE] transition-all">
                                <CheckCircle2 className="w-10 h-10 text-[#1E73BE] mx-auto mb-4" />
                                <p className="text-gray-900 font-semibold">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-20 bg-gradient-to-r from-[#1E73BE] via-[#155A96] to-[#1E73BE]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        Start Small. Scale Confidently.
                    </h2>
                    <p className="text-lg sm:text-xl text-white/95 mb-10 max-w-3xl mx-auto">
                        Begin with a short pilot so you can evaluate quality, communication style, and workflow alignment before scaling.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/contact" className="bg-white text-[#1E73BE] px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all shadow-2xl hover:scale-105 flex items-center justify-center gap-2">
                            <Calendar className="w-5 h-5" />
                            Request a Pilot
                        </a>
                        <a href="/contact" className="bg-gray-900 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-800 transition-all shadow-2xl flex items-center justify-center gap-2">
                            <Phone className="w-5 h-5" />
                            Book a 15-Min Call
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
                            <p className="text-gray-400 mb-2">Customer Support Outsourcing for UK, US & European Businesses</p>
                            <p className="text-gray-500 text-sm">Based in India | Global Delivery</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4 text-[#1E73BE]">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="/" className="text-gray-400 hover:text-[#1E73BE] transition-colors">Home</a></li>
                                <li><a href="/services" className="text-gray-400 hover:text-[#1E73BE] transition-colors">Services</a></li>
                                <li><a href="/about" className="text-gray-400 hover:text-[#1E73BE] transition-colors">About</a></li>
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
