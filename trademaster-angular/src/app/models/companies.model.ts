export interface Company {
  company_id: number;
  company_name: string;
  business_type: string;
  phone: string;
  email: string;
  address: string;
  gst_number: string;
  status: boolean;
  created_at: Date;
  updated_at: Date;
}

export class CompanyModel implements Company {
  company_id: number = 0;
  company_name: string = '';
  business_type: string = '';
  phone: string = '';
  email: string = '';
  address: string = '';
  gst_number: string = '';
  status: boolean = true;
  created_at: Date = new Date();
  updated_at: Date = new Date();
}