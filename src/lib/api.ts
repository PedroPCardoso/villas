
/**
 * API Client prepared for future NestJS integration.
 * Current implementation uses mock data fallback.
 */

import { VEHICLES, INSPECTIONS } from '@/constants/mock-data';
import { Vehicle, Inspection } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const api = {
    vehicles: {
        list: async (): Promise<Vehicle[]> => {
            // Future: const res = await fetch(`${API_URL}/vehicles`); return res.json();
            return Promise.resolve(VEHICLES);
        },
        get: async (id: string): Promise<Vehicle | undefined> => {
            return Promise.resolve(VEHICLES.find(v => v.id === id));
        }
    },
    inspections: {
        list: async (): Promise<any[]> => {
            return Promise.resolve(INSPECTIONS);
        },
        create: async (data: any) => {
            console.log('API: Creating inspection', data);
            return Promise.resolve({ success: true });
        }
    },
    billing: {
        list: async () => {
            return Promise.resolve([
                { id: '1', amount: 1250.50, status: 'PENDING', dueDate: '2024-10-15' }
            ]);
        }
    }
};
