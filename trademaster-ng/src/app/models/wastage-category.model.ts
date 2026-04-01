// wastage-category.model.ts
export interface IWastageCategory {
  category_id: number;
  category_name: string;
  category_code: string;
  description: string;
  loss_percentage: number;
  approval_required: boolean;
  approval_level: number;
  status: boolean;
  created_by: number;
  created_at: Date;
  updated_at: Date;
}

export class WastageCategory implements IWastageCategory {
  category_id: number = 0;
  category_name: string = '';
  category_code: string = '';
  description: string = '';
  loss_percentage: number = 0;
  approval_required: boolean = false;
  approval_level: number = 0;
  status: boolean = true;
  created_by: number = 0;
  created_at: Date = new Date();
  updated_at: Date = new Date();
}