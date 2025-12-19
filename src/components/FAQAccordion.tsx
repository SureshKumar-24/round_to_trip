'use client';

import { useState } from 'react';

interface FAQItem {
    q: string;
    a: string;
}

export default function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs: FAQItem[] = [
        { q: "How quickly can we get started?", a: "We can have your dedicated team up and running within 2-3 weeks, depending on your specific requirements and team size." },
        { q: "Can I scale my team up or down?", a: "Absolutely! Our flexible model allows you to scale your team based on seasonal demands or business growth, with no long-term commitments." },
        { q: "What languages do you support?", a: "We offer multilingual support in 15+ languages including English, Spanish, French, German, Mandarin, and more." },
        { q: "How do you ensure data security?", a: "We maintain ISO 27001 certification, use encrypted communications, secure VPNs, and follow strict data protection protocols including GDPR compliance." },
        { q: "What are your pricing models?", a: "We offer flexible pricing including per-hour, per-agent, and project-based models. Contact us for a custom quote tailored to your needs." },
        { q: "Do you provide 24/7 support?", a: "Yes! We offer round-the-clock support across all time zones to ensure your business never misses a beat." }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {faqs.map((faq, idx) => (
                <div
                    key={idx}
                    className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100 overflow-hidden"
                >
                    <button
                        onClick={() => toggleFAQ(idx)}
                        className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                        <h3 className="text-xl font-bold text-gray-900 pr-8">{faq.q}</h3>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#C9A961] flex items-center justify-center transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </button>
                    <div
                        className={`transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            } overflow-hidden`}
                    >
                        <div className="px-6 pb-6">
                            <p className="text-gray-600 text-lg leading-relaxed">{faq.a}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
