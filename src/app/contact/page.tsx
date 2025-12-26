import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MessageSquare, Calendar, MapPin, Clock, CheckCircle2 } from "lucide-react";

export default function Contact() {
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
                        Let's Discuss Your <span className="bg-gradient-to-r from-[#1E73BE] via-[#5BA3E6] to-[#1E73BE] bg-clip-text text-transparent">Support Needs</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
                        Looking to outsource part of your customer support? Start with a short pilot or book a quick call to explore how we can help.
                    </p>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                Icon: Mail,
                                title: "Email Us",
                                detail: "info@aalishaanglobalbposervices.com",
                                subdDetail: "We'll respond within 24 hours",
                                link: "mailto:info@aalishaanglobalbposervices.com"
                            },
                            {
                                Icon: Calendar,
                                title: "Book a Call",
                                detail: "15-Minute Discovery Call",
                                subdDetail: "Discuss your requirements",
                                link: "#book-call"
                            },
                            {
                                Icon: MessageSquare,
                                title: "Request a Pilot",
                                detail: "Start Small, Scale Fast",
                                subdDetail: "Low-risk engagement model",
                                link: "#contact-form"
                            }
                        ].map((method, idx) => (
                            <a key={idx} href={method.link} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#1E73BE] transition-all hover:shadow-xl group">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#1E73BE] to-[#155A96] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <method.Icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{method.title}</h3>
                                <p className="text-lg text-[#1E73BE] font-semibold mb-1">{method.detail}</p>
                                <p className="text-gray-600">{method.subdDetail}</p>
                            </a>
                        ))}
                    </div>

                    {/* Contact Form and Office Info */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div id="contact-form">
                            <ContactForm />
                        </div>

                        {/* Office Info & Book a Call */}
                        <div className="space-y-8">
                            {/* Location Info */}
                            <div className="bg-gradient-to-br from-[#1E73BE] to-[#155A96] rounded-3xl p-8 sm:p-10 text-white">
                                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-1">Email</h3>
                                            <p className="text-white/90">info@aalishaanglobalbposervices.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-1">Location</h3>
                                            <p className="text-white/90">India (Global Delivery)</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-1">Response Time</h3>
                                            <p className="text-white/90">Within 24 hours</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Book a Call CTA */}
                            <div id="book-call" className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white text-center">
                                <div className="w-16 h-16 bg-[#1E73BE] rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <Phone className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Book a 15-Minute Call</h3>
                                <p className="text-gray-300 mb-6">
                                    Schedule a quick discovery call to discuss your customer support requirements.
                                </p>
                                <a href="mailto:info@aalishaanglobalbposervices.com?subject=15-Minute Call Request" className="inline-block bg-[#1E73BE] text-white px-8 py-4 rounded-full font-bold hover:bg-[#155A96] transition-all shadow-lg hover:scale-105">
                                    Schedule a Call
                                </a>
                            </div>

                            {/* What to Expect */}
                            <div className="bg-white rounded-2xl p-8 border-2 border-[#1E73BE]/20 shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">What to Expect</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Initial response within 24 hours",
                                        "Requirements discussion call",
                                        "Tailored proposal for your needs",
                                        "Low-risk pilot engagement option"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-6 h-6 text-[#1E73BE] mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Common Questions
                        </h2>
                        <p className="text-lg text-gray-600">
                            Quick answers before you reach out
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                q: "How does the pilot engagement work?",
                                a: "We typically start with 1-2 agents for 2-4 weeks. This allows you to evaluate our quality, communication style, and workflow alignment before scaling."
                            },
                            {
                                q: "What's the typical onboarding time?",
                                a: "Our agent onboarding process takes 7-10 working days. This includes learning your product, tone, and workflows."
                            },
                            {
                                q: "Do you support German language?",
                                a: "Yes! We have Goethe-certified B2 level German-speaking agents for European customer support."
                            },
                            {
                                q: "What industries do you serve?",
                                a: "We primarily support travel-tech, booking platforms, mobility services, and SaaS/technology companies serving UK, US, and European customers."
                            }
                        ].map((faq, idx) => (
                            <details key={idx} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all group">
                                <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                                    {faq.q}
                                    <svg className="w-6 h-6 text-[#1E73BE] group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
                            </details>
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
                                <li><a href="/why-choose-us" className="text-gray-400 hover:text-[#1E73BE] transition-colors">Why Choose Us</a></li>
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
