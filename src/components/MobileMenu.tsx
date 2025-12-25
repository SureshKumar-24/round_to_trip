'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X, Calendar, Phone } from 'lucide-react';

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            {/* Mobile Menu Button - Shows on screens smaller than lg */}
            <button
                onClick={toggleMenu}
                className="lg:hidden p-3 bg-[#1E73BE] text-white rounded-lg hover:bg-[#155A96] transition-all shadow-lg"
                aria-label="Toggle menu"
            >
                {isOpen ? (
                    <X className="w-7 h-7 stroke-[2.5]" />
                ) : (
                    <Menu className="w-7 h-7 stroke-[2.5]" />
                )}
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-[55] lg:hidden"
                    onClick={closeMenu}
                />
            )}

            {/* Mobile Menu Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-[60] transform transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                style={{ backgroundColor: '#ffffff' }}
            >
                <div className="p-6 bg-white" style={{ backgroundColor: '#ffffff' }}>
                    {/* Close Button */}
                    <button
                        onClick={closeMenu}
                        className="absolute top-6 right-6 p-2 bg-gray-900 text-white rounded-lg hover:bg-[#1E73BE] transition-all shadow-lg"
                    >
                        <X className="w-6 h-6 stroke-[2.5]" />
                    </button>

                    {/* Logo */}
                    <div className="mb-6 mt-2">
                        <Image
                            src="/round_logo.png"
                            alt="Aalishaan Global"
                            width={150}
                            height={50}
                            className="h-12 w-auto"
                        />
                        <p className="text-[10px] text-gray-500 mt-1">
                            Customer Support Outsourcing
                        </p>
                    </div>

                    {/* Menu Items */}
                    <nav className="flex flex-col space-y-3">
                        <a
                            href="/services"
                            onClick={closeMenu}
                            className="text-gray-700 hover:text-[#1E73BE] font-medium text-lg py-2 transition-colors"
                        >
                            Services
                        </a>
                        <a
                            href="/pricing"
                            onClick={closeMenu}
                            className="text-gray-700 hover:text-[#1E73BE] font-medium text-lg py-2 transition-colors"
                        >
                            Pricing
                        </a>
                        <a
                            href="/why-choose-us"
                            onClick={closeMenu}
                            className="text-gray-700 hover:text-[#1E73BE] font-medium text-lg py-2 transition-colors"
                        >
                            Why Us
                        </a>
                        <a
                            href="/about"
                            onClick={closeMenu}
                            className="text-gray-700 hover:text-[#1E73BE] font-medium text-lg py-2 transition-colors"
                        >
                            About
                        </a>

                        {/* Divider */}
                        <div className="border-t border-gray-200 my-2"></div>

                        {/* CTA Buttons */}
                        <a
                            href="/contact"
                            onClick={closeMenu}
                            className="bg-[#1E73BE] text-white px-6 py-3 rounded-full hover:bg-[#155A96] font-semibold text-lg transition-all text-center flex items-center justify-center gap-2"
                        >
                            <Calendar className="w-5 h-5" />
                            Request a Pilot
                        </a>
                        <a
                            href="/contact"
                            onClick={closeMenu}
                            className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 font-semibold text-lg transition-all text-center flex items-center justify-center gap-2"
                        >
                            <Phone className="w-5 h-5" />
                            Book a Call
                        </a>
                    </nav>

                    {/* Contact Info */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <p className="text-sm text-gray-500 mb-2">Contact us:</p>
                        <p className="text-sm text-gray-700">info@aalishaan-global.com</p>
                        <p className="text-xs text-gray-500 mt-2">Based in India | Global Delivery</p>
                    </div>
                </div>
            </div>
        </>
    );
}
