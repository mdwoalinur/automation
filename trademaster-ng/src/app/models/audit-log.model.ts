// audit-log.model.ts
export interface IAuditLog {
  log_id: number;
  user_id: number;
  action: string;
  entity_type: string;
  entity_id: number;
  old_value: any;
  new_value: any;
  ip_address: string;
  user_agent: string;
  created_at: Date;
}

export class AuditLog implements IAuditLog {
  log_id: number = 0;
  user_id: number = 0;
  action: string = '';
  entity_type: string = '';
  entity_id: number = 0;
  old_value: any = null;
  new_value: any = null;
  ip_address: string = '';
  user_agent: string = '';
  created_at: Date = new Date();
}