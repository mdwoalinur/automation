
export type UnitType = 'WEIGHT' | 'LENGTH' | 'VOLUME' | 'PIECE' | 'TIME' | 'OTHER';

export interface IUnit {
  unit_id: number;
  unit_name: string;
  unit_code: string;
  unit_type: UnitType;
  base_unit_id: number | null;
  conversion_factor: number;
  is_base: boolean;
  status: boolean;
  created_at: Date;
  updated_at: Date;
}

export class Unit implements IUnit {
  unit_id: number = 0;
  unit_name: string = '';
  unit_code: string = '';
  unit_type: UnitType = 'PIECE';
  base_unit_id: number | null = null;
  conversion_factor: number = 1;
  is_base: boolean = false;
  status: boolean = true;
  created_at: Date = new Date();
  updated_at: Date = new Date();
}