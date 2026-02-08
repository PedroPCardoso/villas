
'use client';

import React from 'react';

const BillingManagement: React.FC = () => {
    return (
        <div className="flex flex-col h-full bg-[#f6f6f8]">
            <header className="h-16 px-8 flex items-center justify-between bg-white border-b border-gray-200 sticky top-0 z-10">
                <h2 className="text-lg font-bold text-slate-900">Gestão de Cobranças</h2>
            </header>

            <div className="p-8 space-y-8 max-w-[1400px] mx-auto w-full">
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                    <div className="flex flex-col gap-1 mb-6">
                        <h3 className="font-bold text-lg flex items-center gap-2 text-slate-900">
                            <span className="material-symbols-outlined text-primary">add_circle</span>
                            Nova Cobrança
                        </h3>
                        <p className="text-xs text-slate-400">Preencha os dados abaixo para gerar um novo lançamento financeiro.</p>
                    </div>
                    <form className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                        <div className="md:col-span-6">
                            <label className="text-xs font-bold uppercase text-slate-400 mb-2 block">Selecionar Cliente</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">person_search</span>
                                <input className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border-gray-200 rounded-full text-sm outline-none focus:ring-1 focus:ring-primary" placeholder="Buscar motorista..." />
                            </div>
                        </div>
                        <div className="md:col-span-3">
                            <label className="text-xs font-bold uppercase text-slate-400 mb-2 block">Valor (R$)</label>
                            <input className="w-full px-4 py-2.5 bg-gray-50 border-gray-200 rounded-full text-sm outline-none focus:ring-1 focus:ring-primary" placeholder="0,00" />
                        </div>
                        <div className="md:col-span-3">
                            <label className="text-xs font-bold uppercase text-slate-400 mb-2 block">Vencimento</label>
                            <input type="date" className="w-full px-4 py-2.5 bg-gray-50 border-gray-200 rounded-full text-sm outline-none focus:ring-1 focus:ring-primary" />
                        </div>
                        <div className="md:col-span-8">
                            <label className="text-xs font-bold uppercase text-slate-400 mb-2 block">Código de Barras</label>
                            <textarea rows={3} className="w-full px-4 py-3 bg-gray-50 border-gray-200 rounded-2xl text-sm font-mono outline-none focus:ring-1 focus:ring-primary" placeholder="Linha digitável..." />
                        </div>
                        <div className="md:col-span-4 h-full flex flex-col justify-end">
                            <label className="text-xs font-bold uppercase text-slate-400 mb-2 block">Anexo PDF</label>
                            <div className="flex-1 min-h-[96px] border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center bg-gray-50 cursor-pointer hover:bg-red-50 transition-colors group">
                                <span className="material-symbols-outlined text-2xl text-slate-300 group-hover:text-primary transition-colors">cloud_upload</span>
                                <span className="text-[10px] font-bold text-slate-400 mt-1">PDF ATÉ 5MB</span>
                            </div>
                        </div>
                        <div className="md:col-span-12 flex justify-end">
                            <button className="bg-primary text-white font-bold px-8 py-2.5 rounded-full shadow-lg shadow-red-900/20 hover:bg-primary-hover transition-all">Salvar Cobrança</button>
                        </div>
                    </form>
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                        <h3 className="font-bold text-slate-900">Histórico de Cobranças</h3>
                        <div className="flex gap-2">
                            <button className="px-3 py-1.5 text-xs font-bold border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">Filtrar</button>
                            <button className="px-3 py-1.5 text-xs font-bold border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">Exportar</button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-gray-50 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                                <tr>
                                    <th className="px-6 py-4">Cliente</th>
                                    <th className="px-6 py-4">Vencimento</th>
                                    <th className="px-6 py-4">Valor</th>
                                    <th className="px-6 py-4 text-center">Status</th>
                                    <th className="px-6 py-4 text-right">Ações</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    { name: 'Carlos Mendes', id: '#C00129', date: '12 Out, 2023', val: 'R$ 1.250,00', status: 'Pendente' },
                                    { name: 'Ana Souza', id: '#C00142', date: '05 Out, 2023', val: 'R$ 890,50', status: 'Pago' },
                                    { name: 'Marcos Oliveira', id: '#C00089', date: '28 Set, 2023', val: 'R$ 2.400,00', status: 'Atrasado' },
                                ].map((c, i) => (
                                    <tr key={i} className="hover:bg-gray-50 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col">
                                                <span className="font-bold text-slate-900">{c.name}</span>
                                                <span className="text-[10px] text-slate-400">{c.id}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-slate-500">{c.date}</td>
                                        <td className="px-6 py-4 font-bold text-slate-900">{c.val}</td>
                                        <td className="px-6 py-4 text-center">
                                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${c.status === 'Pago' ? 'bg-green-100 text-green-700' : c.status === 'Atrasado' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                                                }`}>{c.status}</span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="text-slate-300 hover:text-primary transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BillingManagement;
