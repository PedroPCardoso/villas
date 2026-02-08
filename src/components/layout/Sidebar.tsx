
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const menuItems = [
    { id: '/admin', label: 'Dashboard', icon: 'dashboard' },
    { id: '/admin/frota', label: 'Veículos', icon: 'directions_car' },
    { id: '/admin/usuarios', label: 'Usuários', icon: 'group' },
    { id: '/admin/cobrancas', label: 'Cobranças', icon: 'receipt_long' },
    { id: '/admin/manutencao', label: 'Manutenção', icon: 'build', badge: '5' },
];

const Sidebar: React.FC = () => {
    const pathname = usePathname();

    return (
        <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen shrink-0 z-20">
            <div className="h-20 flex items-center px-6 border-b border-gray-100">
                <Link href="/" className="flex items-center gap-3">
                    <div className="h-10 w-10 flex items-center justify-center relative">
                        <Image
                            alt="Villas Locações Logo"
                            fill
                            className="object-contain"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHDvT9sc6h95LeqDegjOw9XtMZnlsf7elEOQ0oWTlUxkNvlUIuPmRb4OQL_d9VXufPpuGNh3_JaJXQJ-Aihs77jYm0c720HsnDIAC1ZgM4eWGNJunHUYO23jmFAQEMykM3AL4LkXy38npbyZInxnJyhxbxWD9xdOlYHPb-onWxxy2xXurpx7MYT0WuvByZa6R4zP2hJEvyhwA8CchGUrvTWxiXCK0psQ7D4KDgVqkEQCCTh5fdotj1W5xerHptFfxrMZNCt11KZVY"
                        />
                    </div>
                    <div>
                        <h1 className="text-sm font-bold text-slate-900 leading-tight">Villas Locações</h1>
                        <p className="text-xs text-slate-500">Admin Panel</p>
                    </div>
                </Link>
            </div>

            <nav className="flex-1 p-4 space-y-1">
                {menuItems.map((item) => {
                    const isActive = pathname === item.id;
                    return (
                        <Link
                            key={item.id}
                            href={item.id}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${isActive
                                    ? 'bg-primary/10 text-primary border-l-4 border-primary'
                                    : 'text-slate-600 hover:bg-red-50 hover:text-primary'
                                }`}
                        >
                            <span className={`material-symbols-outlined text-[22px] ${isActive ? 'icon-filled' : ''}`}>
                                {item.icon}
                            </span>
                            <span className="text-sm font-medium">{item.label}</span>
                            {item.badge && (
                                <span className="ml-auto bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                                    {item.badge}
                                </span>
                            )}
                        </Link>
                    );
                })}

                <div className="pt-4 mt-4 border-t border-gray-100">
                    <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Sistema</p>
                    <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-red-50 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[22px]">settings</span>
                        <span className="text-sm font-medium">Configurações</span>
                    </button>
                </div>
            </nav>

            <div className="p-4 border-t border-gray-100">
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                    <div className="h-9 w-9 rounded-full bg-slate-200 relative overflow-hidden">
                        <Image
                            src="https://picsum.photos/seed/admin/100/100"
                            alt="Admin"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col min-w-0">
                        <p className="text-sm font-medium text-slate-900 truncate">Admin User</p>
                        <p className="text-xs text-slate-500 truncate">admin@vilas.com</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
