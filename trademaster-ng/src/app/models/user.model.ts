
export interface IUser {
  user_id: number;
  role_id: number;
  username: string;
  password_hash: string;
  full_name: string;
  email: string;
  phone: string;
  is_active: boolean;
  last_login: Date | null;
  created_at: Date;
  updated_at: Date;
}

export class User implements IUser {
  user_id: number = 0;
  role_id: number = 0;
  username: string = '';
  password_hash: string = '';
  full_name: string = '';
  email: string = '';
  phone: string = '';
  is_active: boolean = true;
  last_login: Date | null = null;
  created_at: Date = new Date();
  updated_at: Date = new Date();
}