import Image from "next/image";
import { Briefcase, Plane, Languages, User, Clock, CheckCircle2, MessageCircle, Zap, Eye, Target, Handshake, Lightbulb, Sparkles, Users2 } from "lucide-react";

export default function About() {
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
                            <a href="/why-choose-us" className="text-gray-700 hover:text-[#C9A961] font-medium text-sm xl:text-base transition-colors">
                                Why Us
                            </a>
                            <a href="/about" className="text-[#C9A961] hover:text-[#a88a4d] font-semibold text-sm xl:text-base transition-colors">
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
                        About <span className="bg-gradient-to-r from-[#C9A961] via-[#e8d7b0] to-[#C9A961] bg-clip-text text-transparent">Aalishaan Global</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
                        Your trusted partner for German language BPO services. Quality, flexibility, and results.
                    </p>
                </div>
            </section>

            {/* Who We Are */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block bg-[#C9A961]/10 rounded-full px-6 py-2 mb-6">
                                <span className="text-[#C9A961] font-semibold">Who We Are</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Specialized BPO for <span className="text-[#C9A961]">German Markets</span>
                            </h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Aalishaan Global is a specialized Business Process Outsourcing provider focused on delivering exceptional German language customer support for travel, e-commerce, and digital brands.
                            </p>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Unlike generic BPO providers, we've built our expertise around German-speaking markets, understanding the nuances of language, culture, and customer expectations that drive success in these regions.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Our team combines native German language proficiency with deep industry knowledge, enabling us to deliver support that feels authentic and drives real business results.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-[#C9A961] to-[#a88a4d] rounded-2xl p-8 text-white">
                                <div className="text-5xl font-bold mb-2">10+</div>
                                <div className="text-white/90 text-lg">Years Experience</div>
                            </div>
                            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                                <div className="text-5xl font-bold mb-2">500+</div>
                                <div className="text-white/90 text-lg">Happy Clients</div>
                            </div>
                            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                                <div className="text-5xl font-bold mb-2">50+</div>
                                <div className="text-white/90 text-lg">Expert Team</div>
                            </div>
                            <div className="bg-gradient-to-br from-[#C9A961] to-[#a88a4d] rounded-2xl p-8 text-white">
                                <div className="text-5xl font-bold mb-2">24/7</div>
                                <div className="text-white/90 text-lg">Support Available</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience & Expertise */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Our <span className="text-[#C9A961]">Expertise</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                            Deep experience in BPO, travel industry, and German language processes
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                Icon: Briefcase,
                                title: "BPO Excellence",
                                description: "Over a decade of experience in business process outsourcing across multiple industries and markets."
                            },
                            {
                                Icon: Plane,
                                title: "Travel Industry Focus",
                                description: "Specialized expertise in travel, airlines, and OTA support with GDS system proficiency."
                            },
                            {
                                Icon: Languages,
                                title: "German Language Mastery",
                                description: "Native-level German speakers (C1/C2) with accent neutrality and cultural understanding."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#C9A961] to-[#a88a4d] rounded-2xl flex items-center justify-center mb-6">
                                    <item.Icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Delivery Philosophy */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-[#C9A961] to-[#a88a4d] rounded-3xl p-8 sm:p-12 md:p-16 text-white">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                                    Our Delivery Philosophy
                                </h2>
                                <p className="text-lg sm:text-xl text-white/90">
                                    Quality + Flexibility = Client Success
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                                    <h3 className="text-2xl font-bold mb-4">Quality First</h3>
                                    <p className="text-white/90 leading-relaxed">
                                        We never compromise on quality. Every interaction represents your brand, and we treat it with the care and professionalism it deserves. Our rigorous hiring, training, and monitoring processes ensure consistent excellence.
                                    </p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                                    <h3 className="text-2xl font-bold mb-4">Flexibility Always</h3>
                                    <p className="text-white/90 leading-relaxed">
                                        Business needs change, and we adapt with you. Whether it's scaling up for peak season, adjusting processes, or pivoting strategies, we're built to be flexible and responsive to your evolving requirements.
                                    </p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                                    <h3 className="text-2xl font-bold mb-4">Partnership Mindset</h3>
                                    <p className="text-white/90 leading-relaxed">
                                        We're not just a vendor; we're your partner. Your success is our success. We proactively identify opportunities for improvement and work collaboratively to achieve your business goals.
                                    </p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                                    <h3 className="text-2xl font-bold mb-4">Transparent Communication</h3>
                                    <p className="text-white/90 leading-relaxed">
                                        No surprises, no hidden issues. We believe in open, honest communication. You'll always know how we're performing, what challenges we're facing, and how we're addressing them.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Involvement */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Leadership <span className="text-[#C9A961]">Involvement</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                            Unlike large MNCs, our leadership is directly involved in your success
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                Icon: User,
                                title: "Direct Access",
                                description: "Speak directly with decision-makers, not multiple layers of management"
                            },
                            {
                                Icon: Clock,
                                title: "Quick Decisions",
                                description: "Faster approvals and implementations without bureaucratic delays"
                            },
                            {
                                Icon: CheckCircle2,
                                title: "Personal Commitment",
                                description: "Leadership personally committed to your account's success"
                            },
                            {
                                Icon: MessageCircle,
                                title: "Open Communication",
                                description: "Regular touchpoints and transparent reporting from leadership"
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#C9A961] to-[#a88a4d] rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <item.Icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 sm:p-10 border-2 border-gray-200 hover:border-[#C9A961] transition-all">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#C9A961] to-[#a88a4d] rounded-2xl flex items-center justify-center mb-6">
                                <Zap className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                To empower businesses with exceptional German language BPO services that drive customer satisfaction, operational efficiency, and sustainable growth. We deliver quality, flexibility, and results that matter.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-[#C9A961] to-[#a88a4d] rounded-3xl p-8 sm:p-10 text-white">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                                <Eye className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Vision</h2>
                            <p className="text-lg text-white/90 leading-relaxed">
                                To be the most trusted BPO partner for German-speaking markets, recognized for our specialized expertise, client-centric approach, and unwavering commitment to excellence. We aim to set new standards in quality and flexibility.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Our <span className="text-[#C9A961]">Core Values</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { Icon: Target, title: "Excellence", desc: "We pursue excellence in everything we do, never settling for 'good enough'" },
                            { Icon: Handshake, title: "Integrity", desc: "Honest, transparent communication and ethical business practices always" },
                            { Icon: Lightbulb, title: "Innovation", desc: "Continuously improving processes and embracing new technologies" },
                            { Icon: Zap, title: "Agility", desc: "Quick to adapt, flexible in approach, responsive to client needs" },
                            { Icon: Sparkles, title: "Client Success", desc: "Your success is our success - we're invested in your growth" },
                            { Icon: Users2, title: "Team Empowerment", desc: "Investing in our people to deliver exceptional service" }
                        ].map((value, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#C9A961] to-[#a88a4d] rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <value.Icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Members */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Meet Our <span className="text-[#C9A961]">Team</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                            The dedicated professionals behind Aalishaan Global's success
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Sarthak",
                                image: "https://res.cloudinary.com/dsr89dej0/image/upload/v1766134195/Round%20To%20Trip/gunurrv1vfe5an6ojn2p.png",
                                role: "Operations Lead"
                            },
                            {
                                name: "Jyoti",
                                image: "https://res.cloudinary.com/dsr89dej0/image/upload/v1766134195/Round%20To%20Trip/ymmykv4kbqioztj741fb.png",
                                role: "Team Manager"
                            },
                            {
                                name: "Yogesh",
                                image: "https://res.cloudinary.com/dsr89dej0/image/upload/v1766134194/Round%20To%20Trip/n8kpbeoeebrjff99nrgw.jpg",
                                role: "Quality Specialist"
                            },
                            {
                                name: "Pappu",
                                image: "https://res.cloudinary.com/dsr89dej0/image/upload/v1766134194/Round%20To%20Trip/utb82khwyabh5hd6i3og.jpg",
                                role: "Customer Success"
                            },
                            {
                                name: "Guduu",
                                image: "https://res.cloudinary.com/dsr89dej0/image/upload/v1766134195/Round%20To%20Trip/zfbz4thtvwnw660xfx5q.png",
                                role: "Training Lead"
                            },
                            {
                                name: "Shamal",
                                image: "https://res.cloudinary.com/dsr89dej0/image/upload/v1766134195/Round%20To%20Trip/jni5mive7m3aqkzklxro.png",
                                role: "Support Specialist"
                            }
                        ].map((member, idx) => (
                            <div key={idx} className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-[#C9A961]">
                                <div className="relative mb-6">
                                    <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-[#C9A961] to-[#a88a4d] p-1">
                                        <div className="w-full h-full rounded-2xl overflow-hidden bg-white">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                width={192}
                                                height={192}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                    <p className="text-[#C9A961] font-semibold text-lg">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-20 bg-gradient-to-r from-[#C9A961] via-[#a88a4d] to-[#C9A961]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Work Together?
                    </h2>
                    <p className="text-lg sm:text-xl text-white/95 mb-10 max-w-3xl mx-auto">
                        Let's discuss how Aalishaan Global can support your business growth.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/contact" className="bg-white text-[#C9A961] px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all shadow-2xl hover:scale-105">
                            Get in Touch
                        </a>
                        <a href="/services" className="bg-gray-900 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-800 transition-all shadow-2xl">
                            View Services
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
