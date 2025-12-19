import Image from "next/image";
import { XCircle, CheckCircle2, Zap, Clock, Paintbrush, DollarSign, Users, Shield, Check, Phone, Handshake } from "lucide-react";

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
                            <a href="/services" className="text-gray-700 hover:text-[#C9A961] font-medium text-sm xl:text-base transition-colors">
                                Services
                            </a>
                            <a href="/industries" className="text-gray-700 hover:text-[#C9A961] font-medium text-sm xl:text-base transition-colors">
                                Industries
                            </a>
                            <a href="/german-services" className="text-gray-700 hover:text-[#C9A961] font-medium text-sm xl:text-base transition-colors">
                                German Services
                            </a>
                            <a href="/why-choose-us" className="text-[#C9A961] hover:text-[#a88a4d] font-semibold text-sm xl:text-base transition-colors">
                                Why Us
                            </a>
                            <a href="/about" className="text-gray-700 hover:text-[#C9A961] font-medium text-sm xl:text-base transition-colors">
                                About
                            </a>
                            <a href="/contact" className="bg-[#C9A961] text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-full hover:bg-[#a88a4d] font-semibold text-sm xl:text-base transition-all shadow-lg hover:shadow-xl hover:scale-105">
                                Contact Us
                            </a>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-[#C9A961] rounded-full filter blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-[#DC2626] rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        Why Choose <span className="bg-gradient-to-r from-[#C9A961] via-[#e8d7b0] to-[#C9A961] bg-clip-text text-transparent">Aalishaan Global?</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
                        We compete with the big players, but we move faster, care more, and deliver better results.
                    </p>
                </div>
            </section>

            {/* Comparison with Big Players */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            How We're <span className="text-[#C9A961]">Different</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                            We understand you have options. Here's why clients choose us over large BPO corporations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Large BPO Providers */}
                        <div className="bg-gray-100 rounded-3xl p-8 border-2 border-gray-200">
                            <div className="text-center mb-6">
                                <div className="inline-block bg-gray-300 rounded-full px-6 py-2 mb-4">
                                    <span className="text-gray-700 font-bold">Large BPO Providers</span>
                                </div>
                                <p className="text-gray-600 italic">Concentrix, Teleperformance, Webhelp, etc.</p>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    "Long decision-making chains",
                                    "Rigid processes and contracts",
                                    "High overhead costs",
                                    "Generic, one-size-fits-all approach",
                                    "Limited flexibility in scaling",
                                    "Slow to adapt to changes",
                                    "Multiple layers of management"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <XCircle className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Aalishaan Global */}
                        <div className="bg-gradient-to-br from-[#C9A961]/10 to-white rounded-3xl p-8 border-2 border-[#C9A961]">
                            <div className="text-center mb-6">
                                <div className="inline-block bg-[#C9A961] rounded-full px-6 py-2 mb-4">
                                    <span className="text-white font-bold">Aalishaan Global</span>
                                </div>
                                <p className="text-gray-600 italic">Your Agile BPO Partner</p>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    "Fast decision-making (direct access)",
                                    "Flexible, customized solutions",
                                    "Lower overhead, better pricing",
                                    "Tailored to your specific needs",
                                    "Quick scaling up or down",
                                    "Rapid adaptation to changes",
                                    "Dedicated management team"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-[#C9A961] mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Differentiators */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Our <span className="text-[#C9A961]">Key Advantages</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                Icon: Zap,
                                title: "Pilot-First Approach",
                                description: "Start with 5-10 agents. See results before committing. No long-term contracts required upfront.",
                                benefit: "Zero risk, proven results"
                            },
                            {
                                Icon: Clock,
                                title: "Faster Decision-Making",
                                description: "Direct access to leadership. No bureaucracy. Decisions in hours, not weeks.",
                                benefit: "Speed to market"
                            },
                            {
                                Icon: Paintbrush,
                                title: "Flexibility",
                                description: "Scale up or down based on demand. Customize processes. Adapt quickly to market changes.",
                                benefit: "Built for your needs"
                            },
                            {
                                Icon: DollarSign,
                                title: "Lower Overhead",
                                description: "Competitive pricing without sacrificing quality. Better value than large corporations.",
                                benefit: "Cost-effective excellence"
                            },
                            {
                                Icon: Users,
                                title: "Dedicated Management",
                                description: "Your own account manager. Direct communication. Personal attention to your business.",
                                benefit: "You're not just a number"
                            },
                            {
                                Icon: Shield,
                                title: "Custom SLAs",
                                description: "Define your own success metrics. We build SLAs around your business goals, not generic templates.",
                                benefit: "Your metrics, your success"
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#C9A961] to-[#a88a4d] rounded-2xl flex items-center justify-center mb-6">
                                    <item.Icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                                <div className="inline-block bg-[#C9A961]/10 rounded-full px-4 py-2">
                                    <span className="text-[#C9A961] font-semibold text-sm">{item.benefit}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Assurance */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Quality <span className="text-[#C9A961]">Without Compromise</span>
                            </h2>
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Being smaller doesn't mean lower quality. In fact, it means we can focus more on each client and deliver superior results.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { title: "Rigorous Hiring", desc: "Only top 5% of applicants make it through our selection process" },
                                    { title: "Continuous Training", desc: "Ongoing skill development and quality coaching for all team members" },
                                    { title: "Quality Monitoring", desc: "Real-time monitoring, regular audits, and performance feedback" },
                                    { title: "Client Feedback Loop", desc: "Weekly reviews and immediate action on improvement areas" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-[#C9A961]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Check className="w-6 h-6 text-[#C9A961]" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                                            <p className="text-gray-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-[#C9A961] to-[#a88a4d] rounded-3xl p-8 sm:p-10 text-white">
                            <h3 className="text-3xl font-bold mb-8">Our Quality Metrics</h3>
                            <div className="space-y-6">
                                {[
                                    { metric: "99.2%", label: "Quality Score", sublabel: "Consistently above industry standard" },
                                    { metric: "98%", label: "CSAT", sublabel: "Customer satisfaction rating" },
                                    { metric: "95%", label: "FCR", sublabel: "First call resolution rate" },
                                    { metric: "<2%", label: "Attrition", sublabel: "Industry-leading retention" }
                                ].map((stat, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                                        <div className="text-4xl font-bold mb-2">{stat.metric}</div>
                                        <div className="text-xl font-semibold mb-1">{stat.label}</div>
                                        <div className="text-white/80 text-sm">{stat.sublabel}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Involvement */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-block bg-[#C9A961]/10 rounded-full px-6 py-2 mb-6">
                                <span className="text-[#C9A961] font-semibold flex items-center gap-2 justify-center">
                                    <Users className="w-5 h-5" />
                                    Leadership Involvement
                                </span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                You Matter to Us
                            </h2>
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Unlike large corporations where you're account #47382, at Aalishaan Global, you work directly with our leadership team. We're invested in your success because your success is our success.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
                                    <div className="w-12 h-12 bg-[#C9A961]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                                        <Phone className="w-6 h-6 text-[#C9A961]" />
                                    </div>
                                    <div className="font-bold text-gray-900 mb-2">Direct Access</div>
                                    <div className="text-gray-600 text-sm">Reach leadership anytime</div>
                                </div>
                                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
                                    <div className="w-12 h-12 bg-[#C9A961]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                                        <Handshake className="w-6 h-6 text-[#C9A961]" />
                                    </div>
                                    <div className="font-bold text-gray-900 mb-2">Personal Touch</div>
                                    <div className="text-gray-600 text-sm">We know your business</div>
                                </div>
                                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
                                    <div className="w-12 h-12 bg-[#C9A961]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                                        <Zap className="w-6 h-6 text-[#C9A961]" />
                                    </div>
                                    <div className="font-bold text-gray-900 mb-2">Quick Action</div>
                                    <div className="text-gray-600 text-sm">Issues resolved fast</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-20 bg-gradient-to-r from-[#C9A961] via-[#a88a4d] to-[#C9A961]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        Experience the Difference
                    </h2>
                    <p className="text-lg sm:text-xl text-white/95 mb-10 max-w-3xl mx-auto">
                        Start with a pilot project and see why clients choose us over the big players.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/contact" className="bg-white text-[#C9A961] px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all shadow-2xl hover:scale-105">
                            Start Your Pilot
                        </a>
                        <a href="/german-services" className="bg-gray-900 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-800 transition-all shadow-2xl">
                            German Services
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
                                <li><a href="/industries" className="text-gray-400 hover:text-[#C9A961] transition-colors">Industries</a></li>
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
