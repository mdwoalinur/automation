export interface ReportCache {
  cache_id: number;
  company_id: number;
  report_type: string;
  report_date: Date;
  report_data: any; // JSON data
  generated_at: Date;
}

export class ReportCacheModel implements ReportCache {
  cache_id: number = 0;
  company_id: number = 0;
  report_type: string = '';
  report_date: Date = new Date();
  report_data: any = null;
  generated_at: Date = new Date();
}