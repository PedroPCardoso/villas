
import React from 'react';

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-[#e0e2e5] min-h-screen flex items-center justify-center py-8 font-sans">
            <div className="relative w-full max-w-[375px] h-[812px] bg-[#f8f9fa] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col border-[8px] border-white box-content">
                {children}
            </div>
        </div>
    );
}
