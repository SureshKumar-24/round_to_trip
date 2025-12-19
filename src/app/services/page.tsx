import Image from "next/image";
import { Phone, Plane, Monitor, FileText, TrendingUp, Settings, Languages, Wrench, ClipboardCheck, CheckCircle2 } from "lucide-react";

export default function Services() {
    const services = [
        {
            id: "german-customer-support",
            title: "German Customer Support",
            subtitle: "Voice & Non-Voice",
            Icon: Phone,
            description: "Native-level German customer support across all channels",
            whatWeDo: "We provide comprehensive German language customer support services including inbound/outbound calls, email support, live chat, and social media management.",
            languages: ["German (Native C1/C2)", "German + English", "German + French"],
            tools: ["Zendesk", "Salesforce", "Freshdesk", "Intercom", "HubSpot", "Custom CRM"],
            useCases: [
                "Travel & tourism customer inquiries",
                "E-commerce order support",
                "Technical troubleshooting",
                "Booking modifications & cancellations",
                "Complaint resolution",
                "Product information & recommendations"
            ]
        },
        {
            id: "travel-airline-support",
            title: "Travel & Airline Support",
            subtitle: "Specialized Travel BPO",
            Icon: Plane,
            description: "Expert support for airlines, OTAs, and travel agencies",
            whatWeDo: "Dedicated travel industry support covering reservations, booking management, customer service, and operational assistance for airlines and online travel agencies.",
            languages: ["German", "English", "French", "Spanish", "Italian"],
            tools: ["Amadeus", "Sabre", "Galileo", "Travelport", "Custom Booking Systems"],
            useCases: [
                "Flight reservations & modifications",
                "Hotel & car rental bookings",
                "Travel package inquiries",
                "Loyalty program support",
                "Refund & compensation processing",
                "Emergency travel assistance"
            ]
        },
        {
            id: "ota-booking-support",
            title: "OTA & Booking Support",
            subtitle: "Online Travel Agency Solutions",
            Icon: Monitor,
            description: "Complete support for online travel platforms",
            whatWeDo: "End-to-end customer support for OTAs including booking assistance, payment processing, customer inquiries, and post-booking support.",
            languages: ["German", "English", "Multi-language support available"],
            tools: ["Booking.com systems", "Expedia platforms", "Custom OTA software", "Payment gateways"],
            useCases: [
                "Booking confirmations & modifications",
                "Payment & billing support",
                "Property inquiries",
                "Review management",
                "Partner support",
                "Customer dispute resolution"
            ]
        },
        {
            id: "back-office",
            title: "Back Office Support",
            subtitle: "Email, Chat & Data Processing",
            Icon: FileText,
            description: "Efficient back-office operations in German",
            whatWeDo: "Comprehensive back-office support including email management, chat support, data entry, document processing, and administrative tasks.",
            languages: ["German", "English"],
            tools: ["Microsoft Office Suite", "Google Workspace", "CRM systems", "Data management tools"],
            useCases: [
                "Email ticket management",
                "Live chat support",
                "Data entry & validation",
                "Document processing",
                "Order processing",
                "Database management"
            ]
        },
        {
            id: "sales-support",
            title: "Sales Support",
            subtitle: "Outbound & Lead Generation",
            Icon: TrendingUp,
            description: "German-speaking sales and lead generation services",
            whatWeDo: "Professional outbound sales support, lead qualification, appointment setting, and sales follow-up in German language.",
            languages: ["German (Native)", "German + English"],
            tools: ["Salesforce", "HubSpot", "Pipedrive", "Outreach", "LinkedIn Sales Navigator"],
            useCases: [
                "Outbound sales calls",
                "Lead qualification",
                "Appointment setting",
                "Product demonstrations",
                "Follow-up campaigns",
                "Market research"
            ]
        },
        {
            id: "technical-support",
            title: "Technical Support",
            subtitle: "IT & Product Support",
            Icon: Settings,
            description: "Expert technical assistance in German",
            whatWeDo: "Specialized technical support for software, SaaS platforms, and digital products with German-speaking experts.",
            languages: ["German (Technical)", "English"],
            tools: ["Jira", "Zendesk", "ServiceNow", "Remote support tools", "Ticketing systems"],
            useCases: [
                "Software troubleshooting",
                "Technical onboarding",
                "Bug reporting & tracking",
                "System configuration",
                "User training",
                "Escalation management"
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
                                    className="h-16 sm:h-18 md:h-20 w-auto"
                                    priority
                                />
                            </a>
                        </div>
                        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
                            <a href="/services" className="text-[#C9A961] hover:text-[#a88a4d] font-semibold text-sm xl:text-base transition-colors">
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
                        Our <span className="bg-gradient-to-r from-[#C9A961] via-[#e8d7b0] to-[#C9A961] bg-clip-text text-transparent">Services</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
                        Comprehensive BPO solutions tailored to your business needs. Every service designed for excellence.
                    </p>
                </div>
            </section>

            {/* Services Detail Section */}
            <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16">
                        {services.map((service, idx) => (
                            <div key={service.id} id={service.id} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gradient-to-br from-gray-50 to-white'} rounded-3xl shadow-xl p-8 sm:p-10 md:p-12 hover:shadow-2xl transition-all duration-300`}>
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    {/* Service Header */}
                                    <div className="lg:col-span-3">
                                        <div className="flex items-start gap-6">
                                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#C9A961] to-[#a88a4d] rounded-2xl flex items-center justify-center flex-shrink-0">
                                                <service.Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                                            </div>
                                            <div>
                                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{service.title}</h2>
                                                <p className="text-xl text-[#C9A961] font-semibold mb-3">{service.subtitle}</p>
                                                <p className="text-lg text-gray-600">{service.description}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* What We Do */}
                                    <div className="lg:col-span-3 bg-gradient-to-r from-[#C9A961]/10 to-transparent rounded-2xl p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                                            <span className="text-[#C9A961]">●</span> What We Do
                                        </h3>
                                        <p className="text-gray-700 text-lg leading-relaxed">{service.whatWeDo}</p>
                                    </div>

                                    {/* Languages Supported */}
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                            <Languages className="w-6 h-6 text-[#C9A961]" />
                                            Languages Supported
                                        </h3>
                                        <ul className="space-y-2">
                                            {service.languages.map((lang, i) => (
                                                <li key={i} className="flex items-center gap-2 text-gray-700">
                                                    <span className="w-2 h-2 bg-[#C9A961] rounded-full"></span>
                                                    {lang}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Tools & Systems */}
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                            <Wrench className="w-6 h-6 text-[#C9A961]" />
                                            Tools & Systems Used
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {service.tools.map((tool, i) => (
                                                <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Typical Use Cases */}
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                            <ClipboardCheck className="w-6 h-6 text-[#C9A961]" />
                                            Typical Use Cases
                                        </h3>
                                        <ul className="space-y-2">
                                            {service.useCases.map((useCase, i) => (
                                                <li key={i} className="flex items-start gap-2 text-gray-700">
                                                    <CheckCircle2 className="w-5 h-5 text-[#C9A961] mt-0.5 flex-shrink-0" />
                                                    {useCase}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
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
                        Ready to Get Started?
                    </h2>
                    <p className="text-lg sm:text-xl text-white/95 mb-10 max-w-3xl mx-auto">
                        Let's discuss how our services can transform your business operations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/contact" className="bg-white text-[#C9A961] px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all shadow-2xl hover:scale-105">
                            Contact Us Today
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
                                <li><a href="/about" className="text-gray-400 hover:text-[#C9A961] transition-colors">About</a></li>
                                <li><a href="/industries" className="text-gray-400 hover:text-[#C9A961] transition-colors">Industries</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4 text-[#C9A961]">Legal</h3>
                            <ul className="space-y-2">
                                <li><a href="/privacy-policy" className="text-gray-400 hover:text-[#C9A961] transition-colors">Privacy Policy</a></li>
                                <li><a href="/gdpr" className="text-gray-400 hover:text-[#C9A961] transition-colors">GDPR</a></li>
                                <li><a href="/terms" className="text-gray-400 hover:text-[#C9A961] transition-colors">Terms & Conditions</a></li>
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
