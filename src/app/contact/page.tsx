import Image from "next/image";

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
                        Get in <span className="bg-gradient-to-r from-[#C9A961] via-[#e8d7b0] to-[#C9A961] bg-clip-text text-transparent">Touch</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
                        Let's discuss how we can support your business with premium German language BPO services.
                    </p>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                                title: "Email Us",
                                detail: "info@aalishaan-global.com",
                                subdDetail: "We'll respond within 24 hours",
                                link: "mailto:info@aalishaan-global.com"
                            },
                            {
                                icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                                title: "Call Us",
                                detail: "+1 (234) 567-8900",
                                subdDetail: "Mon-Fri, 9AM-6PM EST",
                                link: "tel:+12345678900"
                            },
                            {
                                icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
                                title: "WhatsApp",
                                detail: "+1 (234) 567-8900",
                                subdDetail: "Quick response guaranteed",
                                link: "https://wa.me/12345678900"
                            }
                        ].map((method, idx) => (
                            <a key={idx} href={method.link} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#C9A961] transition-all hover:shadow-xl group">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#C9A961] to-[#a88a4d] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={method.icon} />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{method.title}</h3>
                                <p className="text-lg text-[#C9A961] font-semibold mb-1">{method.detail}</p>
                                <p className="text-gray-600">{method.subdDetail}</p>
                            </a>
                        ))}
                    </div>

                    {/* Contact Form and Office Info */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 border border-gray-200">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#C9A961] focus:outline-none transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Business Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#C9A961] focus:outline-none transition-colors"
                                        placeholder="john@company.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#C9A961] focus:outline-none transition-colors"
                                        placeholder="+1 (234) 567-8900"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Company Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#C9A961] focus:outline-none transition-colors"
                                        placeholder="Your Company"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Service Interested In *
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#C9A961] focus:outline-none transition-colors"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="german-support">German Customer Support</option>
                                        <option value="travel-support">Travel & Airline Support</option>
                                        <option value="ota-support">OTA & Booking Support</option>
                                        <option value="back-office">Back Office Support</option>
                                        <option value="sales-support">Sales Support</option>
                                        <option value="technical-support">Technical Support</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#C9A961] focus:outline-none transition-colors resize-none"
                                        placeholder="Tell us about your requirements..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-[#C9A961] to-[#a88a4d] text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-xl transition-all hover:scale-[1.02]"
                                >
                                    Send Message
                                </button>

                                <p className="text-sm text-gray-500 text-center">
                                    By submitting this form, you agree to our{' '}
                                    <a href="/privacy-policy" className="text-[#C9A961] hover:underline">Privacy Policy</a>
                                </p>
                            </form>
                        </div>

                        {/* Office Info & Map */}
                        <div className="space-y-8">
                            {/* Office Location */}
                            <div className="bg-gradient-to-br from-[#C9A961] to-[#a88a4d] rounded-3xl p-8 sm:p-10 text-white">
                                <h2 className="text-3xl font-bold mb-6">Office Location</h2>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-1">Address</h3>
                                            <p className="text-white/90">
                                                Global Business Center<br />
                                                123 Business Avenue<br />
                                                New York, NY 10001<br />
                                                United States
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-1">Business Hours</h3>
                                            <p className="text-white/90">
                                                Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                                                Saturday: 10:00 AM - 2:00 PM EST<br />
                                                Sunday: Closed<br />
                                                <span className="text-sm">(24/7 support available for clients)</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Response Promise */}
                            <div className="bg-white rounded-2xl p-8 border-2 border-[#C9A961]/20 shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Response Guarantee</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Email inquiries: Response within 24 hours",
                                        "Phone calls: Immediate assistance during business hours",
                                        "WhatsApp: Quick response guaranteed",
                                        "Urgent requests: Priority handling available"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <svg className="w-6 h-6 text-[#C9A961] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Calendar Booking CTA */}
                            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white text-center">
                                <div className="text-5xl mb-4">📅</div>
                                <h3 className="text-2xl font-bold mb-3">Schedule a Call</h3>
                                <p className="text-gray-300 mb-6">
                                    Book a free consultation to discuss your BPO needs
                                </p>
                                <a href="#" className="inline-block bg-[#C9A961] text-white px-8 py-3 rounded-full font-bold hover:bg-[#a88a4d] transition-all shadow-lg hover:scale-105">
                                    Book a Call
                                </a>
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
                                q: "What's your minimum contract period?",
                                a: "We offer flexible terms starting with a pilot project (2-4 weeks). No long-term commitment required upfront."
                            },
                            {
                                q: "How quickly can you start?",
                                a: "We can typically onboard a pilot team (5-10 agents) within 2-3 weeks from contract signing."
                            },
                            {
                                q: "Do you support languages other than German?",
                                a: "Yes! While German is our specialty, we also support English, French, Spanish, and other European languages."
                            },
                            {
                                q: "What industries do you specialize in?",
                                a: "We specialize in Travel & Tourism, Airlines, OTAs, E-commerce, Fintech, SaaS, and Digital Brands."
                            }
                        ].map((faq, idx) => (
                            <details key={idx} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all group">
                                <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                                    {faq.q}
                                    <svg className="w-6 h-6 text-[#C9A961] group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
