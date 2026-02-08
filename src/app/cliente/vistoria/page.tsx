
'use client';

import React from 'react';
import Link from 'next/link';

const InspectionFlow: React.FC = () => {
    return (
        <div className="flex flex-col h-full bg-[#f8f9fa] overflow-y-auto hide-scrollbar pb-20">
            <header className="flex items-center justify-between bg-white px-6 py-4 sticky top-0 z-10 border-b border-gray-100">
                <Link href="/cliente" className="flex items-center gap-2 text-slate-400">
                    <span className="material-symbols-outlined">arrow_back</span>
                </Link>
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">Vistoria Semanal</h2>
                <div className="w-6"></div>
            </header>

            <div className="p-5 flex flex-col gap-6">
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                        <p className="text-xs font-bold text-slate-500 uppercase">Etapa 2 de 3</p>
                        <span className="text-[10px] font-bold text-primary bg-red-50 px-2 py-0.5 rounded-full">Fotos do Veículo</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-2/3 rounded-full"></div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <label className="text-xs font-bold text-slate-500 uppercase block mb-2">Quilometragem (KM)</label>
                    <div className="relative">
                        <input
                            className="w-full bg-gray-50 border-gray-200 rounded-xl py-3 px-4 font-bold text-xl focus:ring-1 focus:ring-primary outline-none"
                            placeholder="00.000"
                            type="number"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs font-bold">KM</span>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="font-bold text-slate-900 text-sm">Fotos Obrigatórias</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { label: 'Frente', status: 'OK', filled: true },
                            { label: 'Traseira', status: 'Pendente', filled: false },
                            { label: 'Lateral Esq.', status: 'Pendente', filled: false },
                            { label: 'Lateral Dir.', status: 'Pendente', filled: false },
                            { label: 'Painel (KM)', status: 'Pendente', filled: false },
                            { label: 'Pneus', status: 'Pendente', filled: false },
                        ].map((slot, i) => (
                            <div key={i} className="flex flex-col gap-2">
                                <div className="flex justify-between items-center px-1">
                                    <span className="text-[10px] font-bold text-slate-600">{slot.label}</span>
                                    {slot.filled && <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>}
                                </div>
                                {slot.filled ? (
                                    <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-primary/20">
                                        <img src="https://picsum.photos/seed/carfront/300/300" className="w-full h-full object-cover" alt="Uploaded" />
                                        <button className="absolute top-2 right-2 bg-white/90 p-1.5 rounded-lg shadow-sm">
                                            <span className="material-symbols-outlined text-red-500 text-sm">delete</span>
                                        </button>
                                    </div>
                                ) : (
                                    <label className="aspect-square border-2 border-dashed border-gray-200 bg-gray-50 rounded-2xl flex flex-col items-center justify-center cursor-pointer active:bg-red-50 transition-colors">
                                        <span className="material-symbols-outlined text-2xl text-gray-400">add_a_photo</span>
                                        <span className="text-[8px] font-bold text-gray-400 mt-1 uppercase tracking-tight">ENVIAR</span>
                                        <input type="file" className="hidden" />
                                    </label>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-auto p-5 bg-white border-t border-gray-100 flex gap-3 sticky bottom-0 z-10">
                <button className="flex-1 py-3.5 px-4 font-bold text-slate-500 bg-gray-50 rounded-xl active:scale-95 transition-all text-sm">Pular</button>
                <button className="flex-[2] bg-primary text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-red-500/20 active:scale-95 transition-all text-sm flex items-center justify-center gap-2">
                    Continuar
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
            </div>
        </div>
    );
};

export default InspectionFlow;
