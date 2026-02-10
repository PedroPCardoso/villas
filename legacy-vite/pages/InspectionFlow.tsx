
import React from 'react';
import { AppView } from '../types';

interface InspectionFlowProps {
  onNavigate: (view: AppView) => void;
}

const InspectionFlow: React.FC<InspectionFlowProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#f6f6f8] min-h-screen flex flex-col font-sans">
      <header className="flex items-center justify-between border-b border-gray-200 bg-white px-10 py-3 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-3xl">local_shipping</span>
          </div>
          <h2 className="text-lg font-bold uppercase text-slate-900 font-logo">VILLAS</h2>
        </div>
        <button onClick={() => onNavigate('CLIENT_DASHBOARD')} className="bg-gray-100 px-4 py-2 rounded-xl text-sm font-bold hover:bg-gray-200 transition-colors">Sair</button>
      </header>

      <div className="flex-1 flex justify-center py-8 px-4">
        <div className="max-w-5xl w-full flex flex-col gap-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold text-slate-900">Progresso da Vistoria</p>
                <span className="text-sm font-bold text-primary bg-red-50 px-3 py-1 rounded-full border border-red-100">Passo 2 de 3</span>
              </div>
              <div className="relative">
                <div className="overflow-hidden h-2 mb-4 flex rounded-full bg-gray-100">
                  <div className="bg-primary w-2/3 rounded-full transition-all duration-500" />
                </div>
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  <span className="text-primary">Início</span>
                  <span className="text-primary">Fotos do Veículo</span>
                  <span>Revisão e Envio</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <h1 className="text-3xl font-black text-slate-900 mb-2">Vistoria Semanal</h1>
                <div className="flex items-center gap-2 text-slate-500">
                  <span className="material-symbols-outlined text-sm">directions_car</span>
                  <p className="text-sm">Veículo: <span className="font-bold text-slate-900">Fiat Fiorino - ABC-1234</span></p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 min-w-[300px]">
                <label className="text-xs font-bold text-slate-900 uppercase block mb-2">Quilometragem Atual (KM)</label>
                <div className="relative">
                  <input className="w-full bg-gray-50 border-gray-200 rounded-lg py-2.5 px-4 font-bold text-lg focus:ring-primary focus:border-primary outline-none" placeholder="Ex: 45.050" type="number" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs font-bold">KM</span>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-100 rounded-lg p-4 flex gap-3">
              <span className="material-symbols-outlined text-primary">info</span>
              <p className="text-sm text-slate-600">Por favor, tire fotos claras do veículo. Certifique-se de que a placa esteja visível. Todas as fotos são obrigatórias.</p>
            </div>

            <h2 className="text-xl font-bold text-slate-900 mt-4">Evidências Fotográficas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: 'Foto Frontal', status: 'Enviado', filled: true },
                { label: 'Foto Traseira', status: 'Obrigatório', filled: false },
                { label: 'Lateral Esquerda', status: 'Obrigatório', filled: false },
                { label: 'Lateral Direita', status: 'Obrigatório', filled: false },
              ].map((slot, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm text-slate-900">{slot.label}</span>
                    <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${slot.filled ? 'bg-green-100 text-green-700' : 'text-gray-400'}`}>
                      {slot.status}
                    </span>
                  </div>
                  {slot.filled ? (
                    <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-primary/50 group">
                      <img src="https://picsum.photos/seed/carfront/400/225" className="w-full h-full object-cover" alt="Uploaded" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                        <button className="bg-white p-2 rounded-full"><span className="material-symbols-outlined">visibility</span></button>
                        <button className="bg-red-500 text-white p-2 rounded-full"><span className="material-symbols-outlined">delete</span></button>
                      </div>
                    </div>
                  ) : (
                    <label className="aspect-video border-2 border-dashed border-gray-200 bg-gray-50 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-red-50 transition-colors">
                      <span className="material-symbols-outlined text-4xl text-gray-300">add_a_photo</span>
                      <p className="text-[10px] font-bold text-gray-400 mt-2">CLIQUE PARA ENVIAR</p>
                      <input type="file" className="hidden" />
                    </label>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 flex justify-between items-center">
            <button onClick={() => onNavigate('CLIENT_DASHBOARD')} className="text-slate-400 font-bold hover:text-slate-900 transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined">arrow_back</span>
              Voltar
            </button>
            <div className="flex gap-4">
              <button className="px-6 py-3 font-bold text-slate-600 rounded-xl hover:bg-gray-100">Salvar Rascunho</button>
              <button className="bg-primary text-white px-8 py-3 font-bold rounded-xl shadow-lg shadow-red-900/20 hover:bg-primary-hover">Finalizar e Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspectionFlow;
