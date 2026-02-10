'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-[#f6f6f8]">
            {/* Mobile Header for Sidebar Toggle */}
            <div className="lg:hidden fixed top-0 w-full h-16 bg-white border-b border-gray-200 z-20 px-4 flex items-center justify-between">
                <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="p-2 -ml-2 text-slate-600 hover:text-primary"
                >
                    <span className="material-symbols-outlined">menu</span>
                </button>
                <span className="font-bold text-slate-900">Villas Locações</span>
                <div className="w-8" />
            </div>

            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            <main className="flex-1 lg:overflow-y-auto lg:h-screen w-full pt-16 lg:pt-0">
                {children}
            </main>
        </div>
    );
}
