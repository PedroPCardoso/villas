
'use client';

import React from 'react';
import Link from 'next/link';

const ClientBilling: React.FC = () => {
    return (
        <div className="flex flex-col h-full bg-[#f8f9fa] overflow-y-auto hide-scrollbar pb-20">
            <header className="flex items-center justify-between bg-white px-6 py-4 sticky top-0 z-10 border-b border-gray-100">
                <Link href="/cliente" className="flex items-center gap-2 text-slate-400">
                    <span className="material-symbols-outlined">arrow_back</span>
                </Link>
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">Financeiro</h2>
                <div className="w-6"></div>
            </header>

            <div className="p-5 flex flex-col gap-6">
                <div className="bg-primary p-6 rounded-[2rem] text-white shadow-xl shadow-red-900/10 relative overflow-hidden">
                    <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-[120px] opacity-10 rotate-12">receipt_long</span>
                    <p className="text-xs font-bold text-red-100 uppercase tracking-widest mb-1 opacity-80">Saldo Devedor</p>
                    <h3 className="text-3xl font-black mb-6">R$ 1.250,50</h3>
                    <div className="flex gap-3">
                        <button className="flex-1 bg-white text-primary text-xs font-bold py-3 rounded-xl shadow-sm active:scale-95 transition-all">PAGAR AGORA</button>
                        <button className="px-4 bg-white/20 text-white rounded-xl active:scale-95 transition-all"><span className="material-symbols-outlined text-sm">download</span></button>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex justify-between items-center px-1">
                        <h3 className="font-bold text-slate-900">Histórico</h3>
                        <button className="text-[10px] font-bold text-primary uppercase">Ver Tudo</button>
                    </div>

                    <div className="space-y-3">
                        {[
                            { label: 'Locação Semanal', date: 'Vence em 05 Out', val: 'R$ 850,00', status: 'Pago' },
                            { label: 'Multa de Trânsito', date: 'Vence em 28 Set', val: 'R$ 195,00', status: 'Pago' },
                            { label: 'Locação Semanal', date: 'Vence em 21 Set', val: 'R$ 850,00', status: 'Pago' },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-4 rounded-2xl flex items-center justify-between border border-gray-100 shadow-sm">
                                <div className="flex gap-3 items-center">
                                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-slate-400">
                                        <span className="material-symbols-outlined text-xl">description</span>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-900">{item.label}</h4>
                                        <p className="text-[10px] text-slate-400">{item.date}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-bold text-slate-900">{item.val}</p>
                                    <span className="text-[9px] font-black uppercase text-green-500">PAGO</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-amber-50 border border-amber-100 p-4 rounded-2xl flex gap-3">
                    <span className="material-symbols-outlined text-amber-500">help</span>
                    <p className="text-[10px] leading-relaxed text-amber-700">Dúvidas sobre sua fatura? Entre em contato com nosso financeiro pelo suporte via WhatsApp.</p>
                </div>
            </div>

            {/* Bottom Bar reused simple */}
            <nav className="absolute bottom-0 w-full bg-white border-t border-gray-100 pb-6 pt-3 px-6 flex justify-between items-end z-30 rounded-t-[20px]">
                <Link href="/cliente" className="flex flex-col items-center gap-1.5 text-gray-400 w-12">
                    <span className="material-symbols-outlined">home</span>
                    <span className="text-[10px] font-medium">Início</span>
                </Link>
                <Link href="/catalogo" className="flex flex-col items-center gap-1.5 text-gray-400 w-12">
                    <span className="material-symbols-outlined">directions_car</span>
                    <span className="text-[10px] font-medium">Catálogo</span>
                </Link>
                <Link href="/cliente/faturas" className="flex flex-col items-center gap-1.5 text-primary w-12">
                    <span className="material-symbols-outlined icon-filled">account_balance_wallet</span>
                    <span className="text-[10px] font-bold">Finanças</span>
                </Link>
                <Link href="/" className="flex flex-col items-center gap-1.5 text-gray-400 w-12">
                    <span className="material-symbols-outlined">person</span>
                    <span className="text-[10px] font-medium">Perfil</span>
                </Link>
            </nav>
        </div>
    );
};

export default ClientBilling;
