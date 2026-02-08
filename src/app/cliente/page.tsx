
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ClientDashboard: React.FC = () => {
    return (
        <>
            {/* Status Bar */}
            <div className="w-full h-11 flex justify-between items-center px-6 text-xs font-semibold text-gray-900 shrink-0 bg-white">
                <span>9:41</span>
                <div className="flex gap-1.5 items-center">
                    <span className="material-symbols-outlined text-[16px] font-bold">signal_cellular_alt</span>
                    <span className="material-symbols-outlined text-[16px] font-bold">wifi</span>
                    <span className="material-symbols-outlined text-[16px] font-bold">battery_full</span>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col overflow-y-auto hide-scrollbar pb-20">
                <header className="flex items-center justify-between px-6 pt-2 pb-6 bg-white">
                    <div className="w-12 h-12 relative">
                        <Image fill src="/assets/logo.png" alt="Villas Logo" className="object-contain" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 font-medium leading-none">Bem-vindo ao</p>
                        <h2 className="text-[#A32A2A] text-lg font-black uppercase font-logo leading-none mt-1">Villas</h2>
                    </div>
                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <span className="material-symbols-outlined">notifications</span>
                    </button>
                </header>

                <div className="px-5 mb-6 mt-4">
                    <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-wide border border-green-100">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                    Locação Ativa
                                </span>
                                <h3 className="text-gray-900 text-xl font-bold mt-2.5">VW Virtus 1.6 MSI</h3>
                                <p className="text-gray-500 text-sm">Placa: ABC-1234</p>
                            </div>
                        </div>
                        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-gray-50">
                            <Image fill src="https://lh3.googleusercontent.com/aida-public/AB6AXuAohq6ph4p5RtGirRkg1Qs2Ig7A3prnWoVSh77f4GNAJhw_xvSYhb6Npdey2UuqBIWr4LWoHx7___s3NMacBDx_-XsNNggsbFdZeYMARlR3eVoeHDTSDtSBIlra8NqKhHd5otRjyJHm2d8jpFcmIqJwUawB9c7fnTX6DTeKkhAm212e7olicSfz8oM_f65T0-vvPIypsqwg7ss7wz51aOcHKCmZo_KJdJ2emJc4hSrWV5_TgMuVrfww99XotnCPxfj8I4xG0CN0b4k" className="object-contain" alt="Car" />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-gray-50 border border-gray-100">
                                <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-1">Próxima Parcela</span>
                                <span className="text-base font-bold text-gray-900">15 Out</span>
                            </div>
                            <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-gray-50 border border-gray-100">
                                <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-1">KM Atual</span>
                                <span className="text-base font-bold text-gray-900">42.890 km</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-5 mb-6">
                    <div className="bg-red-50 border border-red-100 rounded-3xl p-6 relative overflow-hidden group">
                        <span className="material-symbols-outlined absolute -right-6 -top-6 text-red-100 text-[140px] opacity-50 rotate-12">warning</span>
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-2 text-primary font-bold">
                                <span className="material-symbols-outlined">error</span>
                                <h3 className="text-lg">Vistoria Pendente</h3>
                            </div>
                            <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                                Sua vistoria semanal vence <span className="font-bold text-primary">hoje</span>. Realize agora para evitar multas contratuais.
                            </p>
                            <Link href="/cliente/vistoria" className="w-full bg-[#A32A2A] text-white font-bold py-3.5 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2.5 active:scale-95 transition-all">
                                <span className="material-symbols-outlined text-[20px]">photo_camera</span>
                                Realizar Agora
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="px-5 mb-6">
                    <h3 className="font-bold text-lg mb-4">Acesso Rápido</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex flex-col items-start gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm text-left hover:bg-gray-50 transition-colors">
                            <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">headset_mic</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-900 font-bold">Suporte</span>
                                <span className="text-[10px] text-gray-400">Emergência 24h</span>
                            </div>
                        </button>
                        <Link href="/cliente/faturas" className="flex flex-col items-start gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm text-left hover:bg-gray-50 transition-colors">
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                                <span className="material-symbols-outlined">description</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-900 font-bold">Faturas</span>
                                <span className="text-[10px] text-gray-400">Boletos e histórico</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <nav className="absolute bottom-0 w-full bg-white border-t border-gray-100 pb-6 pt-3 px-6 flex justify-between items-end z-30 rounded-t-[20px] shadow-[0_-5px_20px_rgba(0,0,0,0.03)]">
                <Link href="/cliente" className="flex flex-col items-center gap-1.5 text-primary w-12">
                    <span className="material-symbols-outlined icon-filled">home</span>
                    <span className="text-[10px] font-bold">Início</span>
                </Link>
                <Link href="/catalogo" className="flex flex-col items-center gap-1.5 text-gray-400 w-12">
                    <span className="material-symbols-outlined">directions_car</span>
                    <span className="text-[10px] font-medium">Catálogo</span>
                </Link>
                <Link href="/cliente/faturas" className="flex flex-col items-center gap-1.5 text-gray-400 w-12">
                    <span className="material-symbols-outlined">account_balance_wallet</span>
                    <span className="text-[10px] font-medium">Finanças</span>
                </Link>
                <Link href="/" className="flex flex-col items-center gap-1.5 text-gray-400 w-12">
                    <span className="material-symbols-outlined">person</span>
                    <span className="text-[10px] font-medium">Perfil</span>
                </Link>
            </nav>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-200 rounded-full z-40"></div>
        </>
    );
};

export default ClientDashboard;
