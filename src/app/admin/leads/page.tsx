
'use client';

import React from 'react';
import { LEADS } from '@/constants/mock-data';

export default function LeadsPage() {
    return (
        <div className="flex-1 overflow-auto bg-[#f6f6f8]">
            {/* Mobile Action Bar */}
            <div className="md:hidden p-4 bg-white border-b border-gray-200 sticky top-0 z-10 space-y-3">
                <button className="w-full bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-primary-hover shadow-lg shadow-red-500/20 transition-all">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                    Novo Lead
                </button>
            </div>

            {/* Desktop Header */}
            <header className="hidden md:flex h-16 px-8 items-center justify-between bg-white border-b border-gray-200 sticky top-0 z-10">
                <div>
                    <h2 className="text-lg font-bold text-slate-900">Leads</h2>
                    <p className="text-xs text-slate-500 mt-0.5">Gerencie os contatos recebidos pelo site</p>
                </div>
                <button className="bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-primary-hover shadow-lg shadow-red-500/20 transition-all">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                    Novo Lead
                </button>
            </header>

            <div className="p-4 md:p-8 space-y-6 max-w-[1400px] mx-auto w-full">
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-gray-100 bg-gray-50/50">
                                <th className="p-4 text-xs font-bold text-slate-500 uppercase">Nome</th>
                                <th className="hidden md:table-cell p-4 text-xs font-bold text-slate-500 uppercase">Contato</th>
                                <th className="hidden lg:table-cell p-4 text-xs font-bold text-slate-500 uppercase">Mensagem</th>
                                <th className="p-4 text-xs font-bold text-slate-500 uppercase">Status</th>
                                <th className="p-4 text-xs font-bold text-slate-500 uppercase text-right">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {LEADS.map((lead) => (
                                <tr key={lead.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors group">
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold shrink-0">
                                                {lead.name.charAt(0)}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-bold text-slate-900">{lead.name}</span>
                                                <span className="text-xs text-slate-400">{lead.date}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="hidden md:table-cell p-4">
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
                                                <span className="material-symbols-outlined text-[14px]">mail</span>
                                                {lead.email}
                                            </div>
                                            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
                                                <span className="material-symbols-outlined text-[14px]">phone</span>
                                                {lead.phone}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="hidden lg:table-cell p-4">
                                        <p className="text-sm text-slate-600 truncate max-w-[200px]" title={lead.message}>
                                            {lead.message}
                                        </p>
                                    </td>
                                    <td className="p-4">
                                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border ${lead.status === 'Novo' ? 'bg-blue-50 text-blue-700 border-blue-100' :
                                            lead.status === 'Em Contato' ? 'bg-amber-50 text-amber-700 border-amber-100' :
                                                lead.status === 'Convertido' ? 'bg-green-50 text-green-700 border-green-100' :
                                                    'bg-gray-50 text-gray-600 border-gray-100'
                                            }`}>
                                            {lead.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="p-2 text-green-600 bg-green-50 rounded-lg hover:bg-green-100" title="WhatsApp">
                                                <span className="material-symbols-outlined text-[18px]">chat</span>
                                            </button>
                                            <button className="p-2 text-slate-500 bg-gray-50 rounded-lg hover:bg-gray-100" title="Detalhes">
                                                <span className="material-symbols-outlined text-[18px]">visibility</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
                    <p className="text-sm text-slate-500">Mostrando 1-3 de 15 leads</p>
                    <div className="flex gap-1">
                        <button className="px-3 py-1 bg-primary text-white rounded-lg text-sm font-bold">1</button>
                        <button className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-sm hover:bg-gray-50 transition-colors">2</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
