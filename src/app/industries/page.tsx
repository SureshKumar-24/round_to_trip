import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";
import { Plane, ShoppingCart, ShoppingBag, DollarSign, Monitor, Smartphone, CheckCircle2, Check, AlertTriangle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Industry Solutions - Specialized BPO Services",
    description:
        "Industry-specific BPO solutions for travel, airlines, e-commerce, fintech, SaaS, and digital brands. We understand your industry and deliver tailored support.",
    keywords: [
        "travel BPO",
        "airline customer support",
        "e-commerce BPO",
        "fintech support",
        "SaaS customer service",
        "industry-specific BPO",
        "German travel support",
    ],
    openGraph: {
        title: "Industry Solutions - Aalishaan Global BPO Services",
        description:
            "Specialized BPO solutions tailored to your industry sector.",
        url: "/industries",
        type: "website",
    },
    alternates: {
        canonical: "/industries",
    },
};

export default function Industries() {
    const industries = [
        {
            id: "travel-tourism",
            title: "Travel & Tourism",
            Icon: Plane,
            description: "Specialized support for the travel industry",
            challenge: "Travel companies need multilingual support, 24/7 availability, and agents who understand complex booking systems and can handle time-sensitive customer needs.",
            solution: "Our German-speaking travel experts provide seamless support across all channels, handling reservations, modifications, and customer inquiries with industry-specific knowledge.",
            services: [
                "Flight & hotel reservations",
                "Booking modifications & cancellations",
                "Travel package inquiries",
                "Loyalty program support",
                "Emergency assistance",
                "Refund processing"
            ],
            results: ["98% customer satisfaction", "30% faster resolution times", "24/7 multilingual coverage"]
        },
        {
            id: "airlines-otas",
            title: "Airlines & OTAs",
            Icon: ShoppingCart,
            description: "Complete support for airlines and online travel agencies",
            challenge: "Airlines and OTAs require agents trained in GDS systems (Amadeus, Sabre), capable of handling high-volume bookings, and managing complex customer scenarios.",
            solution: "We provide GDS-trained German agents who understand airline operations, fare rules, and can deliver exceptional customer experiences across all touchpoints.",
            services: [
                "GDS operations (Amadeus, Sabre, Galileo)",
                "Reservation management",
                "Customer service & support",
                "Partner support",
                "Review management",
                "Complaint resolution"
            ],
            results: ["95% first call resolution", "Reduced operational costs by 40%", "Expert GDS handling"]
        },
        {
            id: "ecommerce",
            title: "E-commerce",
            Icon: ShoppingBag,
            description: "Comprehensive support for online retailers",
            challenge: "E-commerce brands need support that scales with demand, handles product inquiries, processes orders, and manages returns efficiently in multiple languages.",
            solution: "Our e-commerce specialists provide German customer support covering pre-sales, order management, and post-sales support to drive customer loyalty.",
            services: [
                "Product information & recommendations",
                "Order processing & tracking",
                "Returns & refunds management",
                "Payment support",
                "Live chat & email support",
                "Review management"
            ],
            results: ["Increased conversion by 25%", "Reduced cart abandonment", "Higher customer lifetime value"]
        },
        {
            id: "fintech",
            title: "Fintech",
            Icon: DollarSign,
            description: "Secure support for financial technology companies",
            challenge: "Fintech companies require GDPR-compliant support with agents trained in financial products, security protocols, and regulatory requirements.",
            solution: "We provide German-speaking agents with financial services background, trained in data security, compliance, and technical product knowledge.",
            services: [
                "Account support & verification",
                "Transaction inquiries",
                "Technical troubleshooting",
                "Fraud prevention support",
                "Compliance & KYC assistance",
                "Payment processing support"
            ],
            results: ["100% GDPR compliance", "Secure data handling", "Reduced fraud incidents"]
        },
        {
            id: "saas-tech",
            title: "SaaS & Marketplaces",
            Icon: Monitor,
            description: "Expert support for software platforms",
            challenge: "SaaS companies need technically proficient support agents who can handle onboarding, troubleshooting, and provide ongoing customer success support.",
            solution: "Our German-speaking tech support team provides L1/L2 technical support, user onboarding, and customer success management for SaaS platforms.",
            services: [
                "Technical support (L1/L2)",
                "User onboarding & training",
                "Bug reporting & tracking",
                "Feature requests management",
                "Customer success support",
                "Integration assistance"
            ],
            results: ["Improved user adoption", "Reduced churn by 30%", "Higher NPS scores"]
        },
        {
            id: "digital-brands",
            title: "Digital Brands",
            Icon: Smartphone,
            description: "Modern support for digital-first companies",
            challenge: "Digital brands need omnichannel support that matches their brand voice, handles social media, and provides seamless customer experiences.",
            solution: "We deliver on-brand German customer support across email, chat, social media, and phone, maintaining your brand identity and values.",
            services: [
                "Omnichannel support",
                "Social media management",
                "Community management",
                "Influencer support",
                "Content moderation",
                "Brand reputation management"
            ],
            results: ["Consistent brand voice", "Faster social response", "Enhanced brand loyalty"]
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
                            <a href="/services" className="text-gray-700 hover:text-[#1E73BE] font-medium text-sm xl:text-base transition-colors">
                                Services
                            </a>
                            <a href="/industries" className="text-[#1E73BE] hover:text-[#155A96] font-semibold text-sm xl:text-base transition-colors">
                                Industries
                            </a>
                            <a href="/german-services" className="text-gray-700 hover:text-[#1E73BE] font-medium text-sm xl:text-base transition-colors">
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
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        Industry <span className="bg-gradient-to-r from-[#1E73BE] via-[#5BA3E6] to-[#1E73BE] bg-clip-text text-transparent">Solutions</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
                        We already understand your industry. Specialized BPO solutions tailored to your sector.
                    </p>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-[#1E73BE]/10 to-white rounded-3xl p-8 sm:p-12 border-2 border-[#1E73BE]/20">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                                Why Industry Specialization Matters
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                Generic BPO providers treat every client the same. We don't. Our teams are trained in your industry's specific terminology, processes, and customer expectations. This means faster onboarding, better customer experiences, and higher satisfaction rates.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                <div className="bg-white rounded-2xl p-6 shadow-md">
                                    <div className="text-4xl font-bold text-[#1E73BE] mb-2">50%</div>
                                    <div className="text-gray-700">Faster Onboarding</div>
                                </div>
                                <div className="bg-white rounded-2xl p-6 shadow-md">
                                    <div className="text-4xl font-bold text-[#1E73BE] mb-2">35%</div>
                                    <div className="text-gray-700">Higher CSAT Scores</div>
                                </div>
                                <div className="bg-white rounded-2xl p-6 shadow-md">
                                    <div className="text-4xl font-bold text-[#1E73BE] mb-2">60%</div>
                                    <div className="text-gray-700">Reduced Training Time</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries Detail */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16">
                        {industries.map((industry, idx) => (
                            <div key={industry.id} id={industry.id} className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 md:p-12 hover:shadow-2xl transition-all">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    {/* Industry Header */}
                                    <div className="lg:col-span-2">
                                        <div className="flex items-start gap-6 mb-8">
                                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#1E73BE] to-[#155A96] rounded-2xl flex items-center justify-center flex-shrink-0">
                                                <industry.Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                                            </div>
                                            <div>
                                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{industry.title}</h2>
                                                <p className="text-xl text-gray-600">{industry.description}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Challenge */}
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                            <AlertTriangle className="w-6 h-6 text-red-600" /> The Challenge
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed">{industry.challenge}</p>
                                    </div>

                                    {/* Solution */}
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                            <CheckCircle2 className="w-6 h-6 text-green-600" /> Our Solution
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed">{industry.solution}</p>
                                    </div>

                                    {/* Services */}
                                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">Services We Provide</h3>
                                        <ul className="space-y-2">
                                            {industry.services.map((service, i) => (
                                                <li key={i} className="flex items-start gap-2 text-gray-700">
                                                    <CheckCircle2 className="w-5 h-5 text-[#1E73BE] mt-0.5 flex-shrink-0" />
                                                    {service}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Results */}
                                    <div className="bg-gradient-to-br from-[#1E73BE]/10 to-white rounded-2xl p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">Typical Results</h3>
                                        <ul className="space-y-3">
                                            {industry.results.map((result, i) => (
                                                <li key={i} className="flex items-center gap-3">
                                                    <div className="w-8 h-8 bg-[#1E73BE] rounded-full flex items-center justify-center flex-shrink-0">
                                                        <Check className="w-5 h-5 text-white" />
                                                    </div>
                                                    <span className="text-gray-700 font-medium">{result}</span>
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
            <section className="py-16 sm:py-20 bg-gradient-to-r from-[#1E73BE] via-[#155A96] to-[#1E73BE]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        Don't See Your Industry?
                    </h2>
                    <p className="text-lg sm:text-xl text-white/95 mb-10 max-w-3xl mx-auto">
                        We work with businesses across many sectors. Let's discuss your specific needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/contact" className="bg-white text-[#1E73BE] px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all shadow-2xl hover:scale-105">
                            Contact Us
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
                        <h3 className="text-lg font-bold mb-4 text-[#1E73BE]">Contact</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>info@aalishaanglobalbposervices.com</li>
                            <li>+91 9990889777</li>
                        </ul>
                    </div>
                    <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
                        <p>&copy; 2026 Aalishaan Global BPO Services. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
