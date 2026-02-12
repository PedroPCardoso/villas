
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CLIENTS } from '@/constants/mock-data';

export default function ClientLoginPage() {
    const router = useRouter();
    const [cpf, setCpf] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const formatCPF = (value: string) => {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1');
    };

    const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCpf(formatCPF(e.target.value));
        setError('');
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Simulate API delay
        setTimeout(() => {
            const user = CLIENTS.find(c => c.cpf === cpf);

            if (user) {
                // Save to localStorage to simulate session
                localStorage.setItem('villas_client_user', JSON.stringify(user));
                router.push('/cliente');
            } else {
                setError('CPF não encontrado. Verifique os dados e tente novamente.');
                setLoading(false);
            }
        }, 800);
    };

    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen"></div>
            </div>

            <div className="bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl relative z-10 border border-white/10">
                <div className="flex flex-col items-center mb-8">
                    <div className="w-16 h-16 relative mb-4">
                        <Image
                            src="/assets/logo.png"
                            alt="Villas Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <h1 className="text-2xl font-black text-slate-900 text-center">Área do Cliente</h1>
                    <p className="text-slate-500 text-sm text-center mt-2">Informe seu CPF para acessar suas locações e faturas.</p>
                </div>

                <form onSubmit={handleLogin} className="flex flex-col gap-5">
                    <div>
                        <label className="text-xs font-bold uppercase text-slate-400 mb-2 block ml-1">CPF</label>
                        <div className="relative group">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">id_card</span>
                            <input
                                type="text"
                                value={cpf}
                                onChange={handleCpfChange}
                                placeholder="000.000.000-00"
                                maxLength={14}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 font-mono text-slate-900 placeholder:text-slate-400 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-bold"
                            />
                        </div>
                    </div>

                    {error && (
                        <div className="bg-red-50 text-red-600 text-xs font-bold px-4 py-3 rounded-xl flex items-center gap-2 border border-red-100 animate-shake">
                            <span className="material-symbols-outlined text-sm">error</span>
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading || cpf.length < 14}
                        className="bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 hover:bg-primary-hover active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
                    >
                        {loading ? (
                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        ) : (
                            <>
                                <span>Acessar Painel</span>
                                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                            </>
                        )}
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-slate-100 flex justify-center">
                    <button className="text-xs font-bold text-slate-500 hover:text-primary transition-colors flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">help</span>
                        Preciso de ajuda
                    </button>
                </div>
            </div>

            <p className="absolute bottom-6 text-slate-500 text-xs text-center w-full opacity-50">
                &copy; 2024 Villas Locações. Todos os direitos reservados.
            </p>
        </div>
    );
}
