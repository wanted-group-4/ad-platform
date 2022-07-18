import {QueryClient} from 'react-query';
import axios from 'axios';
import {IAds} from '../types/models/management';

const BASE_URL = 'http://localhost:3001';
const queryClient = new QueryClient();

export const getAdsList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/ads`);
    return response.data;
  } catch (error) {
    return console.error(error);
  }
};

export const getAdItem = async (currentID: number) => {
  if (currentID === -1) return '';
  try {
    const response = await axios.get(`${BASE_URL}/ads/${currentID}`);
    return response.data;
  } catch (error) {
    return console.error(error);
  }
};

export const addAds = async (newAd: IAds) => {
  try {
    const response = await axios.post(`${BASE_URL}/ads`, newAd);
    return response.data;
  } catch (error) {
    return console.error(error);
  }
};

queryClient.setMutationDefaults(['addAds'], {
  mutationFn: addAds,
  onMutate: async (variables: IAds) => {
    await queryClient.cancelQueries(['ads']);
    const optimisticAd: IAds = variables;
    queryClient.setQueryData(['ads'], (prev: any) => [...prev, optimisticAd]); // any
    return {optimisticAd};
  },
  onSuccess: (result, variables, context) => {
    queryClient.setQueryData(['ads'], (prev: any) =>
      prev.map((ad: IAds) => (ad.id === context.optimisticAd.id ? result : ad)),
    );
  },
  onError: (error, variables, context) => {
    queryClient.setQueryData(['ads'], (prev: any) =>
      prev.filter((ad: any) => ad.id !== context.optimisticAd.id),
    );
  },
  retry: 3,
});
