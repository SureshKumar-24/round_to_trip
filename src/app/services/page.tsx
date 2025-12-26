import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";
import { Mail, MessageSquare, Plane, ClipboardList, CheckCircle2, Calendar, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services - Email, Chat & Booking Support",
    description:
        "Professional BPO services including email customer support, live chat support, travel & booking assistance, and ticket management. English & German language support available.",
    keywords: [
        "email customer support",
        "live chat support",
        "travel booking support",
        "ticket management",
        "BPO services",
        "customer support services",
        "multilingual support",
        "Zendesk support",
    ],
    openGraph: {
        title: "Our Services - Email, Chat & Booking Support",
        description:
            "Professional BPO services including email support, live chat, travel booking assistance, and ticket management.",
        url: "/services",
        type: "website",
    },
    alternates: {
        canonical: "/services",
    },
};

export default function Services() {
    const services = [
        {
            id: "email-support",
            title: "Email Customer Support",
            Icon: Mail,
            description: "Professional handling of customer emails related to accounts, bookings, subscriptions, billing queries, and general inquiries.",
            details: [
                "Account-related inquiries and support",
                "Booking confirmations and modifications",
                "Subscription management assistance",
                "Billing and payment queries",
                "General customer inquiries",
                "Professional tone and brand-aligned responses"
            ]
        },
        {
            id: "live-chat-support",
            title: "Live Chat Support",
            Icon: MessageSquare,
            description: "Real-time chat assistance for website and in-app users, focused on fast resolution and clear guidance.",
            details: [
                "Instant customer assistance",
                "Website and in-app chat support",
                "Quick resolution focus",
                "Clear and helpful guidance",
                "Multi-session handling",
                "Seamless handoff when needed"
            ]
        },
        {
            id: "travel-support",
            title: "Travel & Booking Support",
            Icon: Plane,
            description: "Customer support for reservations, modifications, cancellations, and general travel-related queries.",
            details: [
                "Reservation assistance",
                "Booking modifications",
                "Cancellation processing",
                "Travel itinerary support",
                "General travel inquiries",
                "Post-booking customer care"
            ]
        },
        {
            id: "ticket-management",
            title: "Ticket Management & Escalation",
            Icon: ClipboardList,
            description: "Structured ticket handling, internal notes, SLA-aligned responses, and escalation to client teams when required.",
            details: [
                "Structured ticket handling",
                "Internal note documentation",
                "SLA-aligned response times",
                "Proper escalation procedures",
                "Priority management",
                "Client team coordination"
            ]
        }
    ];

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
                            <a href="/services" className="text-[#1E73BE] hover:text-[#155A96] font-semibold text-sm xl:text-base transition-colors">
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
                        Our <span className="bg-gradient-to-r from-[#1E73BE] via-[#5BA3E6] to-[#1E73BE] bg-clip-text text-transparent">Services</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
                        Focused customer support solutions for travel and tech platforms
                    </p>
                </div>
            </section>

            {/* Services Detail Section */}
            <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {services.map((service, idx) => (
                            <div key={service.id} id={service.id} className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 hover:shadow-2xl transition-all duration-300">
                                <div className="flex items-start gap-6 mb-6">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#1E73BE] to-[#155A96] rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <service.Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{service.title}</h2>
                                    </div>
                                </div>

                                <p className="text-lg text-gray-700 mb-6 leading-relaxed">{service.description}</p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {service.details.map((detail, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-[#1E73BE] mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-600">{detail}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Languages Section */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                            Languages We <span className="text-[#1E73BE]">Support</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We provide customer support in multiple languages, allowing our clients to serve global users without building multiple in-house teams.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div className="bg-gray-50 rounded-2xl p-8 text-center border-2 border-gray-100 hover:border-[#1E73BE] transition-all">
                            <div className="text-4xl mb-4">🇬🇧 🇺🇸</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">English</h3>
                            <p className="text-gray-600">UK & US customers</p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 text-center border-2 border-gray-100 hover:border-[#1E73BE] transition-all">
                            <div className="text-4xl mb-4">🇩🇪</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">German</h3>
                            <p className="text-gray-600">Goethe-certified B2 level agents</p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 text-center border-2 border-gray-100 hover:border-[#1E73BE] transition-all">
                            <div className="text-4xl mb-4">🌍</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Additional</h3>
                            <p className="text-gray-600">Available on request</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tools & Workflows */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                            Tools & <span className="text-[#1E73BE]">Workflows</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our team is familiar with modern CX environments and ticket-based workflows
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                        {[
                            "Zendesk-style ticketing",
                            "Intercom-style live chat",
                            "Freshdesk-style tools",
                            "Custom CRM systems"
                        ].map((tool, idx) => (
                            <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-md">
                                <CheckCircle2 className="w-8 h-8 text-[#1E73BE] mx-auto mb-3" />
                                <span className="text-gray-700 font-medium">{tool}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">We Follow</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                "Knowledge-base-driven responses",
                                "SLA-aligned workflows",
                                "Clear escalation processes",
                                "Quality and tone reviews"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-[#1E73BE] flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-20 bg-gradient-to-r from-[#1E73BE] via-[#155A96] to-[#1E73BE]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        Discuss Your Support Needs
                    </h2>
                    <p className="text-lg sm:text-xl text-white/95 mb-10 max-w-3xl mx-auto">
                        Start with a pilot to evaluate quality and workflow alignment before scaling.
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
