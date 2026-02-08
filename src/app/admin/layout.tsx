
import React from 'react';
import Sidebar from '@/components/layout/Sidebar';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-[#f6f6f8]">
            <Sidebar />
            <main className="flex-1 overflow-y-auto h-screen">
                {children}
            </main>
        </div>
    );
}
