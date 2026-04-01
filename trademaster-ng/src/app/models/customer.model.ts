
export type CustomerType = 'RETAIL' | 'WHOLESALE' | 'CORPORATE';

export interface ICustomer {
  customer_id: number;
  customer_code: string;
  customer_name: string;
  customer_type: CustomerType;
  email: string;
  phone: string;
  mobile: string;
  address: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  credit_limit: number;
  opening_balance: number;
  current_balance: number;
  gst_number: string;
  status: boolean;
  created_at: Date;
  updated_at: Date;
}

export class Customer implements ICustomer {
  customer_id: number = 0;
  customer_code: string = '';
  customer_name: string = '';
  customer_type: CustomerType = 'RETAIL';
  email: string = '';
  phone: string = '';
  mobile: string = '';
  address: string = '';
  city: string = '';
  state: string = '';
  postal_code: string = '';
  country: string = '';
  credit_limit: number = 0;
  opening_balance: number = 0;
  current_balance: number = 0;
  gst_number: string = '';
  status: boolean = true;
  created_at: Date = new Date();
  updated_at: Date = new Date();
}