
import React from 'react';
import { AppView } from '../types';

interface SidebarProps {
  currentView: AppView;
  onNavigate: (view: AppView) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onNavigate, isOpen, onClose }) => {
  const menuItems = [
    { id: 'ADMIN_DASHBOARD', label: 'Dashboard', icon: 'dashboard' },
    { id: 'FLEET', label: 'Veículos', icon: 'directions_car' },
    { id: 'USERS', label: 'Usuários', icon: 'group' },
    { id: 'BILLING', label: 'Cobranças', icon: 'receipt_long' },
    { id: 'MAINTENANCE', label: 'Manutenção', icon: 'build', badge: '5' },
  ];

  // Backdrop for mobile
  const Backdrop = () => (
    <div
      className={`fixed inset-0 bg-black/50 z-40 transition-opacity lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      onClick={onClose}
    />
  );

  return (
    <>
      <Backdrop />
      <aside
        className={`fixed lg:sticky top-0 h-screen w-64 bg-white border-r border-gray-200 flex flex-col z-50 transition-transform duration-300 ease-in-out shrink-0 ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
      >
        <div className="h-16 lg:h-20 flex items-center px-6 border-b border-gray-100 justify-between">
          <button onClick={() => onNavigate('LANDING')} className="flex items-center gap-3">
            <div className="h-8 w-8 lg:h-10 lg:w-10 flex items-center justify-center">
              <img
                alt="Villas Locações Logo"
                className="h-full w-full object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHDvT9sc6h95LeqDegjOw9XtMZnlsf7elEOQ0oWTlUxkNvlUIuPmRb4OQL_d9VXufPpuGNh3_JaJXQJ-Aihs77jYm0c720HsnDIAC1ZgM4eWGNJunHUYO23jmFAQEMykM3AL4LkXy38npbyZInxnJyhxbxWD9xdOlYHPb-onWxxy2xXurpx7MYT0WuvByZa6R4zP2hJEvyhwA8CchGUrvTWxiXCK0psQ7D4KDgVqkEQCCTh5fdotj1W5xerHptFfxrMZNCt11KZVY"
              />
            </div>
            <div>
              <h1 className="text-sm font-bold text-slate-900 leading-tight">Villas Locações</h1>
              <p className="text-xs text-slate-500">Admin Panel</p>
            </div>
          </button>

          <button onClick={onClose} className="lg:hidden p-1 text-slate-400 hover:text-slate-600">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id as AppView);
                onClose(); // Close sidebar on mobile when item clicked
              }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${currentView === item.id
                ? 'bg-primary/10 text-primary border-l-4 border-primary'
                : 'text-slate-600 hover:bg-red-50 hover:text-primary'
                }`}
            >
              <span className={`material-symbols-outlined text-[22px] ${currentView === item.id ? 'icon-filled' : ''}`}>
                {item.icon}
              </span>
              <span className="text-sm font-medium">{item.label}</span>
              {item.badge && (
                <span className="ml-auto bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </button>
          ))}

          <div className="pt-4 mt-4 border-t border-gray-100">
            <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Sistema</p>
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-red-50 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[22px]">settings</span>
              <span className="text-sm font-medium">Configurações</span>
            </button>
          </div>
        </nav>

        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
            <div className="h-9 w-9 rounded-full bg-slate-200 bg-cover bg-center" style={{ backgroundImage: `url('https://picsum.photos/seed/admin/100/100')` }}></div>
            <div className="flex flex-col min-w-0">
              <p className="text-sm font-medium text-slate-900 truncate">Admin User</p>
              <p className="text-xs text-slate-500 truncate">admin@vilas.com</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
