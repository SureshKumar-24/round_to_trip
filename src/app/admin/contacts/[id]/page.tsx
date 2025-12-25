'use client';

import { useState, useEffect, useCallback, use } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
    ArrowLeft, Mail, Building2, Clock, User,
    Briefcase, MessageSquare, Loader2, Trash2, CheckCircle
} from 'lucide-react';

interface Contact {
    id: number;
    name: string;
    email: string;
    company: string;
    service: string;
    message: string;
    status: string;
    created_at: string;
    updated_at: string;
}

const statusColors: { [key: string]: string } = {
    new: 'bg-blue-100 text-blue-800 border-blue-200',
    contacted: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    in_progress: 'bg-purple-100 text-purple-800 border-purple-200',
    completed: 'bg-green-100 text-green-800 border-green-200',
    archived: 'bg-gray-100 text-gray-800 border-gray-200'
};

const serviceNames: { [key: string]: string } = {
    'email-support': 'Email Customer Support',
    'live-chat': 'Live Chat Support',
    'travel-support': 'Travel & Booking Support',
    'ticket-management': 'Ticket Management & Escalation',
    'multiple': 'Multiple Services'
};

export default function ContactDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const router = useRouter();
    const [contact, setContact] = useState<Contact | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isUpdating, setIsUpdating] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    const fetchContact = useCallback(async () => {
        try {
            const response = await fetch(`/api/admin/contacts/${id}`);

            if (response.status === 401) {
                router.push('/admin/login');
                return;
            }

            if (response.status === 404) {
                router.push('/admin/dashboard');
                return;
            }

            const data = await response.json();
            if (data.success) {
                setContact(data.data);
            }
        } catch (error) {
            console.error('Error fetching contact:', error);
        } finally {
            setIsLoading(false);
        }
    }, [id, router]);

    useEffect(() => {
        fetchContact();
    }, [fetchContact]);

    const updateStatus = async (newStatus: string) => {
        setIsUpdating(true);
        try {
            const response = await fetch(`/api/admin/contacts/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus })
            });

            const data = await response.json();
            if (data.success) {
                setContact(data.data);
            }
        } catch (error) {
            console.error('Error updating status:', error);
        } finally {
            setIsUpdating(false);
        }
    };

    const deleteContact = async () => {
        try {
            const response = await fetch(`/api/admin/contacts/${id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                router.push('/admin/dashboard');
            }
        } catch (error) {
            console.error('Error deleting contact:', error);
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <Loader2 className="w-10 h-10 text-[#1E73BE] animate-spin" />
            </div>
        );
    }

    if (!contact) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Not Found</h2>
                    <button
                        onClick={() => router.push('/admin/dashboard')}
                        className="text-[#1E73BE] hover:underline"
                    >
                        Back to Dashboard
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => router.push('/admin/dashboard')}
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5 text-gray-600" />
                            </button>
                            <Image
                                src="/round_logo.png"
                                alt="Round To Trip"
                                width={120}
                                height={40}
                                className="h-8 w-auto"
                            />
                        </div>
                        <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${statusColors[contact.status]}`}>
                            {contact.status.replace('_', ' ').toUpperCase()}
                        </span>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Info */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Contact Card */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#1E73BE] to-[#155A96] rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                                    {contact.name.charAt(0).toUpperCase()}
                                </div>
                                <div className="flex-1">
                                    <h1 className="text-2xl font-bold text-gray-900 mb-1">{contact.name}</h1>
                                    <p className="text-gray-500">{contact.company}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                                    <Mail className="w-5 h-5 text-[#1E73BE]" />
                                    <div>
                                        <p className="text-sm text-gray-500">Email</p>
                                        <a href={`mailto:${contact.email}`} className="text-[#1E73BE] hover:underline font-medium">
                                            {contact.email}
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                                    <Building2 className="w-5 h-5 text-[#1E73BE]" />
                                    <div>
                                        <p className="text-sm text-gray-500">Company</p>
                                        <p className="text-gray-900 font-medium">{contact.company}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                                    <Briefcase className="w-5 h-5 text-[#1E73BE]" />
                                    <div>
                                        <p className="text-sm text-gray-500">Service Interested</p>
                                        <p className="text-gray-900 font-medium">
                                            {serviceNames[contact.service] || contact.service}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                                    <Clock className="w-5 h-5 text-[#1E73BE]" />
                                    <div>
                                        <p className="text-sm text-gray-500">Submitted</p>
                                        <p className="text-gray-900 font-medium text-sm">{formatDate(contact.created_at)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Message Card */}
                        {contact.message && (
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <MessageSquare className="w-5 h-5 text-[#1E73BE]" />
                                    <h2 className="text-lg font-bold text-gray-900">Requirements</h2>
                                </div>
                                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100">
                                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                                        {contact.message}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Quick Actions */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
                            <div className="space-y-3">
                                <a
                                    href={`mailto:${contact.email}?subject=Re: Your Pilot Request - Aalishaan Global`}
                                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#1E73BE] to-[#155A96] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                                >
                                    <Mail className="w-5 h-5" />
                                    Reply to {contact.name.split(' ')[0]}
                                </a>
                            </div>
                        </div>

                        {/* Update Status */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <h2 className="text-lg font-bold text-gray-900 mb-4">Update Status</h2>
                            <div className="space-y-2">
                                {['new', 'contacted', 'in_progress', 'completed', 'archived'].map((status) => (
                                    <button
                                        key={status}
                                        onClick={() => updateStatus(status)}
                                        disabled={isUpdating || contact.status === status}
                                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-all
                                            ${contact.status === status
                                                ? statusColors[status] + ' border-2'
                                                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                            }
                                            disabled:opacity-50 disabled:cursor-not-allowed`}
                                    >
                                        <span className="capitalize font-medium">
                                            {status.replace('_', ' ')}
                                        </span>
                                        {contact.status === status && (
                                            <CheckCircle className="w-5 h-5" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Danger Zone */}
                        <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-6">
                            <h2 className="text-lg font-bold text-red-600 mb-4">Danger Zone</h2>
                            {!showDeleteConfirm ? (
                                <button
                                    onClick={() => setShowDeleteConfirm(true)}
                                    className="w-full flex items-center justify-center gap-2 border-2 border-red-200 text-red-600 py-3 rounded-xl font-semibold hover:bg-red-50 transition-colors"
                                >
                                    <Trash2 className="w-5 h-5" />
                                    Delete Contact
                                </button>
                            ) : (
                                <div className="space-y-3">
                                    <p className="text-sm text-gray-600 text-center">Are you sure? This cannot be undone.</p>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => setShowDeleteConfirm(false)}
                                            className="flex-1 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={deleteContact}
                                            className="flex-1 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Timeline */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <h2 className="text-lg font-bold text-gray-900 mb-4">Timeline</h2>
                            <div className="space-y-4">
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                        <User className="w-4 h-4 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Request Submitted</p>
                                        <p className="text-xs text-gray-500">{formatDate(contact.created_at)}</p>
                                    </div>
                                </div>
                                {contact.updated_at !== contact.created_at && (
                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                            <Clock className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">Last Updated</p>
                                            <p className="text-xs text-gray-500">{formatDate(contact.updated_at)}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Delete Confirmation Modal Overlay */}
            {showDeleteConfirm && (
                <div className="fixed inset-0 bg-black/20 z-40" onClick={() => setShowDeleteConfirm(false)} />
            )}
        </div>
    );
}
