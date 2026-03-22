export interface UserSession {
  session_id: number;
  user_id: number;
  session_token: string;
  ip_address: string;
  user_agent: string;
  login_time: Date;
  logout_time: Date | null;
  is_active: boolean;
}

export class UserSessionModel implements UserSession {
  session_id: number = 0;
  user_id: number = 0;
  session_token: string = '';
  ip_address: string = '';
  user_agent: string = '';
  login_time: Date = new Date();
  logout_time: Date | null = null;
  is_active: boolean = true;
}