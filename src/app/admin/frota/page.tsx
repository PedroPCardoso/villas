
'use client';

import React from 'react';
import { VEHICLES } from '@/constants/mock-data';
import Image from 'next/image';

const FleetManagement: React.FC = () => {
    return (
        <div className="flex flex-col h-full bg-[#f6f6f8]">
            <header className="h-16 px-8 flex items-center justify-between bg-white border-b border-gray-200 sticky top-0 z-10">
                <h2 className="text-lg font-bold text-slate-900">Gestão de Frota</h2>
                <div className="flex items-center gap-4">
                    <button className="bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-primary-hover shadow-lg shadow-red-500/20 transition-all">
                        <span className="material-symbols-outlined text-[20px]">add_circle</span>
                        Cadastrar Veículo
                    </button>
                </div>
            </header>

            <div className="p-8 space-y-6 max-w-[1400px] mx-auto w-full">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="flex flex-1 gap-3 w-full">
                        <div className="relative flex-1 max-w-md">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                            <input
                                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                placeholder="Buscar por placa, modelo ou código..."
                            />
                        </div>
                        <select className="bg-white border-gray-200 rounded-xl text-sm px-4 pr-10 appearance-none outline-none focus:ring-2 focus:ring-primary cursor-pointer">
                            <option>Todas Categorias</option>
                            <option>Sedan</option>
                            <option>SUV</option>
                        </select>
                    </div>
                    <div className="flex gap-2">
                        <button className="p-2.5 bg-white border border-gray-200 rounded-xl text-slate-500 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">download</span>
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-50/50 text-[10px] uppercase font-bold text-slate-400 tracking-wider border-b border-gray-100">
                                    <th className="px-6 py-4 w-12"><input type="checkbox" className="rounded text-primary focus:ring-primary cursor-pointer" /></th>
                                    <th className="px-6 py-4">Veículo</th>
                                    <th className="px-6 py-4">Categoria</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4">Última Vistoria</th>
                                    <th className="px-6 py-4">Km Atual</th>
                                    <th className="px-6 py-4 text-right">Ações</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {VEHICLES.map((v) => (
                                    <tr key={v.id} className="hover:bg-gray-50 transition-colors group">
                                        <td className="px-6 py-4"><input type="checkbox" className="rounded text-primary focus:ring-primary cursor-pointer" /></td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-100 relative">
                                                    <Image src={v.image} alt={v.name} fill className="object-cover" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-bold text-slate-900">{v.name}</span>
                                                    <span className="text-[10px] font-mono bg-slate-100 px-1.5 py-0.5 rounded w-fit mt-1">{v.plate}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-600">{v.category}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase ${v.status === 'Disponível' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                                }`}>
                                                <span className={`w-1.5 h-1.5 rounded-full ${v.status === 'Disponível' ? 'bg-green-500' : 'bg-red-500'}`} />
                                                {v.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-sm text-slate-600">{v.lastInspection}</p>
                                            <p className="text-[10px] text-slate-400">Por: João Silva</p>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-mono text-slate-600">{v.km}</td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="p-1.5 hover:bg-red-50 hover:text-primary rounded-lg transition-colors"><span className="material-symbols-outlined text-[18px]">edit</span></button>
                                                <button className="p-1.5 hover:bg-red-50 hover:text-primary rounded-lg transition-colors"><span className="material-symbols-outlined text-[18px]">visibility</span></button>
                                                <button className="p-1.5 hover:bg-red-50 hover:text-primary rounded-lg transition-colors"><span className="material-symbols-outlined text-[18px]">delete</span></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
                        <p className="text-sm text-slate-500">Mostrando 1-3 de 45 veículos</p>
                        <div className="flex gap-1">
                            <button className="px-3 py-1 bg-primary text-white rounded-lg text-sm font-bold">1</button>
                            <button className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-sm hover:bg-gray-50 transition-colors">2</button>
                            <button className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-sm hover:bg-gray-50 transition-colors">3</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FleetManagement;
