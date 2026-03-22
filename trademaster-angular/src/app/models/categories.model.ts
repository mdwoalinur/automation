export interface Category {
  category_id: number;
  company_id: number;
  category_name: string;
  parent_category_id: number | null;
  description: string;
  status: boolean;
  created_at: Date;
}

export class CategoryModel implements Category {
  category_id: number = 0;
  company_id: number = 0;
  category_name: string = '';
  parent_category_id: number | null = null;
  description: string = '';
  status: boolean = true;
  created_at: Date = new Date();
}