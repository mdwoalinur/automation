export interface Supplier {
  supplier_id: number;
  company_id: number;
  supplier_code: string;
  supplier_name: string;
  contact_person: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  payment_terms: string;
  gst_number: string;
  status: boolean;
  created_at: Date;
  updated_at: Date;
}

export class SupplierModel implements Supplier {
  supplier_id: number = 0;
  company_id: number = 0;
  supplier_code: string = '';
  supplier_name: string = '';
  contact_person: string = '';
  email: string = '';
  phone: string = '';
  address: string = '';
  city: string = '';
  state: string = '';
  postal_code: string = '';
  country: string = 'Bangladesh';
  payment_terms: string = '';
  gst_number: string = '';
  status: boolean = true;
  created_at: Date = new Date();
  updated_at: Date = new Date();
}