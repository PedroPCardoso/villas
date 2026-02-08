
'use client';

import React from 'react';
import { LEADS } from '@/constants/mock-data';

export default function LeadsPage() {
    return (
        <div className="flex-1 p-8 overflow-auto">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Leads</h1>
                    <p className="text-slate-500">Gerencie os contatos recebidos pelo site.</p>
                </div>
                <button className="bg-primary text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-red-700 transition-colors">
                    <span className="material-symbols-outlined">add</span>
                    Novo Lead
                </button>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-gray-100 bg-gray-50/50">
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase">Nome</th>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase">Contato</th>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase">Mensagem</th>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase">Status</th>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase text-right">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {LEADS.map((lead) => (
                            <tr key={lead.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors group">
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold">
                                            {lead.name.charAt(0)}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-bold text-slate-900">{lead.name}</span>
                                            <span className="text-xs text-slate-400">{lead.date}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4">
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
                                <td className="p-4">
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
                                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
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
        </div>
    );
}
