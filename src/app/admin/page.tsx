
'use client';

import React from 'react';
import { INSPECTIONS, VEHICLES } from '@/constants/mock-data';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Link from 'next/link';

const mockChartData = [
    { name: 'Seg', vistorias: 8 },
    { name: 'Ter', vistorias: 12 },
    { name: 'Qua', vistorias: 15 },
    { name: 'Qui', vistorias: 10 },
    { name: 'Sex', vistorias: 18 },
    { name: 'Sáb', vistorias: 5 },
    { name: 'Dom', vistorias: 2 },
];

const AdminDashboard: React.FC = () => {
    const stats = [
        { label: 'Vistorias Hoje', value: '12', trend: '+12%', color: 'primary' },
        { label: 'Frota Ativa', value: '45/50', trend: '+2%', color: 'blue' },
        { label: 'Em Manutenção', value: '5', trend: 'Estável', color: 'amber' },
        { label: 'Faturamento (Mês)', value: 'R$ 124k', trend: '+8%', color: 'emerald' },
    ];

    return (
        <div className="flex flex-col h-full bg-[#f6f6f8]">
            {/* Mobile Action Bar */}
            <div className="md:hidden p-4 bg-white border-b border-gray-200 sticky top-0 z-10 space-y-3">
                <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                    <input className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary outline-none" placeholder="Buscar veículo..." />
                </div>
                <button className="w-full bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-primary-hover shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                    Nova Vistoria
                </button>
            </div>

            {/* Desktop Header */}
            <header className="hidden md:flex h-16 px-8 items-center justify-between bg-white border-b border-gray-200 sticky top-0 z-10">
                <h2 className="text-lg font-bold text-slate-900">Visão Geral</h2>
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                        <input className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg text-sm w-64 focus:ring-2 focus:ring-primary outline-none" placeholder="Buscar veículo..." />
                    </div>
                    <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-primary-hover shadow-sm">
                        <span className="material-symbols-outlined text-[20px]">add</span>
                        Nova Vistoria
                    </button>
                </div>
            </header>

            <div className="p-4 md:p-8 space-y-6 md:space-y-8 max-w-[1400px] mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((s, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between h-40 relative overflow-hidden group hover:border-primary/30 transition-colors">
                            <div className="z-10">
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{s.label}</p>
                                <h3 className="text-3xl font-black text-slate-900 mt-2">{s.value}</h3>
                            </div>
                            <div className="flex items-center gap-1.5 z-10">
                                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">{s.trend}</span>
                                <span className="text-[10px] text-slate-400">vs. período anterior</span>
                            </div>
                            <div className="absolute -bottom-2 -right-2 opacity-5 group-hover:opacity-10 transition-opacity">
                                <span className="material-symbols-outlined text-[100px]">trending_up</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                            <h3 className="font-bold text-slate-900">Vistorias por Dia</h3>
                            <select className="text-xs border-gray-200 rounded-lg outline-none">
                                <option>Últimos 7 dias</option>
                            </select>
                        </div>
                        <div className="p-6 h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={mockChartData}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                                    <Tooltip
                                        cursor={{ fill: '#f8fafc' }}
                                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                    />
                                    <Bar dataKey="vistorias" fill="#A32A2A" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col">
                        <h3 className="font-bold text-slate-900 mb-6">Status da Frota</h3>
                        <div className="space-y-6">
                            {[
                                { label: 'Operacional', value: 42, total: 50, color: 'bg-green-500' },
                                { label: 'Manutenção', value: 5, total: 50, color: 'bg-amber-500' },
                                { label: 'Reprovado', value: 3, total: 50, color: 'bg-red-500' },
                            ].map((item, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="font-medium text-slate-600">{item.label}</span>
                                        <span className="font-bold text-slate-900">{item.value}</span>
                                    </div>
                                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full ${item.color}`}
                                            style={{ width: `${(item.value / item.total) * 100}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-auto pt-6">
                            <button className="w-full py-2.5 bg-gray-50 text-primary text-sm font-bold rounded-lg hover:bg-red-50 transition-colors">
                                Ver Relatório Detalhado
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                        <h3 className="font-bold text-slate-900">Vistorias Recentes</h3>
                        <Link href="/admin/frota" className="text-sm font-bold text-primary hover:underline">Ver tudo</Link>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-50/50 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                                    <th className="px-4 md:px-6 py-4">Data</th>
                                    <th className="px-4 md:px-6 py-4">Veículo</th>
                                    <th className="px-4 md:px-6 py-4 text-center">Status</th>
                                    <th className="hidden sm:table-cell px-6 py-4">Inspetor</th>
                                    <th className="px-4 md:px-6 py-4 text-right">Ação</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {INSPECTIONS.map((ins, i) => (
                                    <tr key={i} className="hover:bg-gray-50 transition-colors group">
                                        <td className="px-4 md:px-6 py-4 text-sm text-slate-600">{ins.date}</td>
                                        <td className="px-4 md:px-6 py-4 text-sm font-bold text-slate-900">{ins.vehicle}</td>
                                        <td className="px-4 md:px-6 py-4 text-center">
                                            <span className={`inline-flex px-2 py-1 rounded-full text-[10px] font-bold uppercase ${ins.status === 'Aprovado' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                                }`}>
                                                {ins.status}
                                            </span>
                                        </td>
                                        <td className="hidden sm:table-cell px-6 py-4 text-sm text-slate-500">{ins.inspector}</td>
                                        <td className="px-4 md:px-6 py-4 text-right">
                                            <button className="p-1 hover:text-primary"><span className="material-symbols-outlined text-lg">visibility</span></button>
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

export default AdminDashboard;
