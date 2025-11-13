import type { produto } from './produto.ts';

export interface categoria {
  id: number;
  nome: string;
  produtos: produto[]; 
}