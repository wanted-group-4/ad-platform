export interface IDailyAdStatus {
  imp: number;
  click: number;
  cost: number;
  conv: number;
  convValue: number;
  ctr: number;
  cvr: number;
  cpc: number;
  cpa: number;
  roas: number;
  date: string;
}

export interface IAdReport {
  daily: IDailyAdStatus[];
}

export interface IAdvertise {
  report: IAdReport;
}
