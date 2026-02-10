
import React from 'react';
import { AppView } from '../types';
import { VEHICLES } from '../constants';

interface LandingPageProps {
  onNavigate: (view: AppView) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white flex flex-col group/design-root min-h-screen">
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-100 bg-white/95 backdrop-blur-md px-6 sm:px-10 py-3">
        <div className="flex items-center gap-3">
          <div className="h-10 w-auto">
            <img alt="Villas Logo" className="h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHDvT9sc6h95LeqDegjOw9XtMZnlsf7elEOQ0oWTlUxkNvlUIuPmRb4OQL_d9VXufPpuGNh3_JaJXQJ-Aihs77jYm0c720HsnDIAC1ZgM4eWGNJunHUYO23jmFAQEMykM3AL4LkXy38npbyZInxnJyhxbxWD9xdOlYHPb-onWxxy2xXurpx7MYT0WuvByZa6R4zP2hJEvyhwA8CchGUrvTWxiXCK0psQ7D4KDgVqkEQCCTh5fdotj1W5xerHptFfxrMZNCt11KZVY" />
          </div>
          <h2 className="text-lg font-bold uppercase tracking-tight text-primary">Villas Locações</h2>
        </div>
        <div className="hidden lg:flex flex-1 justify-end gap-8 items-center">
          <nav className="flex items-center gap-9">
            <button className="text-sm font-medium hover:text-primary transition-colors">Funcionalidades</button>
            <button onClick={() => onNavigate('CATALOG')} className="text-sm font-medium hover:text-primary transition-colors">Frota</button>
            <button className="text-sm font-medium hover:text-primary transition-colors">Sobre nós</button>
          </nav>
          <div className="flex gap-3">
            <button onClick={() => onNavigate('CLIENT_DASHBOARD')} className="px-4 py-2 text-sm font-bold border border-gray-200 rounded-xl hover:bg-gray-50">Login</button>
            <button onClick={() => onNavigate('ADMIN_DASHBOARD')} className="px-4 py-2 text-sm font-bold bg-primary text-white rounded-xl hover:bg-primary-hover shadow-sm shadow-red-500/20">Dashboard Admin</button>
          </div>
        </div>
      </header>

      <section className="relative px-6 sm:px-10 py-12 lg:py-24 max-w-7xl mx-auto w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex flex-col gap-8 flex-1">
            <div className="flex flex-col gap-4">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                Software #1 em Gestão de Frotas
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-slate-900">
                Gestão Inteligente para sua Frota
              </h1>
              <p className="text-slate-500 text-lg leading-relaxed max-w-[540px]">
                Maximize a eficiência dos seus veículos com nossa plataforma completa de vistorias e locação. Controle total na palma da sua mão.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => onNavigate('INSPECTION')} className="min-w-[160px] bg-primary text-white font-bold h-12 px-6 rounded-xl hover:bg-primary-hover shadow-lg shadow-red-500/30 transition-transform hover:-translate-y-0.5">
                Agendar Vistoria
              </button>
              <button onClick={() => onNavigate('CATALOG')} className="min-w-[160px] bg-white border border-gray-200 text-slate-900 font-bold h-12 px-6 rounded-xl hover:bg-gray-50">
                Ver Veículos
              </button>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBikKK32t4uPRiUKHlYos0DqAPZ83Vx24amtDrbW6P-cxeoWtEg44TObaA483KUMA8wsBxrKV9EtR5-Z7MS8w1X7fjTUhAH-ue0SUM6jHvuDu3qljJhU8ClMPK0aiet5wJAz8GOf5fB3QOqOb9Ipxm4sXtgOxOQF1SevGR7Ce78KsnkTAzRBdIyk9x88FqycHmiED5ZyugZ4_VBWQ8y5M4LGJlLy9GZJbsnlKGflz-v9L7EOjJ2_gr1IwMn_Pl-wWgFbafs4_HHNII" 
                alt="Fleet Car" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Status da Frota</p>
                  <p className="text-sm font-bold text-green-600 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    100% Operacional
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Total</p>
                  <p className="text-sm font-bold text-slate-900">42 Veículos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-primary text-sm font-bold uppercase tracking-wider mb-2">Recursos Premium</h2>
            <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">Por que escolher a Villas Locações?</h3>
            <p className="text-slate-500">Nossa tecnologia simplifica a gestão e garante segurança jurídica.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Vistoria Offline', icon: 'wifi_off', color: 'red', text: 'Realize inspeções mesmo sem internet.' },
              { title: 'Alertas de Manutenção', icon: 'build_circle', color: 'amber', text: 'Notificações automáticas de revisões.' },
              { title: 'Proteção Jurídica', icon: 'gavel', color: 'emerald', text: 'Contratos digitais com validade jurídica.' },
            ].map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className={`w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6`}>
                  <span className="material-symbols-outlined text-3xl">{f.icon}</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{f.title}</h4>
                <p className="text-slate-500 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-16 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-black uppercase mb-4">Villas Locações</h2>
            <p className="text-red-100 max-w-sm">Líder em gestão de frotas e locação de veículos corporativos. Qualidade e transparência em cada quilômetro.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-red-100 text-sm">
              <li><button className="hover:text-white">Sobre Nós</button></li>
              <li><button className="hover:text-white">Carreiras</button></li>
              <li><button className="hover:text-white">Contato</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Suporte</h4>
            <ul className="space-y-2 text-red-100 text-sm">
              <li><button className="hover:text-white">Central de Ajuda</button></li>
              <li><button className="hover:text-white">Termos de Uso</button></li>
              <li><button className="hover:text-white">Privacidade</button></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-red-200 text-xs">
          © 2024 Villas Locações. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
