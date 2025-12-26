import Image from "next/image";
import FAQAccordion from "@/components/FAQAccordion";
import MobileMenu from "@/components/MobileMenu";
import { Mail, MessageSquare, Plane, ClipboardList, Users, Shield, CheckCircle2, ArrowRight, Calendar, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Support Outsourcing for Travel & Tech | Aalishaan Global",
  description:
    "Premium customer support outsourcing for UK, US & European travel and tech platforms. Professional email, chat, and booking support with English & German capabilities. Request a pilot today!",
  keywords: [
    "customer support outsourcing",
    "travel tech support",
    "BPO services India",
    "email support outsourcing",
    "live chat support",
    "travel booking support",
    "UK customer service",
    "German language support",
  ],
  openGraph: {
    title: "Customer Support Outsourcing for Travel & Tech | Aalishaan Global",
    description:
      "Premium customer support outsourcing for UK, US & European travel and tech platforms. Professional email, chat, and booking support.",
    url: "/",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div>
              <Image
                src="/logo_round.svg"
                alt="Aalishaan Global BPO Services"
                width={280}
                height={95}
                className="h-14 sm:h-16 md:h-18 w-auto"
                priority
              />
            </div>

            {/* Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
              <a href="/services" className="text-gray-700 hover:text-[#1E73BE] font-medium text-sm xl:text-base transition-colors">
                Services
              </a>
              <a href="/pricing" className="text-gray-700 hover:text-[#1E73BE] font-medium text-sm xl:text-base transition-colors">
                Pricing
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
      <section className="pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-20 md:pb-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-[#1E73BE] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-[#6F8FA6] rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight px-2">
            <span className="block bg-gradient-to-r from-[#1E73BE] via-[#5BA3E6] to-[#1E73BE] bg-clip-text text-transparent">
              Customer Support Outsourcing
            </span>
            <span className="block mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              for Global Travel & Tech Platforms
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed px-4">
            Professional email, chat, and customer support services for UK, US, and European businesses — delivered by a trained, ethical, and scalable CX team.
          </p>

          {/* Supporting Line */}
          <p className="text-base sm:text-lg text-gray-400 mb-10 sm:mb-12 md:mb-14 max-w-3xl mx-auto leading-relaxed px-4">
            We help growing companies reduce support workload, improve response times, and deliver consistent customer experience across global markets.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 md:mb-20 px-4">
            <a href="/contact" className="bg-[#1E73BE] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold hover:bg-[#155A96] transition-all shadow-2xl hover:shadow-[#1E73BE]/50 hover:scale-110 transform flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              Request a Pilot
            </a>
            <a href="/contact" className="bg-white/10 backdrop-blur-md text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all shadow-xl flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Book a 15-Min Call
            </a>
          </div>

          {/* Language Support Badges */}
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto px-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20">
              <span className="text-white font-semibold">🇬🇧 English (UK & US)</span>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20">
              <span className="text-white font-semibold">🇩🇪 German (Goethe B2)</span>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20">
              <span className="text-white font-semibold">🌍 More on Request</span>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-[#1E73BE]">Aalishaan Global</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Aalishaan Global BPO Services helps growing companies manage customer interactions efficiently while maintaining quality, transparency, and consistency across global markets. We partner with startups and businesses in the UK, US, and Europe, providing structured workflows, professional communication, and transparent operations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section - Only 4 Services */}
      <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-[#1E73BE]">Services</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Focused customer support solutions for travel and tech platforms
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {/* Service Cards - Only 4 Services */}
            {[
              { Icon: Mail, title: "Email Customer Support", desc: "Professional handling of customer emails related to accounts, bookings, subscriptions, billing queries, and general inquiries." },
              { Icon: MessageSquare, title: "Live Chat Support", desc: "Real-time chat assistance for website and in-app users, focused on fast resolution and clear guidance." },
              { Icon: Plane, title: "Travel & Booking Support", desc: "Support for reservations, changes, cancellations, and general travel-related customer queries." },
              { Icon: ClipboardList, title: "Ticket Management", desc: "Structured ticket handling, internal notes, SLA-based responses, and proper escalation to client teams." }
            ].map((service, idx) => (
              <div key={idx} className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1E73BE] to-[#155A96] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 text-lg">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/services" className="inline-block bg-[#1E73BE] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#155A96] transition-all shadow-xl hover:scale-105">
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              How We <span className="text-[#1E73BE]">Work</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              A transparent, structured approach to partnership
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Requirement Discussion", desc: "We understand your product, users, and support expectations." },
              { step: "02", title: "NDA & Access Setup", desc: "Secure access to tools and documentation." },
              { step: "03", title: "Agent Onboarding", desc: "7–10 working days to learn your product, tone, and workflows." },
              { step: "04", title: "Pilot Launch", desc: "Start with 1–2 agents on email/chat support." },
              { step: "05", title: "Review & Scale", desc: "Performance review, feedback, and gradual scaling." }
            ].map((item, idx) => (
              <div key={idx} className="relative text-center">
                <div className="text-5xl sm:text-6xl font-black text-[#1E73BE]/20 mb-4">{item.step}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>
                {idx < 4 && (
                  <div className="hidden md:block absolute top-8 -right-4">
                    <ArrowRight className="w-8 h-8 text-[#1E73BE]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Why Work <span className="text-[#1E73BE]">With Us?</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Honest, professional, and focused on long-term partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              { Icon: Users, title: "Trained CX Team", desc: "Professionally managed customer experience professionals", emoji: null },
              { Icon: MessageSquare, title: "Strong English", desc: "Excellent communication for UK & US customers", emoji: null },
              { Icon: null, title: "German Capability", desc: "Goethe B2-certified German language support", emoji: "🇩🇪" },
              { Icon: Plane, title: "Travel & Tech Experience", desc: "Familiar with travel and technology customer workflows", emoji: null },
              { Icon: Shield, title: "Ethical Operations", desc: "Transparent and ethical customer handling practices", emoji: null },
              { Icon: CheckCircle2, title: "Pilot-Based Engagement", desc: "Start small, scale based on results", emoji: null }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all">
                <div className="w-14 h-14 bg-[#1E73BE] rounded-xl flex items-center justify-center mb-6">
                  {item.emoji ? <span className="text-2xl">{item.emoji}</span> : item.Icon && <item.Icon className="w-7 h-7 text-white" />}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Workflows Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Tools & <span className="text-[#1E73BE]">Workflows</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team is familiar with modern CX environments and ticket-based workflows
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {[
              "Zendesk-style ticketing",
              "Intercom-style live chat",
              "Freshdesk-style tools",
              "Knowledge-base responses"
            ].map((tool, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
                <CheckCircle2 className="w-8 h-8 text-[#1E73BE] mx-auto mb-3" />
                <span className="text-gray-700 font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Who This Is <span className="text-[#1E73BE]">For</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              "Travel-tech & booking platforms",
              "Mobility & ticketing services",
              "SaaS and technology companies",
              "Businesses serving UK, US, and European customers"
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md text-center border-2 border-gray-100 hover:border-[#1E73BE] transition-all">
                <CheckCircle2 className="w-10 h-10 text-[#1E73BE] mx-auto mb-4" />
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8 text-lg">
            If your team is growing and customer support is becoming a bottleneck, we can help.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-[#1E73BE]">Questions</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600">
              Everything you need to know about our services
            </p>
          </div>

          <FAQAccordion />
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-[#1E73BE] via-[#155A96] to-[#1E73BE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Start Small. Scale Confidently.
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed">
            We usually begin with a short pilot so you can evaluate quality, communication style, and workflow alignment before scaling.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/contact" className="bg-white text-[#1E73BE] px-10 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transition-all shadow-2xl hover:scale-105 flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              Request a Pilot
            </a>
            <a href="/contact" className="bg-gray-900 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-gray-800 transition-all shadow-2xl flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Book a 15-Min Call
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
            <div>
              <Image
                src="/logo_round.svg"
                alt="Aalishaan Global"
                width={180}
                height={60}
                className="h-16 w-auto mb-4 brightness-200"
              />
              <p className="text-gray-400 text-lg mb-2">Customer Support Outsourcing for UK, US & European Businesses</p>
              <p className="text-gray-500 text-sm">Based in India | Global Delivery</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#1E73BE]">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="/services" className="text-gray-400 hover:text-[#1E73BE] transition-colors text-lg">Services</a></li>
                <li><a href="/pricing" className="text-gray-400 hover:text-[#1E73BE] transition-colors text-lg">Pricing</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-[#1E73BE] transition-colors text-lg">About Us</a></li>
                <li><a href="/why-choose-us" className="text-gray-400 hover:text-[#1E73BE] transition-colors text-lg">Why Choose Us</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-[#1E73BE] transition-colors text-lg">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#1E73BE]">Legal</h3>
              <ul className="space-y-3">
                <li><a href="/privacy-policy" className="text-gray-400 hover:text-[#1E73BE] transition-colors text-lg">Privacy Policy</a></li>
                <li><a href="/gdpr" className="text-gray-400 hover:text-[#1E73BE] transition-colors text-lg">GDPR</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-[#1E73BE] transition-colors text-lg">Terms of Service</a></li>
                <li><a href="/security-compliance" className="text-gray-400 hover:text-[#1E73BE] transition-colors text-lg">Security & Compliance</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#1E73BE]">Contact Info</h3>
              <ul className="space-y-3 text-gray-400 text-lg">
                <li>Email: info@aalishaanglobalbposervices.com</li>
                <li>Phone: +91 9990889777</li>
                <li>Country: India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-lg">
            <p>&copy; 2026 Aalishaan Global BPO Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
