import axios from 'axios';
import {selectorFamily} from 'recoil';
import {add, format} from 'date-fns';

const BASE_URL = 'http://localhost:3001';

export const reportState = selectorFamily({
  key: 'reportState',
  get: (date: Date) => async () => {
    const startDate = format(new Date(date), 'yyyy-MM-dd');
    const endDate = format(add(new Date(startDate), {days: 6}), 'yyyy-MM-dd');
    const response = await axios.get(
      `${BASE_URL}/daily?date_gte=${startDate}&date_lte=${endDate}`,
    );
    if (response.status !== 200) {
      throw new Error(`[${response.status}] ${response.statusText}`);
    }
    return response.data;
  },
});

export const channelState = selectorFamily({
  key: 'channelState',
  get: (date: Date) => async () => {
    const startDate = format(new Date(date), 'yyyy-MM-dd');
    const endDate = format(add(new Date(startDate), {days: 6}), 'yyyy-MM-dd');
    const response = await axios.get(
      `${BASE_URL}/channels?date_gte=${startDate}&date_lte=${endDate}`,
    );
    if (response.status !== 200) {
      throw new Error(`[${response.status}] ${response.statusText}`);
    }
    return response.data;
  },
});
