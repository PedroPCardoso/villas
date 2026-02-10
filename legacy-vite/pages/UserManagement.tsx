
import React from 'react';
import { AppView } from '../types';

interface UserManagementProps {
  onNavigate: (view: AppView) => void;
}

const UserManagement: React.FC<UserManagementProps> = ({ onNavigate }) => {
  const users = [
    { id: '1', name: 'João Silva', email: 'joao.silva@vilas.com', role: 'Admin', status: 'Ativo', lastActive: 'Agora mesmo' },
    { id: '2', name: 'Maria Souza', email: 'maria.souza@vilas.com', role: 'Inspetor', status: 'Ativo', lastActive: 'Há 25 min' },
    { id: '3', name: 'Pedro Santos', email: 'pedro.santos@vilas.com', role: 'Motorista', status: 'Inativo', lastActive: '12 Out, 2023' },
  ];

  return (
    <div className="flex flex-col h-full bg-[#f6f6f8]">
      {/* Mobile Action Bar */}
      <div className="md:hidden p-4 bg-white border-b border-gray-200 sticky top-16 z-10">
        <button className="w-full bg-primary text-white py-2 rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-red-500/20">
          <span className="material-symbols-outlined text-[20px]">person_add</span>
          Adicionar Usuário
        </button>
      </div>

      {/* Desktop Header */}
      <header className="hidden md:flex h-16 px-8 items-center justify-between bg-white border-b border-gray-200 sticky top-0 z-10">
        <h2 className="text-lg font-bold text-slate-900">Gestão de Usuários</h2>
        <button className="bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg shadow-red-500/20 shrink-0">
          <span className="material-symbols-outlined text-[20px]">person_add</span>
          Adicionar Usuário
        </button>
      </header>

      <div className="p-4 md:p-8 space-y-6 max-w-[1400px] mx-auto w-full">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold text-primary shadow-sm">Todos (45)</button>
          <button className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Administradores (3)</button>
          <button className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Inspetores (8)</button>
          <button className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Motoristas (34)</button>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50/50 text-[10px] uppercase font-bold text-slate-400 tracking-wider border-b border-gray-100">
                  <th className="px-4 md:px-6 py-4">Usuário</th>
                  <th className="px-4 md:px-6 py-4 hidden sm:table-cell">Função</th>
                  <th className="px-4 md:px-6 py-4 text-center">Status</th>
                  <th className="px-4 md:px-6 py-4 hidden md:table-cell">Última Atividade</th>
                  <th className="px-4 md:px-6 py-4 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {users.map((u) => (
                  <tr key={u.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 md:px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-primary">
                          {u.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-slate-900">{u.name}</span>
                          <span className="text-xs text-slate-400">{u.email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-4 hidden sm:table-cell">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <span className={`material-symbols-outlined text-[18px] ${u.role === 'Admin' ? 'text-purple-500' : 'text-brand-blue'}`}>
                          {u.role === 'Admin' ? 'shield_person' : 'engineering'}
                        </span>
                        {u.role}
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-4 text-center">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${u.status === 'Ativo' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
                        }`}>
                        {u.status}
                      </span>
                    </td>
                    <td className="px-4 md:px-6 py-4 text-sm text-slate-500 hidden md:table-cell">{u.lastActive}</td>
                    <td className="px-4 md:px-6 py-4 text-right space-x-2">
                      <button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined text-lg">edit</span></button>
                      <button className="text-slate-400 hover:text-red-500"><span className="material-symbols-outlined text-lg">delete</span></button>
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

export default UserManagement;
