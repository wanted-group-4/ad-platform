import {format} from 'date-fns';

import {IAds} from '@src/types/models/management';
import {comma} from '@src/utils';

const changeDataForm = (data: IAds) => {
  const date = new Date(data.startDate);

  return [
    data.status === 'active' ? '진행중' : '종료',
    format(date, 'yyyy-MM-dd'),
    `${comma(Math.round(data.budget / 10000))}만원`,
    `${data.report.roas}%`,
    `${comma(Math.round(data.report.convValue / 10000))}만원`,
    `${comma(Math.round(data.report.cost / 10000))}만원`,
  ];
};

export default changeDataForm;
