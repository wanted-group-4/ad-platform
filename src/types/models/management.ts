export interface IReport {
  cost: number;
  convValue: number;
  roas: number;
}

export interface IAds {
  id: number;
  adType: string;
  title: string;
  budget: number;
  status: string;
  startDate: string;
  endDate: null | string;
  report: IReport;
}
