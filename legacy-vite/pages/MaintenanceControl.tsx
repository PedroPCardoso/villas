
import React from 'react';
import { AppView } from '../types';

interface MaintenanceControlProps {
  onNavigate: (view: AppView) => void;
}

const MaintenanceControl: React.FC<MaintenanceControlProps> = ({ onNavigate }) => {
  const tasks = [
    { vehicle: 'Renault Master', plate: 'XYZ-9876', problem: 'Falha no sistema de freios traseiros, barulho excessivo ao frear.', date: 'Hoje', priority: 'Imediata' },
    { vehicle: 'Ford Transit', plate: 'PQR-3456', problem: 'Vazamento de óleo detectado no motor. Luz de alerta acesa.', date: '14/10/2023', priority: 'Imediata' },
    { vehicle: 'Fiat Strada', plate: 'MNO-9012', problem: 'Revisão de 20.000km. Troca de óleo e filtros.', date: '18/10/2023', priority: 'Programada' },
  ];

  return (
    <div className="flex flex-col h-full bg-[#f6f6f8]">
      {/* Mobile Action Bar */}
      <div className="md:hidden p-4 bg-white border-b border-gray-200 sticky top-16 z-10">
        <button className="w-full bg-primary text-white py-2 rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-red-500/20">
          <span className="material-symbols-outlined text-[20px]">add</span>
          Nova Manutenção
        </button>
      </div>

      {/* Desktop Header */}
      <header className="hidden md:flex h-16 px-8 items-center justify-between bg-white border-b border-gray-200 sticky top-0 z-10">
        <h2 className="text-lg font-bold text-slate-900">Controle de Manutenção</h2>
        <button className="bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg shadow-red-500/20 shrink-0">
          <span className="material-symbols-outlined text-[20px]">add</span>
          Nova Manutenção
        </button>
      </header>

      <div className="p-4 md:p-8 space-y-8 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-red-200 shadow-sm flex flex-col justify-between h-40">
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Em Oficina (Imediata)</p>
              <h3 className="text-3xl font-black text-red-600 mt-2">5</h3>
            </div>
            <div className="text-xs text-red-400 font-bold bg-red-50 px-2 py-1 rounded w-fit flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">warning</span> Crítico
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-amber-200 shadow-sm flex flex-col justify-between h-40">
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Agendadas (7 dias)</p>
              <h3 className="text-3xl font-black text-amber-600 mt-2">8</h3>
            </div>
            <p className="text-xs text-slate-400">Manutenções preventivas</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-slate-900">Ordens de Serviço</h3>
              <p className="text-xs text-slate-400 mt-1">Gerencie as tarefas pendentes e em andamento.</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 border border-gray-200 rounded-lg text-slate-500 hover:text-primary transition-colors">
                <span className="material-symbols-outlined">filter_alt</span>
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50/50 text-[10px] uppercase font-bold text-slate-400 tracking-wider border-b border-gray-100">
                  <th className="px-4 md:px-6 py-4">Veículo</th>
                  <th className="px-4 md:px-6 py-4 hidden sm:table-cell">Descrição do Problema</th>
                  <th className="px-4 md:px-6 py-4">Data Prevista</th>
                  <th className="px-4 md:px-6 py-4">Prioridade</th>
                  <th className="px-4 md:px-6 py-4 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {tasks.map((t, i) => (
                  <tr key={i} className={`hover:bg-gray-50 transition-colors border-l-4 ${t.priority === 'Imediata' ? 'border-l-red-500' : 'border-l-amber-500'}`}>
                    <td className="px-4 md:px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-900">{t.vehicle}</span>
                        <span className="text-[10px] font-mono text-slate-400 uppercase">{t.plate}</span>
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-4 text-sm text-slate-600 max-w-xs truncate hidden sm:table-cell">{t.problem}</td>
                    <td className="px-4 md:px-6 py-4 text-sm text-slate-900 font-medium">{t.date}</td>
                    <td className="px-4 md:px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${t.priority === 'Imediata' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                        }`}>
                        {t.priority}
                      </span>
                    </td>
                    <td className="px-4 md:px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">edit_document</span>
                      </button>
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

export default MaintenanceControl;
