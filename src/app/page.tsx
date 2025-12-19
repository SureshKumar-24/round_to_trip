import Image from "next/image";
import FAQAccordion from "@/components/FAQAccordion";
import MobileMenu from "@/components/MobileMenu";
import { Phone, FileText, Users, Monitor, Settings, Building2, Shield, Star, Target, DollarSign, Zap, Lock, ArrowRight, CheckCircle } from "lucide-react";


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex justify-between items-center">
            {/* Logo - Made Larger */}
            <div>
              <Image
                src="/company.svg"
                alt="Aalishaan Global BPO Services"
                width={280}
                height={95}
                className="h-16 sm:h-18 md:h-20 w-auto"
                priority
              />
            </div>

            {/* Desktop Navigation Menu */}
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

            {/* Mobile Menu */}
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-20 md:pb-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-[#C9A961] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-[#DC2626] rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight px-2">
            <span className="block bg-gradient-to-r from-[#C9A961] via-[#e8d7b0] to-[#C9A961] bg-clip-text text-transparent">
              German Language BPO Services
            </span>
            <span className="block mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              for Travel, CX & Digital Brands
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 sm:mb-12 md:mb-14 max-w-4xl mx-auto leading-relaxed px-4">
            Specialized German customer support with pilot-first approach. Fast, flexible, and focused on your success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 md:mb-20 px-4">
            <a href="#contact" className="bg-[#C9A961] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold hover:bg-[#a88a4d] transition-all shadow-2xl hover:shadow-[#C9A961]/50 hover:scale-110 transform">
              Get Started Today
            </a>
            <a href="#services" className="bg-white/10 backdrop-blur-md text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all shadow-xl">
              Explore Services
            </a>
          </div>

          {/* Stats Cards - Improved Design */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto px-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 md:p-10 border border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-300 shadow-2xl">
              <div className="text-5xl sm:text-6xl font-black text-[#C9A961] mb-3 sm:mb-4">500+</div>
              <div className="text-gray-200 text-lg sm:text-xl font-medium">Happy Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 md:p-10 border border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-300 shadow-2xl">
              <div className="text-5xl sm:text-6xl font-black text-[#C9A961] mb-3 sm:mb-4">24/7</div>
              <div className="text-gray-200 text-lg sm:text-xl font-medium">Support Available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 md:p-10 border border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-300 shadow-2xl">
              <div className="text-5xl sm:text-6xl font-black text-[#C9A961] mb-3 sm:mb-4">99%</div>
              <div className="text-gray-200 text-lg sm:text-xl font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-[#C9A961]">Premium Services</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive BPO solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Service Cards */}
            {[
              { Icon: Phone, title: "Call Center Services", desc: "Professional inbound and outbound call services with multilingual support." },
              { Icon: FileText, title: "Data Entry", desc: "Accurate and efficient data processing with 99.9% accuracy guarantee." },
              { Icon: Users, title: "Customer Support", desc: "24/7 customer service across email, chat, and phone support." },
              { Icon: Monitor, title: "Virtual Assistance", desc: "Dedicated virtual assistants to streamline your operations." },
              { Icon: Settings, title: "Technical Support", desc: "Expert technical assistance to keep your systems running smoothly." },
              { Icon: Building2, title: "Back Office Operations", desc: "Comprehensive support including accounting, HR, and admin functions." }
            ].map((service, idx) => (
              <div key={idx} className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-[#C9A961] to-[#a88a4d] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 text-lg">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              How It <span className="text-[#C9A961]">Works</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Get started in 3 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Share Your Requirements", desc: "Tell us about your business needs and goals. We'll schedule a free consultation to understand your challenges." },
              { step: "02", title: "Custom Solution Design", desc: "Our experts create a tailored BPO strategy with the right team, technology, and processes for your success." },
              { step: "03", title: "Launch & Scale", desc: "We onboard your dedicated team, implement workflows, and continuously optimize for maximum efficiency." }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl sm:text-7xl md:text-8xl font-black text-[#C9A961]/20 mb-4">{item.step}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
                {idx < 2 && (
                  <div className="hidden md:block absolute top-12 -right-6">
                    <ArrowRight className="w-10 h-10 text-[#C9A961]" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="#contact" className="inline-block bg-[#C9A961] text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-[#a88a4d] transition-all shadow-xl hover:scale-105">
              Start Your Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
                About <span className="text-[#C9A961]">Aalishaan Global</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                We are a leading provider of Business Process Outsourcing services, committed to delivering excellence and innovation in every project.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
                With years of industry experience and a dedicated team, we help businesses worldwide optimize operations and achieve sustainable growth.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-white rounded-2xl p-8 border-l-4 border-[#C9A961] shadow-md">
                  <div className="text-3xl sm:text-4xl font-bold text-[#C9A961] mb-2">10+</div>
                  <div className="text-gray-700 text-lg">Years Experience</div>
                </div>
                <div className="bg-white rounded-2xl p-8 border-l-4 border-[#DC2626] shadow-md">
                  <div className="text-3xl sm:text-4xl font-bold text-[#DC2626] mb-2">50+</div>
                  <div className="text-gray-700 text-lg">Expert Team</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#C9A961] to-[#a88a4d] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    To empower businesses globally with innovative BPO solutions that drive efficiency and unlock new opportunities for growth.
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To be the most trusted BPO partner worldwide, recognized for our commitment to quality, innovation, and client success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Why Choose <span className="text-[#C9A961]">Aalishaan Global?</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional value through expertise, innovation, and dedication
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { Icon: Target, title: "Quality Assured", desc: "ISO certified processes ensuring highest quality standards." },
              { Icon: DollarSign, title: "Cost Effective", desc: "Competitive pricing with flexible models to suit your budget." },
              { Icon: Zap, title: "Quick Turnaround", desc: "Fast delivery without compromising on quality." },
              { Icon: Lock, title: "Data Security", desc: "Bank-level security protocols to protect your information." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all">
                <div className="w-14 h-14 bg-[#C9A961] rounded-xl flex items-center justify-center mb-6">
                  <item.Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Certifications */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Trusted & Certified</h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">Industry-leading standards and compliance</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 items-center justify-items-center">
            {[
              { name: "ISO 9001:2015", desc: "Quality Management" },
              { name: "ISO 27001", desc: "Information Security" },
              { name: "GDPR", desc: "Data Protection" },
              { name: "PCI DSS", desc: "Payment Security" }
            ].map((cert, idx) => (
              <div key={idx} className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-[#C9A961] to-[#a88a4d] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Shield className="w-12 h-12 text-white" />
                </div>
                <div className="font-bold text-gray-900">{cert.name}</div>
                <div className="text-sm text-gray-600">{cert.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Client <span className="text-[#C9A961]">Testimonials</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Hear what our satisfied clients have to say
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              { name: "John Doe", role: "CEO, Tech Solutions Inc.", initial: "JD", quote: "Aalishaan Global transformed our customer service operations. Their professionalism is unmatched." },
              { name: "Sarah Anderson", role: "Manager, Global Retail Co.", initial: "SA", quote: "Outstanding service! Their data entry team is incredibly accurate and efficient. Highly recommended!" },
              { name: "Michael Peters", role: "Director, Enterprise Systems", initial: "MP", quote: "Working with Aalishaan has been a game-changer for our business. True professionals!" }
            ].map((test, idx) => (
              <div key={idx} className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center mb-6 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-[#C9A961] fill-[#C9A961]" />
                  ))}
                </div>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed italic">"{test.quote}"</p>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#C9A961] to-[#a88a4d] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {test.initial}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">{test.name}</div>
                    <div className="text-gray-500">{test.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-[#C9A961]">Questions</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600">
              Everything you need to know about our services
            </p>
          </div>

          <FAQAccordion />
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-[#C9A961] via-[#a88a4d] to-[#C9A961]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of satisfied clients who trust Aalishaan Global for their BPO needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="mailto:info@aalishaan-global.com" className="bg-white text-[#C9A961] px-10 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transition-all shadow-2xl hover:scale-105">
              Get in Touch
            </a>
            <a href="tel:+1234567890" className="bg-gray-900 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-gray-800 transition-all shadow-2xl">
              Call Us Now
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
                src="/company.svg"
                alt="Aalishaan Global"
                width={180}
                height={60}
                className="h-16 w-auto mb-6 brightness-200"
              />
              <p className="text-gray-400 text-lg">Premium BPO services for global businesses.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#C9A961]">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#services" className="text-gray-400 hover:text-[#C9A961] transition-colors text-lg">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-[#C9A961] transition-colors text-lg">About Us</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-[#C9A961] transition-colors text-lg">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-[#C9A961] transition-colors text-lg">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#C9A961]">Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-[#C9A961] transition-colors text-lg">Call Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#C9A961] transition-colors text-lg">Data Entry</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#C9A961] transition-colors text-lg">Customer Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#C9A961] transition-colors text-lg">Virtual Assistance</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#C9A961]">Contact Info</h3>
              <ul className="space-y-3 text-gray-400 text-lg">
                <li>Email: info@aalishaan-global.com</li>
                <li>Phone: +1 (234) 567-8900</li>
                <li>Address: Global Business Center</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-lg">
            <p>&copy; 2024 Aalishaan Global BPO Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
