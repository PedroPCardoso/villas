'use client';

import React, { useState, useEffect } from 'react';
import { RENTALS, VEHICLES } from '@/constants/mock-data';
import Image from 'next/image';

// Mock users for the dropdown
const MOCK_USERS = [
    { id: '1', name: 'João Silva', email: 'joao.silva@vilas.com', phone: '(11) 99999-1111', role: 'Motorista' },
    { id: '3', name: 'Pedro Santos', email: 'pedro.santos@vilas.com', phone: '(11) 99999-3333', role: 'Motorista' },
    { id: '4', name: 'Carlos Ferreira', email: 'carlos.ferreira@email.com', phone: '(11) 99999-8888', role: 'Motorista' },
    { id: '5', name: 'Ana Souza', email: 'ana.souza@email.com', phone: '(11) 98888-7777', role: 'Motorista' },
];

const RentalsPage: React.FC = () => {
    const [showForm, setShowForm] = useState(false);
    const [userType, setUserType] = useState<'existing' | 'new'>('existing');
    const [formData, setFormData] = useState({
        vehicleId: '',
        userId: '',
        clientName: '',
        clientEmail: '',
        clientPhone: '',
        startDate: '',
        endDate: '',
        dailyRate: 0,
        notifyBeforeEnd: false,
        notifyDaysBefore: 3,
        notes: ''
    });

    // Calculate summary stats
    const activeRentals = RENTALS.filter(r => r.status === 'Ativa').length;
    const finishedThisMonth = RENTALS.filter(r => r.status === 'Finalizada').length;
    const totalRevenue = RENTALS
        .filter(r => r.status === 'Finalizada' || r.status === 'Ativa')
        .reduce((sum, r) => sum + r.totalValue, 0);
    const expiringSoon = RENTALS.filter(r => {
        if (r.status !== 'Ativa' || !r.notifyBeforeEnd) return false;
        const endDate = new Date(r.endDate);
        const today = new Date();
        const daysUntilEnd = Math.ceil((endDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
        return daysUntilEnd <= r.notifyDaysBefore && daysUntilEnd >= 0;
    }).length;

    // Calculate total value when dates change
    const calculateTotal = () => {
        if (!formData.startDate || !formData.endDate || !formData.dailyRate) return 0;
        const start = new Date(formData.startDate);
        const end = new Date(formData.endDate);
        const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
        return days > 0 ? days * formData.dailyRate : 0;
    };

    const totalValue = calculateTotal();

    return (
        <div className="flex flex-col h-full bg-[#f6f6f8]">
            <header className="h-16 px-8 flex items-center justify-between bg-white border-b border-gray-200 sticky top-0 z-10">
                <h2 className="text-lg font-bold text-slate-900">Gestão de Locações</h2>
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-primary-hover shadow-lg shadow-red-500/20 transition-all"
                >
                    <span className="material-symbols-outlined text-[20px]">
                        {showForm ? 'close' : 'add_circle'}
                    </span>
                    {showForm ? 'Fechar' : 'Nova Locação'}
                </button>
            </header>

            <div className="p-8 space-y-8 max-w-[1400px] mx-auto w-full">
                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Locações Ativas</p>
                        <h3 className="text-3xl font-black text-slate-900 mt-2">{activeRentals}</h3>
                        <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full mt-3 inline-block">Em andamento</span>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Finalizadas (Mês)</p>
                        <h3 className="text-3xl font-black text-slate-900 mt-2">{finishedThisMonth}</h3>
                        <span className="text-xs text-slate-400">Concluídas com sucesso</span>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Receita (Mês)</p>
                        <h3 className="text-3xl font-black text-slate-900 mt-2">R$ {(totalRevenue / 1000).toFixed(1)}k</h3>
                        <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full mt-3 inline-block">+12%</span>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Vencendo em Breve</p>
                        <h3 className="text-3xl font-black text-slate-900 mt-2">{expiringSoon}</h3>
                        <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full mt-3 inline-block">Notificação ativa</span>
                    </div>
                </div>

                {/* New Rental Form */}
                {showForm && (
                    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                        <div className="flex flex-col gap-1 mb-6">
                            <h3 className="font-bold text-lg flex items-center gap-2 text-slate-900">
                                <span className="material-symbols-outlined text-primary">car_rental</span>
                                Nova Locação
                            </h3>
                            <p className="text-xs text-slate-400">Preencha os dados abaixo para registrar uma nova locação.</p>
                        </div>
                        <form className="grid grid-cols-1 md:grid-cols-12 gap-6">
                            <div className="md:col-span-12 flex gap-4 border-b border-gray-100 pb-4 mb-2">
                                <label className="flex items-center gap-2 text-sm font-bold text-slate-700 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="userType"
                                        checked={userType === 'existing'}
                                        onChange={() => setUserType('existing')}
                                        className="text-primary focus:ring-primary"
                                    />
                                    Cliente Existente
                                </label>
                                <label className="flex items-center gap-2 text-sm font-bold text-slate-700 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="userType"
                                        checked={userType === 'new'}
                                        onChange={() => {
                                            setUserType('new');
                                            setFormData(prev => ({ ...prev, userId: '', clientName: '', clientEmail: '', clientPhone: '' }));
                                        }}
                                        className="text-primary focus:ring-primary"
                                    />
                                    Novo Cliente
                                </label>
                            </div>

                            <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-6">
                                <div className="md:col-span-6">
                                    <label className="text-xs font-bold uppercase text-slate-400 mb-2 block">Selecionar Veículo</label>
                                    <select
                                        value={formData.vehicleId}
                                        onChange={(e) => {
                                            const vehicle = VEHICLES.find(v => v.id === e.target.value);
                                            setFormData({
                                                ...formData,
                                                vehicleId: e.target.value,
                                                dailyRate: vehicle?.price || 0
                                            });
                                        }}
                                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm outline-none focus:ring-2 focus:ring-primary"
                                    >
                                        <option value="">Selecione um veículo...</option>
                                        {VEHICLES.filter(v => v.status === 'Disponível').map(v => (
                                            <option key={v.id} value={v.id}>
                                                {v.name} - {v.plate} (R$ {v.price}/dia)
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {userType === 'existing' ? (
                                    <div className="md:col-span-6">
                                        <label className="text-xs font-bold uppercase text-slate-400 mb-2 block">Selecionar Motorista</label>
                                        <select
                                            value={formData.userId}
                                            onChange={(e) => {
                                                const user = MOCK_USERS.find(u => u.id === e.target.value);
                                                if (user) {
                                                    setFormData({
                                                        ...formData,
                                                        userId: user.id,
                                                        clientName: user.name,
                                                        clientEmail: user.email,
                                                        clientPhone: user.phone
                                                    });
                                                } else {
                                                    setFormData(prev => ({ ...prev, userId: '', clientName: '', clientEmail: '', clientPhone: '' }));
                                                }
                                            }}
                                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm outline-none focus:ring-2 focus:ring-primary"
                                        >
                                            <option value="">Selecione um motorista...</option>
                                            {MOCK_USERS.map(u => (
                                                <option key={u.id} value={u.id}>
                                                    {u.name} - {u.role}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                ) : (
                                    <div className="md:col-span-6">
                                        <label className="text-xs font-bold uppercase text-slate-400 mb-2 block">Nome do Cliente</label>
                                        <input
                                            value={formData.clientName}
                                            onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm outline-none focus:ring-2 focus:ring-primary"
                                            placeholder="Nome completo"
                                        />
                                    </div>
                                )}
                            </div>

                            {(userType === 'new' || formData.userId) && (
                                <>
                                    <div className="md:col-span-6">
                                        <label className="text-xs font-bold uppercase text-slate-400 mb-2 block">Email</label>
                                        <input
                                            type="email"
                                            value={formData.clientEmail}
                                            readOnly={userType === 'existing'}
                                            onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                                            className={`w-full px-4 py-2.5 border border-gray-200 rounded-full text-sm outline-none focus:ring-2 focus:ring-primary ${userType === 'existing' ? 'bg-gray-100 text-slate-500' : 'bg-gray-50'}`}
                                            placeholder="email@exemplo.com"
                                        />
                                    </div>
                                    <div className="md:col-span-6">
                                        <label className="text-xs font-bold uppercase text-slate-400 mb-2 block">Telefone</label>
                                        <input
                                            value={formData.clientPhone}
                                            readOnly={userType === 'existing'}
                                            onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
                                            className={`w-full px-4 py-2.5 border border-gray-200 rounded-full text-sm outline-none focus:ring-2 focus:ring-primary ${userType === 'existing' ? 'bg-gray-100 text-slate-500' : 'bg-gray-50'}`}
                                            placeholder="(11) 99999-9999"
                                        />
                                    </div>
                                </>
                            )}

                            <div className="md:col-span-3">
                                <label className="text-xs font-bold uppercase text-slate-400 mb-2 block">Data Início</label>
                                <input
                                    type="date"
                                    value={formData.startDate}
                                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div className="md:col-span-3">
                                <label className="text-xs font-bold uppercase text-slate-400 mb-2 block">Data Término</label>
                                <input
                                    type="date"
                                    value={formData.endDate}
                                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div className="md:col-span-3">
                                <label className="text-xs font-bold uppercase text-slate-400 mb-2 block">Valor Diário (R$)</label>
                                <input
                                    type="number"
                                    value={formData.dailyRate}
                                    onChange={(e) => setFormData({ ...formData, dailyRate: Number(e.target.value) })}
                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="0.00"
                                />
                            </div>
                            <div className="md:col-span-3">
                                <label className="text-xs font-bold uppercase text-slate-400 mb-2 block">Valor Total</label>
                                <div className="w-full px-4 py-2.5 bg-slate-100 border border-gray-200 rounded-full text-sm font-bold text-slate-900">
                                    R$ {totalValue.toFixed(2)}
                                </div>
                            </div>
                            <div className="md:col-span-6">
                                <label className="text-xs font-bold uppercase text-slate-400 mb-2 block flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={formData.notifyBeforeEnd}
                                        onChange={(e) => setFormData({ ...formData, notifyBeforeEnd: e.target.checked })}
                                        className="rounded text-primary focus:ring-primary"
                                    />
                                    Notificar antes do vencimento
                                </label>
                                {formData.notifyBeforeEnd && (
                                    <input
                                        type="number"
                                        value={formData.notifyDaysBefore}
                                        onChange={(e) => setFormData({ ...formData, notifyDaysBefore: Number(e.target.value) })}
                                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm outline-none focus:ring-2 focus:ring-primary mt-2"
                                        placeholder="Dias antes do vencimento"
                                        min="1"
                                    />
                                )}
                            </div>
                            <div className="md:col-span-6">
                                <label className="text-xs font-bold uppercase text-slate-400 mb-2 block">Observações</label>
                                <textarea
                                    value={formData.notes}
                                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                    rows={3}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Informações adicionais..."
                                />
                            </div>
                            <div className="md:col-span-12 flex justify-end">
                                <button
                                    type="button"
                                    className="bg-primary text-white font-bold px-8 py-2.5 rounded-full shadow-lg shadow-red-900/20 hover:bg-primary-hover transition-all"
                                >
                                    Salvar Locação
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Rentals Table */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                        <h3 className="font-bold text-slate-900">Todas as Locações</h3>
                        <div className="flex gap-2">
                            <button className="px-3 py-1.5 text-xs font-bold border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">Filtrar</button>
                            <button className="px-3 py-1.5 text-xs font-bold border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">Exportar</button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-50/50 text-[10px] uppercase font-bold text-slate-400 tracking-wider border-b border-gray-100">
                                    <th className="px-6 py-4">Veículo</th>
                                    <th className="px-6 py-4">Cliente</th>
                                    <th className="px-6 py-4">Período</th>
                                    <th className="px-6 py-4">Valor Total</th>
                                    <th className="px-6 py-4 text-center">Status</th>
                                    <th className="px-6 py-4 text-center">Notificação</th>
                                    <th className="px-6 py-4 text-right">Ações</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {RENTALS.map((rental) => {
                                    const vehicle = VEHICLES.find(v => v.id === rental.vehicleId);
                                    return (
                                        <tr key={rental.id} className="hover:bg-gray-50 transition-colors group">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-100 relative">
                                                        {vehicle && (
                                                            <Image
                                                                src={vehicle.image}
                                                                alt={rental.vehicleName}
                                                                fill
                                                                className="object-cover"
                                                            />
                                                        )}
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-sm font-bold text-slate-900">{rental.vehicleName}</span>
                                                        <span className="text-[10px] font-mono bg-slate-100 px-1.5 py-0.5 rounded w-fit mt-1">{rental.vehiclePlate}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-bold text-slate-900">{rental.clientName}</span>
                                                    <span className="text-xs text-slate-400">{rental.clientEmail}</span>
                                                    <span className="text-xs text-slate-400">{rental.clientPhone}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex flex-col text-sm text-slate-600">
                                                    <span>{new Date(rental.startDate).toLocaleDateString('pt-BR')}</span>
                                                    <span className="text-slate-400">→</span>
                                                    <span>{new Date(rental.endDate).toLocaleDateString('pt-BR')}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-sm font-bold text-slate-900">R$ {rental.totalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                                                <p className="text-[10px] text-slate-400">R$ {rental.dailyRate}/dia</p>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase ${rental.status === 'Ativa' ? 'bg-green-100 text-green-700' :
                                                    rental.status === 'Finalizada' ? 'bg-gray-100 text-gray-700' :
                                                        rental.status === 'Atrasada' ? 'bg-red-100 text-red-700' :
                                                            'bg-amber-100 text-amber-700'
                                                    }`}>
                                                    <span className={`w-1.5 h-1.5 rounded-full ${rental.status === 'Ativa' ? 'bg-green-500' :
                                                        rental.status === 'Finalizada' ? 'bg-gray-500' :
                                                            rental.status === 'Atrasada' ? 'bg-red-500' :
                                                                'bg-amber-500'
                                                        }`} />
                                                    {rental.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                {rental.notifyBeforeEnd ? (
                                                    <div className="flex flex-col items-center">
                                                        <span className="material-symbols-outlined text-amber-500 text-[20px]">notifications_active</span>
                                                        <span className="text-[10px] text-slate-400 mt-1">{rental.notifyDaysBefore}d antes</span>
                                                    </div>
                                                ) : (
                                                    <span className="material-symbols-outlined text-slate-300 text-[20px]">notifications_off</span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button className="p-1.5 hover:bg-red-50 hover:text-primary rounded-lg transition-colors" title="Visualizar">
                                                        <span className="material-symbols-outlined text-[18px]">visibility</span>
                                                    </button>
                                                    <button className="p-1.5 hover:bg-red-50 hover:text-primary rounded-lg transition-colors" title="Editar">
                                                        <span className="material-symbols-outlined text-[18px]">edit</span>
                                                    </button>
                                                    {rental.status === 'Ativa' && (
                                                        <button className="p-1.5 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors" title="Finalizar">
                                                            <span className="material-symbols-outlined text-[18px]">check_circle</span>
                                                        </button>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RentalsPage;
