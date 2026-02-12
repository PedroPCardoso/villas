
import { Vehicle, Inspection, Rental } from '../types';

export const VEHICLES: Vehicle[] = [
    {
        id: '1',
        name: 'Toyota Corolla 2024',
        plate: 'ABC-1234',
        category: 'Sedan Premium',
        status: 'Disponível',
        lastInspection: '12 Out 2023',
        km: '12.000km',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAi6w6Sh82i4Y6OeoZ2Ii4l11G1gL0SE18btjSCwo8ZLnTCZHkH-w1QHp89J_279FhkwYc3k0eCjlhbzmOqSC99DeQ1ZZ6-GezneIOQhleWMwYjsDBKL0ooc394FNSVBtA99u_iLyg6tkR-SIhMgmI4lCDK2F7eOTC4OKfBSxYOvDwy6VSDEkbjoI1G23xuoOuFSSIIqJr3kwYLgp7_K_zwr0iAio7OnSon6pOU3AI_Y2sX9KgQJb8Q-7rT0yKVg7JlXEJdU3kKf6w',
        price: 180,
        specs: { fuel: 'Flex', trans: 'Auto', seats: 5 }
    },
    {
        id: '2',
        name: 'Honda Civic 2024',
        plate: 'XYZ-9876',
        category: 'Sedan Executivo',
        status: 'Disponível',
        lastInspection: '10 Out 2023',
        km: '8.500km',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAanpwN7qZzMkGUlrMCuoRzm1ZGI_h09SA1eHfho8fNicyOS546Kvh0DcjJljVrGWwY6SN8CoHDrcgoN81AvBDvtgy7M56_ryaduyEOPTW3v2lQMMZYh7TGLLZ5wJuTDD6K0NPbjZSLDI-DtKRhcGIx723OvjTuDiVMx-jweQqvLnym6VBnxgS3m2ye6EqcRUoUmT72hVe_NX8JdxCQvlgWhgdxxDW_PhLCYG9fss7FbMOTPON0yo0BENiTncpKs8RpzKsGMmSgASo',
        price: 190,
        specs: { fuel: 'Híbrido', trans: 'Auto', seats: 5 }
    },
    {
        id: '3',
        name: 'Chevrolet Onix Plus',
        plate: 'MNO-9012',
        category: 'Sedan Compacto',
        status: 'Atenção',
        lastInspection: '01 Set 2023',
        km: '25.000km',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_vosPvZC9p6go0C9lToyHSLkqFlVz1r3BWoK6yCq3GrB3crXe5VZ08GTEFsR-yLWeojTDo3nGDBf8qd3qGonoYdD8k_3uMajnq2Om4AxDMPFf7Gskcq8sfawZJ5tsdD8YM6MYPBVPxFF1utTVr7MvzjQ2ms1O3InNtykxNM3u7h-IE4Ki68YfAMay5jdeuOBdZHjada6ps-_C8U_To3hHZH0nwD62n_dVCf1xjIbivikUFNWJGS5Yv4eiaQD2ZrW73PP3sqTx3ZI',
        price: 120,
        specs: { fuel: 'Flex', trans: 'Turbo', seats: 5 }
    }
];

export const INSPECTIONS: Inspection[] = [
    { id: '1', date: '12/10/2023', vehicle: 'Fiat Fiorino', plate: 'ABC-1234', status: 'Aprovado', inspector: 'João Silva' },
    { id: '2', date: '12/10/2023', vehicle: 'Renault Master', plate: 'XYZ-9876', status: 'Manutenção', inspector: 'Maria Souza' },
    { id: '3', date: '11/10/2023', vehicle: 'VW Saveiro', plate: 'JKL-5678', status: 'Aprovado', inspector: 'Pedro Santos' },
];

export const LEADS = [
    { id: '1', name: 'Carlos Ferreira', email: 'carlos.ferreira@email.com', phone: '(11) 99999-8888', message: 'Gostaria de alugar um veículo para Uber.', status: 'Novo', date: 'Hoje' },
    { id: '2', name: 'Ana Souza', email: 'ana.souza@email.com', phone: '(11) 98888-7777', message: 'Vocês trabalham com aluguel mensal?', status: 'Em Contato', date: 'Ontem' },
    { id: '3', name: 'Roberto Lima', email: 'roberto.lima@email.com', phone: '(21) 97777-6666', message: 'Tenho interesse na Fiat Fiorino.', status: 'Convertido', date: '10/10' },
];

