import {IAds} from '@src/types/models/management';

const adselectData = (data: IAds[], type: string) => {
  if (type === 'all') return data;
  return data.filter(item => item.status === type);
};

export default adselectData;
