
export interface IRole {
  role_id: number;
  role_name: string;
  role_code: string;
  description: string;
  permissions: any; // JSON object
  is_system_role: boolean;
  status: boolean;
  created_at: Date;
  updated_at: Date;
}

export class Role implements IRole {
  role_id: number = 0;
  role_name: string = '';
  role_code: string = '';
  description: string = '';
  permissions: any = {};
  is_system_role: boolean = false;
  status: boolean = true;
  created_at: Date = new Date();
  updated_at: Date = new Date();
}