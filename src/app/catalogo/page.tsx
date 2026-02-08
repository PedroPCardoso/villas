
'use client';

import React from 'react';
import { VEHICLES } from '@/constants/mock-data';
import Link from 'next/link';
import Image from 'next/image';

const VehicleCatalog: React.FC = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen flex flex-col">
            <header className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-200 bg-white/80 backdrop-blur-md px-6 md:px-10 py-4">
                <Link href="/" className="flex items-center gap-3 cursor-pointer">
                    <div className="h-12 w-12 relative">
                        <Image
                            alt="Villas Logo"
                            fill
                            className="object-contain"
                            src="/assets/logo.png"
                        />
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="text-2xl font-black tracking-tighter uppercase text-primary font-logo leading-none">Villas</span>
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-600">Locações</span>
                    </div>
                </Link>
                <div className="flex gap-3">
                    <Link href="/cliente" className="flex h-10 items-center px-4 text-sm font-bold border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">Entrar</Link>
                    <button className="flex h-10 items-center px-4 text-sm font-bold bg-primary text-white rounded-lg shadow-lg shadow-red-900/20 hover:bg-primary-hover transition-all">Cadastrar</button>
                </div>
            </header>

            <main className="flex-1 max-w-[1440px] mx-auto px-6 py-12 md:px-10 w-full">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-10">
                    <div className="max-w-2xl">
                        <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-4 tracking-tight">Encontre o veículo ideal para sua jornada</h1>
                        <p className="text-slate-500 text-lg">Explore nossa frota diversificada com as melhores tarifas do mercado.</p>
                    </div>
                    <div className="hidden lg:flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        <div className="size-12 rounded-full bg-green-100 flex items-center justify-center text-green-600"><span className="material-symbols-outlined">verified</span></div>
                        <div>
                            <p className="text-xs text-gray-500 font-medium">Veículos verificados</p>
                            <p className="text-lg font-bold text-slate-900">100% Inspecionados</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-8 sticky top-20 z-40">
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="flex-1 relative">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                            <input className="w-full rounded-xl border-gray-200 bg-gray-50 py-3 pl-12 pr-4 text-sm outline-none focus:border-primary transition-colors" placeholder="Buscar por modelo, marca..." />
                        </div>
                        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                            {['Todos', 'Sedan', 'SUV', 'Compacto', 'Utilitário', 'Luxo'].map((cat) => (
                                <button key={cat} className={`shrink-0 px-5 py-3 rounded-xl text-sm font-bold transition-all ${cat === 'Todos' ? 'bg-primary text-white' : 'bg-gray-100 text-slate-600 hover:bg-gray-200'}`}>
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {VEHICLES.concat(VEHICLES).map((v, i) => (
                        <div key={i} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
                            <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                                <Image src={v.image} alt={v.name} fill className="object-cover transition-transform group-hover:scale-105 duration-500" />
                                <div className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">{v.category}</div>
                            </div>
                            <div className="p-5 flex-1 flex flex-col">
                                <h3 className="text-lg font-bold text-slate-900 mb-4">{v.name}</h3>
                                <div className="flex flex-wrap gap-2 text-[10px] text-slate-500 mb-6">
                                    <span className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-md"><span className="material-symbols-outlined text-sm">local_gas_station</span> {v.specs.fuel}</span>
                                    <span className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-md"><span className="material-symbols-outlined text-sm">settings</span> {v.specs.trans}</span>
                                    <span className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-md"><span className="material-symbols-outlined text-sm">group</span> {v.specs.seats}</span>
                                </div>
                                <div className="mt-auto pt-4 border-t border-gray-50 flex justify-between items-center">
                                    <div>
                                        <p className="text-[10px] text-gray-400 font-medium">Diária a partir de</p>
                                        <p className="text-xl font-black text-primary">R$ {v.price}<span className="text-sm font-normal text-slate-400">,00</span></p>
                                    </div>
                                    <button className="bg-primary text-white font-bold px-4 py-2 rounded-lg text-sm hover:bg-primary-hover transition-colors">Alugar</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default VehicleCatalog;
