export type UserRole = 'ADMIN' | 'MANAGER' | 'STAFF';

export interface User {
  user_id: number;
  company_id: number;
  username: string;
  password_hash: string;
  full_name: string;
  email: string;
  phone: string;
  role: UserRole;
  is_active: boolean;
  last_login: Date | null;
  created_at: Date;
  updated_at: Date;
}

export class UserModel implements User {
  user_id: number = 0;
  company_id: number = 0;
  username: string = '';
  password_hash: string = '';
  full_name: string = '';
  email: string = '';
  phone: string = '';
  role: UserRole = 'STAFF';
  is_active: boolean = true;
  last_login: Date | null = null;
  created_at: Date = new Date();
  updated_at: Date = new Date();
}