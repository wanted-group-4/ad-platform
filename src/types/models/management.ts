export interface IAdManageReport {
  cost: string;
  convValue: number;
  roas: number;
}

export interface IAdManageAds {
  id: number;
  adType: string;
  title: string;
  budget: number;
  status: string;
  startData: string;
  endData: null;
  report: IAdManagement;
}

export interface IAdManagement {
  count: number;
  ads: IAdManageAds[];
}
