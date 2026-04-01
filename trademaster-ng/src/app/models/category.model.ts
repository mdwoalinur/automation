
export interface ICategory {
  category_id: number;
  category_name: string;
  parent_category_id: number | null;
  description: string;
  status: boolean;
  created_at: Date;
}

export class Category implements ICategory {
  category_id: number = 0;
  category_name: string = '';
  parent_category_id: number | null = null;
  description: string = '';
  status: boolean = true;
  created_at: Date = new Date();
}