'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
    Users, LogOut, Search, ChevronLeft, ChevronRight,
    Mail, Building2, Clock, Eye, Filter, RefreshCw, Loader2
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
}

interface Pagination {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
}

const statusColors: { [key: string]: string } = {
    new: 'bg-blue-100 text-blue-800',
    contacted: 'bg-yellow-100 text-yellow-800',
    in_progress: 'bg-purple-100 text-purple-800',
    completed: 'bg-green-100 text-green-800',
    archived: 'bg-gray-100 text-gray-800'
};

const serviceNames: { [key: string]: string } = {
    'email-support': 'Email Support',
    'live-chat': 'Live Chat',
    'travel-support': 'Travel & Booking',
    'ticket-management': 'Ticket Management',
    'multiple': 'Multiple Services'
};

export default function AdminDashboard() {
    const router = useRouter();
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [pagination, setPagination] = useState<Pagination | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [page, setPage] = useState(1);

    const fetchContacts = useCallback(async () => {
        setIsLoading(true);
        try {
            const params = new URLSearchParams({
                page: page.toString(),
                limit: '10',
                ...(searchQuery && { search: searchQuery }),
                ...(statusFilter && { status: statusFilter })
            });

            const response = await fetch(`/api/admin/contacts?${params}`);

            if (response.status === 401) {
                router.push('/admin/login');
                return;
            }

            const data = await response.json();
            if (data.success) {
                setContacts(data.data);
                setPagination(data.pagination);
            }
        } catch (error) {
            console.error('Error fetching contacts:', error);
        } finally {
            setIsLoading(false);
        }
    }, [page, searchQuery, statusFilter, router]);

    useEffect(() => {
        fetchContacts();
    }, [fetchContacts]);

    const handleLogout = async () => {
        await fetch('/api/admin/logout', { method: 'POST' });
        router.push('/admin/login');
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setPage(1);
        fetchContacts();
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <Image
                                src="/company.svg"
                                alt="Round To Trip"
                                width={150}
                                height={50}
                                className="h-10 w-auto"
                            />
                            <div className="hidden sm:block border-l border-gray-300 pl-4">
                                <h1 className="text-lg font-bold text-gray-900">Admin Panel</h1>
                                <p className="text-sm text-gray-500">Manage Contact Requests</p>
                            </div>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors px-4 py-2 rounded-lg hover:bg-red-50"
                        >
                            <LogOut className="w-5 h-5" />
                            <span className="hidden sm:inline">Logout</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                <Users className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Total Contacts</p>
                                <p className="text-2xl font-bold text-gray-900">{pagination?.total || 0}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                <Mail className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">New Requests</p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {contacts.filter(c => c.status === 'new').length}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                                <Building2 className="w-6 h-6 text-purple-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">In Progress</p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {contacts.filter(c => c.status === 'in_progress').length}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                                <Clock className="w-6 h-6 text-amber-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Contacted</p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {contacts.filter(c => c.status === 'contacted').length}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <form onSubmit={handleSearch} className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search by name, email, or company..."
                                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#1E73BE] focus:ring-2 focus:ring-[#1E73BE]/20 transition-all"
                                />
                            </div>
                        </form>
                        <div className="flex gap-3">
                            <div className="relative">
                                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <select
                                    value={statusFilter}
                                    onChange={(e) => {
                                        setStatusFilter(e.target.value);
                                        setPage(1);
                                    }}
                                    className="pl-9 pr-8 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#1E73BE] appearance-none bg-white cursor-pointer"
                                >
                                    <option value="">All Status</option>
                                    <option value="new">New</option>
                                    <option value="contacted">Contacted</option>
                                    <option value="in_progress">In Progress</option>
                                    <option value="completed">Completed</option>
                                    <option value="archived">Archived</option>
                                </select>
                            </div>
                            <button
                                onClick={fetchContacts}
                                className="px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
                                title="Refresh"
                            >
                                <RefreshCw className="w-5 h-5 text-gray-600" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Contacts Table */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    {isLoading ? (
                        <div className="flex items-center justify-center py-20">
                            <Loader2 className="w-8 h-8 text-[#1E73BE] animate-spin" />
                        </div>
                    ) : contacts.length === 0 ? (
                        <div className="text-center py-20">
                            <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">No contacts found</h3>
                            <p className="text-gray-500">Contact requests will appear here once submitted.</p>
                        </div>
                    ) : (
                        <>
                            {/* Desktop Table */}
                            <div className="hidden md:block overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-gray-50 border-b border-gray-100">
                                        <tr>
                                            <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Contact</th>
                                            <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Company</th>
                                            <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Service</th>
                                            <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Status</th>
                                            <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Date</th>
                                            <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {contacts.map((contact) => (
                                            <tr key={contact.id} className="hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-4">
                                                    <div>
                                                        <p className="font-semibold text-gray-900">{contact.name}</p>
                                                        <p className="text-sm text-gray-500">{contact.email}</p>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-gray-700">{contact.company}</td>
                                                <td className="px-6 py-4">
                                                    <span className="text-sm text-gray-700">
                                                        {serviceNames[contact.service] || contact.service}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[contact.status] || 'bg-gray-100 text-gray-800'}`}>
                                                        {contact.status.replace('_', ' ').toUpperCase()}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    {formatDate(contact.created_at)}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <button
                                                        onClick={() => router.push(`/admin/contacts/${contact.id}`)}
                                                        className="flex items-center gap-2 text-[#1E73BE] hover:text-[#155A96] font-medium text-sm transition-colors"
                                                    >
                                                        <Eye className="w-4 h-4" />
                                                        View
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Mobile Cards */}
                            <div className="md:hidden divide-y divide-gray-100">
                                {contacts.map((contact) => (
                                    <div key={contact.id} className="p-4 hover:bg-gray-50 transition-colors">
                                        <div className="flex justify-between items-start mb-3">
                                            <div>
                                                <p className="font-semibold text-gray-900">{contact.name}</p>
                                                <p className="text-sm text-gray-500">{contact.email}</p>
                                            </div>
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColors[contact.status]}`}>
                                                {contact.status.replace('_', ' ').toUpperCase()}
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-sm text-gray-500">
                                                <p>{contact.company}</p>
                                                <p>{formatDate(contact.created_at)}</p>
                                            </div>
                                            <button
                                                onClick={() => router.push(`/admin/contacts/${contact.id}`)}
                                                className="flex items-center gap-1 text-[#1E73BE] font-medium text-sm"
                                            >
                                                <Eye className="w-4 h-4" />
                                                View
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination */}
                            {pagination && pagination.totalPages > 1 && (
                                <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
                                    <p className="text-sm text-gray-500">
                                        Showing {((pagination.page - 1) * pagination.limit) + 1} to {Math.min(pagination.page * pagination.limit, pagination.total)} of {pagination.total} results
                                    </p>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => setPage(p => Math.max(1, p - 1))}
                                            disabled={!pagination.hasPrev}
                                            className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                        >
                                            <ChevronLeft className="w-5 h-5" />
                                        </button>
                                        <span className="px-4 py-2 text-sm font-medium text-gray-700">
                                            Page {pagination.page} of {pagination.totalPages}
                                        </span>
                                        <button
                                            onClick={() => setPage(p => Math.min(pagination.totalPages, p + 1))}
                                            disabled={!pagination.hasNext}
                                            className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                        >
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </main>
        </div>
    );
}