export const CLIENTS: import('../types').ClientUser[] = [
    {
        id: '1',
        name: 'Carlos Mendes',
        cpf: '123.456.789-00',
        email: 'carlos.mendes@email.com',
        phone: '(11) 98765-4321',
        photoUrl: 'https://i.pravatar.cc/150?u=carlos'
    },
    {
        id: '2',
        name: 'Patricia Oliveira',
        cpf: '987.654.321-00',
        email: 'patricia.oliveira@email.com',
        phone: '(21) 99876-5432',
        photoUrl: 'https://i.pravatar.cc/150?u=patricia'
    }
];

export const FINANCIAL_RECORDS: import('../types').FinancialRecord[] = [
    {
        id: '1',
        clientId: '1',
        type: 'Fatura',
        description: 'Locação Mensal - Janeiro',
        value: 2520.00,
        dueDate: '2024-02-05',
        status: 'Pago'
    },
    {
        id: '2',
        clientId: '1',
        type: 'Boleto',
        description: 'Locação Mensal - Fevereiro',
        value: 2520.00,
        dueDate: '2024-03-05',
        status: 'Pendente'
    },
    {
        id: '3',
        clientId: '1',
        type: 'Boleto',
        description: 'Multa de Trânsito',
        value: 150.00,
        dueDate: '2024-02-15',
        status: 'Atrasado'
    }
];

export const RENTALS: Rental[] = [
    {
        id: '1',
        vehicleId: '1',
        vehicleName: 'Toyota Corolla 2024',
        vehiclePlate: 'ABC-1234',
        clientName: 'Carlos Mendes',
        clientEmail: 'carlos.mendes@email.com',
        clientPhone: '(11) 98765-4321',
        clientCpf: '123.456.789-00',
        startDate: '2024-02-01',
        endDate: '2024-02-15',
        dailyRate: 180,
        totalValue: 2520,
        status: 'Ativa',
        notifyBeforeEnd: true,
        notifyDaysBefore: 3,
        notes: 'Cliente frequente, preferência por veículos premium.'
    },
    {
        id: '2',
        vehicleId: '2',
        vehicleName: 'Honda Civic 2024',
        vehiclePlate: 'XYZ-9876',
        clientName: 'Patricia Oliveira',
        clientEmail: 'patricia.oliveira@email.com',
        clientPhone: '(21) 99876-5432',
        clientCpf: '987.654.321-00',
        startDate: '2024-01-20',
        endDate: '2024-02-20',
        dailyRate: 190,
        totalValue: 5890,
        status: 'Ativa',
        notifyBeforeEnd: true,
        notifyDaysBefore: 5,
        notes: 'Locação mensal para uso executivo.'
    },
    {
        id: '3',
        vehicleId: '3',
        vehicleName: 'Chevrolet Onix Plus',
        vehiclePlate: 'MNO-9012',
        clientName: 'Roberto Santos',
        clientEmail: 'roberto.santos@email.com',
        clientPhone: '(11) 97654-3210',
        clientCpf: '111.222.333-44',
        startDate: '2024-01-10',
        endDate: '2024-02-05',
        dailyRate: 120,
        totalValue: 3120,
        status: 'Finalizada',
        notifyBeforeEnd: false,
        notifyDaysBefore: 0,
        notes: 'Locação finalizada sem pendências.'
    },
    {
        id: '4',
        vehicleId: '1',
        vehicleName: 'Toyota Corolla 2024',
        vehiclePlate: 'ABC-1234',
        clientName: 'Mariana Silva',
        clientEmail: 'mariana.silva@email.com',
        clientPhone: '(11) 96543-2109',
        clientCpf: '555.666.777-88',
        startDate: '2024-01-05',
        endDate: '2024-02-01',
        dailyRate: 180,
        totalValue: 4860,
        status: 'Atrasada',
        notifyBeforeEnd: true,
        notifyDaysBefore: 2,
        notes: 'Cliente não devolveu o veículo na data prevista.'
    },
    {
        id: '5',
        vehicleId: '2',
        vehicleName: 'Honda Civic 2024',
        vehiclePlate: 'XYZ-9876',
        clientName: 'Eduardo Costa',
        clientEmail: 'eduardo.costa@email.com',
        clientPhone: '(21) 95432-1098',
        clientCpf: '999.888.777-66',
        startDate: '2024-02-10',
        endDate: '2024-02-12',
        dailyRate: 190,
        totalValue: 380,
        status: 'Cancelada',
        notifyBeforeEnd: false,
        notifyDaysBefore: 0,
        notes: 'Cancelamento solicitado pelo cliente 1 dia antes.'
    }
];
