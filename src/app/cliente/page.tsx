
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { RENTALS, FINANCIAL_RECORDS, VEHICLES } from '@/constants/mock-data';
import { ClientUser } from '@/types';

const ClientDashboard: React.FC = () => {
    const router = useRouter();
    const [user, setUser] = useState<ClientUser | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for session
        const storedUser = localStorage.getItem('villas_client_user');
        if (!storedUser) {
            router.push('/cliente/login');
            return;
        }
        setUser(JSON.parse(storedUser));
        setLoading(false);
    }, [router]);

    if (loading || !user) return null;

    // Filter data for the logged user
    const activeRentals = RENTALS.filter(r => r.clientCpf === user.cpf && r.status === 'Ativa');
    const myFinancials = FINANCIAL_RECORDS.filter(f => f.clientId === user.id);
    const pendingFinancials = myFinancials.filter(f => f.status === 'Pendente' || f.status === 'Atrasado');

    const handleLogout = () => {
        localStorage.removeItem('villas_client_user');
        router.push('/cliente/login');
    };

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
                        <p className="text-xs text-gray-500 font-medium leading-none">Bem-vindo,</p>
                        <h2 className="text-[#A32A2A] text-lg font-black uppercase font-logo leading-none mt-1">{user.name.split(' ')[0]}</h2>
                    </div>
                    <button onClick={handleLogout} className="p-2 rounded-full hover:bg-gray-100 transition-colors text-slate-400 hover:text-red-600">
                        <span className="material-symbols-outlined">logout</span>
                    </button>
                </header>

                <div className="px-5 mb-6 mt-4">
                    {activeRentals.length > 0 ? (
                        activeRentals.map(rental => {
                            const vehicle = VEHICLES.find(v => v.id === rental.vehicleId);
                            return (
                                <div key={rental.id} className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm mb-4">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-wide border border-green-100">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                                Locação Ativa
                                            </span>
                                            <h3 className="text-gray-900 text-xl font-bold mt-2.5">{rental.vehicleName}</h3>
                                            <p className="text-gray-500 text-sm">Placa: {rental.vehiclePlate}</p>
                                        </div>
                                    </div>
                                    <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-gray-50">
                                        {vehicle && <Image fill src={vehicle.image} className="object-contain" alt="Car" />}
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-gray-50 border border-gray-100">
                                            <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-1">Devolução</span>
                                            <span className="text-base font-bold text-gray-900">{new Date(rental.endDate).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })}</span>
                                        </div>
                                        <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-gray-50 border border-gray-100">
                                            <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-1">Valor Total</span>
                                            <span className="text-base font-bold text-gray-900">R$ {rental.totalValue.toLocaleString('pt-BR')}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm text-center">
                            <span className="material-symbols-outlined text-4xl text-gray-300 mb-2">no_crash</span>
                            <h3 className="text-gray-900 font-bold">Nenhuma locação ativa</h3>
                            <p className="text-sm text-gray-500 mt-1">Você não possui veículos alugados no momento.</p>
                            <Link href="/catalogo" className="mt-4 inline-block text-primary font-bold text-sm hover:underline">Ver Catálogo</Link>
                        </div>
                    )}
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
                    <h3 className="font-bold text-lg mb-4 flex items-center justify-between">
                        Financeiro
                        {pendingFinancials.length > 0 && <span className="bg-red-100 text-red-600 text-[10px] px-2 py-0.5 rounded-full">{pendingFinancials.length} pendentes</span>}
                    </h3>

                    {myFinancials.length > 0 ? (
                        <div className="flex flex-col gap-3">
                            {myFinancials.map(record => (
                                <div key={record.id} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${record.status === 'Pago' ? 'bg-green-50 text-green-600' : 'bg-amber-50 text-amber-600'}`}>
                                            <span className="material-symbols-outlined">{record.type === 'Fatura' ? 'receipt_long' : 'barcode'}</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-slate-900 font-bold text-sm">{record.description}</span>
                                            <span className="text-[10px] text-gray-400">Vence em {new Date(record.dueDate).toLocaleDateString('pt-BR')}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="font-bold text-slate-900">R$ {record.value}</span>
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${record.status === 'Pago' ? 'bg-green-100 text-green-700' :
                                                record.status === 'Atrasado' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                                            }`}>
                                            {record.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="p-4 bg-white rounded-2xl border border-gray-100 text-center text-sm text-gray-500">
                            Nenhum registro financeiro encontrado.
                        </div>
                    )}
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
                                <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-900 font-bold">Faturas</span>
                                <span className="text-[10px] text-gray-400">Ver todas</span>
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
