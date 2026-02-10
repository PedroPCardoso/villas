
import React, { useState } from 'react';
import { AppView } from './types';
import LandingPage from './pages/LandingPage';
import AdminDashboard from './pages/AdminDashboard';
import FleetManagement from './pages/FleetManagement';
import UserManagement from './pages/UserManagement';
import MaintenanceControl from './pages/MaintenanceControl';
import ClientDashboard from './pages/ClientDashboard';
import VehicleCatalog from './pages/VehicleCatalog';
import InspectionFlow from './pages/InspectionFlow';
import BillingManagement from './pages/BillingManagement';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('LANDING');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Helper to check if sidebar should be shown (Admin Views)
  const isAdminView = [
    'ADMIN_DASHBOARD',
    'FLEET',
    'USERS',
    'MAINTENANCE',
    'BILLING'
  ].includes(view);

  const renderContent = () => {
    switch (view) {
      case 'LANDING': return <LandingPage onNavigate={setView} />;
      case 'ADMIN_DASHBOARD': return <AdminDashboard onNavigate={setView} />;
      case 'FLEET': return <FleetManagement onNavigate={setView} />;
      case 'USERS': return <UserManagement onNavigate={setView} />;
      case 'MAINTENANCE': return <MaintenanceControl onNavigate={setView} />;
      case 'CLIENT_DASHBOARD': return <ClientDashboard onNavigate={setView} />;
      case 'CATALOG': return <VehicleCatalog onNavigate={setView} />;
      case 'INSPECTION': return <InspectionFlow onNavigate={setView} />;
      case 'BILLING': return <BillingManagement onNavigate={setView} />;
      default: return <LandingPage onNavigate={setView} />;
    }
  };

  return (
    <div className={`min-h-screen ${isAdminView ? 'flex flex-col lg:flex-row' : ''}`}>
      {isAdminView && (
        <>
          {/* Mobile Header */}
          <header className="lg:hidden bg-white border-b border-gray-200 h-16 flex items-center px-4 justify-between sticky top-0 z-20">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 -ml-2 text-slate-600 hover:text-primary"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <span className="font-bold text-slate-900">Villas Locações</span>
            <div className="w-8" /> {/* Spacer for alignment */}
          </header>

          <Sidebar
            currentView={view}
            onNavigate={setView}
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />
        </>
      )}
      <main className={`flex-1 ${isAdminView ? 'lg:overflow-y-auto lg:h-screen w-full' : ''}`}>
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
