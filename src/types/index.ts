
export type AppView = 
  | 'LANDING' 
  | 'ADMIN_DASHBOARD' 
  | 'FLEET' 
  | 'USERS' 
  | 'MAINTENANCE' 
  | 'CLIENT_DASHBOARD' 
  | 'CATALOG' 
  | 'INSPECTION' 
  | 'BILLING'
  | 'RENTALS';

export interface Vehicle {
  id: string;
  name: string;
  plate: string;
  category: string;
  status: 'Disponível' | 'Manutenção' | 'Locado' | 'Atenção';
  lastInspection: string;
  km: string;
  image: string;
  price: number;
  specs: {
    fuel: string;
    trans: string;
    seats: number;
  };
}

export interface Inspection {
  id: string;
  date: string;
  vehicle: string;
  plate: string;
  status: 'Aprovado' | 'Manutenção' | 'Atenção' | 'Reprovado';
  inspector: string;
}

export interface Rental {
  id: string;
  vehicleId: string;
  vehicleName: string;
  vehiclePlate: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  startDate: string;
  endDate: string;
  dailyRate: number;
  totalValue: number;
  status: 'Ativa' | 'Finalizada' | 'Atrasada' | 'Cancelada';
  notifyBeforeEnd: boolean;
  notifyDaysBefore: number;
  notes: string;
}
