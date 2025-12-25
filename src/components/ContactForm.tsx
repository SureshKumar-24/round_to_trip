'use client';

import { useState } from 'react';
import { Calendar, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    service: '',
                    message: ''
                });
            } else {
                setSubmitStatus('error');
                setErrorMessage(data.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setSubmitStatus('error');
            setErrorMessage('Network error. Please check your connection and try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitStatus === 'success') {
        return (
            <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 border border-gray-200">
                <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Your pilot request has been submitted successfully. We'll get back to you within 24 hours.
                    </p>
                    <button
                        onClick={() => setSubmitStatus('idle')}
                        className="bg-[#1E73BE] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#155A96] transition-all"
                    >
                        Submit Another Request
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Request a Pilot</h2>
            <p className="text-gray-600 mb-8">Tell us about your support needs and we'll get back to you with next steps.</p>

            {submitStatus === 'error' && (
                <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                        <p className="text-red-800 font-medium">Failed to submit</p>
                        <p className="text-red-600 text-sm">{errorMessage}</p>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1E73BE] focus:outline-none transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="Your name"
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
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1E73BE] focus:outline-none transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="you@company.com"
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
                        value={formData.company}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1E73BE] focus:outline-none transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                        value={formData.service}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1E73BE] focus:outline-none transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                    >
                        <option value="">Select a service</option>
                        <option value="email-support">Email Customer Support</option>
                        <option value="live-chat">Live Chat Support</option>
                        <option value="travel-support">Travel & Booking Support</option>
                        <option value="ticket-management">Ticket Management & Escalation</option>
                        <option value="multiple">Multiple Services</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Tell us about your requirements
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1E73BE] focus:outline-none transition-colors resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="Describe your customer support needs..."
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#1E73BE] to-[#155A96] text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            <Calendar className="w-5 h-5" />
                            Request a Pilot
                        </>
                    )}
                </button>

                <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our{' '}
                    <a href="/privacy-policy" className="text-[#1E73BE] hover:underline">Privacy Policy</a>
                </p>
            </form>
        </div>
    );
}
