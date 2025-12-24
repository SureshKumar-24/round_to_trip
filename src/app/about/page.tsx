import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";
import { CheckCircle2, Target, Handshake, Shield, Lightbulb, TrendingUp, Calendar, Phone } from "lucide-react";

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
                                    className="h-14 sm:h-16 md:h-18 w-auto"
                                    priority
                                />
                            </a>
                        </div>
                        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
                            <a href="/services" className="text-gray-700 hover:text-[#C9A961] font-medium text-sm xl:text-base transition-colors">
                                Services
                            </a>
                            <a href="/why-choose-us" className="text-gray-700 hover:text-[#C9A961] font-medium text-sm xl:text-base transition-colors">
                                Why Us
                            </a>
                            <a href="/about" className="text-[#C9A961] hover:text-[#a88a4d] font-semibold text-sm xl:text-base transition-colors">
                                About
                            </a>
                            <a href="/contact" className="bg-[#C9A961] text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-full hover:bg-[#a88a4d] font-semibold text-sm xl:text-base transition-all shadow-lg hover:shadow-xl hover:scale-105">
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
                    <div className="absolute top-20 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-[#C9A961] rounded-full filter blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-[#DC2626] rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        About <span className="bg-gradient-to-r from-[#C9A961] via-[#e8d7b0] to-[#C9A961] bg-clip-text text-transparent">Aalishaan Global</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
                        A customer experience outsourcing company supporting travel, mobility, and technology platforms worldwide.
                    </p>
                </div>
            </section>

            {/* Who We Are */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-block bg-[#C9A961]/10 rounded-full px-6 py-2 mb-6">
                            <span className="text-[#C9A961] font-semibold">Who We Are</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                            Customer Experience <span className="text-[#C9A961]">Partner</span>
                        </h2>
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                            <p>
                                Aalishaan Global BPO Services is a customer experience outsourcing company supporting travel, mobility, and technology platforms worldwide.
                            </p>
                            <p>
                                We work with startups and growing businesses in the UK, US, and Europe, helping them manage customer interactions through structured workflows, professional communication, and transparent operations.
                            </p>
                            <p className="text-xl font-semibold text-gray-900">
                                Our focus is simple: <span className="text-[#C9A961]">Reliable people. Clear processes. Ethical delivery.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 sm:p-10 border-2 border-gray-200 hover:border-[#C9A961] transition-all">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#C9A961] to-[#a88a4d] rounded-2xl flex items-center justify-center mb-6">
                                <Target className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                To deliver reliable, ethical, and scalable customer support that helps businesses grow without compromising customer experience.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-[#C9A961] to-[#a88a4d] rounded-3xl p-8 sm:p-10 text-white">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                                <TrendingUp className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Approach</h2>
                            <p className="text-lg text-white/90 leading-relaxed">
                                We focus on long-term partnerships, not quick volume. Every client relationship is built on transparency, accountability, and measurable results.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Our <span className="text-[#C9A961]">Values</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            { Icon: Shield, title: "Transparency", desc: "Open and honest communication always" },
                            { Icon: CheckCircle2, title: "Accountability", desc: "We take responsibility for our work" },
                            { Icon: Handshake, title: "Ethical Communication", desc: "Professional and respectful interactions" },
                            { Icon: Lightbulb, title: "Long-term Partnerships", desc: "Building lasting relationships" },
                            { Icon: TrendingUp, title: "Continuous Improvement", desc: "Always learning and growing" }
                        ].map((value, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#C9A961] to-[#a88a4d] rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <value.Icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                                <p className="text-gray-600 text-sm">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Members */}
            <section className="py-16 sm:py-20 bg-gray-50">
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
                            <div key={idx} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-[#C9A961]">
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
                        <a href="/contact" className="bg-white text-[#C9A961] px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all shadow-2xl hover:scale-105 flex items-center justify-center gap-2">
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
                            <h3 className="text-lg font-bold mb-4 text-[#C9A961]">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="/" className="text-gray-400 hover:text-[#C9A961] transition-colors">Home</a></li>
                                <li><a href="/services" className="text-gray-400 hover:text-[#C9A961] transition-colors">Services</a></li>
                                <li><a href="/why-choose-us" className="text-gray-400 hover:text-[#C9A961] transition-colors">Why Choose Us</a></li>
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
