import axios from 'axios';
// import {QueryClient} from 'react-query';

import {IAds, IAdsUpdate} from '../types/models/management';

const BASE_URL = 'http://localhost:3001';

export const getAdsList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/ads?_sort=id&_order=desc`);
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

export const adCreate = async (newAd: IAds) => {
  try {
    const response = await axios.post(`${BASE_URL}/ads`, newAd);
    return response.data;
  } catch (error) {
    return console.error(error);
  }
};

export const adUpdate = async ({
  currentID,
  newAd,
}: {
  currentID: number;
  newAd: IAdsUpdate;
}) => {
  if (currentID === -1) return;
  try {
    const prevAd = await getAdItem(currentID);
    const response = await axios.put(`${BASE_URL}/ads/${currentID}`, {
      ...prevAd,
      ...newAd,
    });
    if (response.status !== 200) throw Error;
  } catch (error) {
    console.error(error);
  }
};

export const adDelete = async (currentID: number) => {
  if (currentID === -1) return;
  try {
    const response = await axios.delete(`${BASE_URL}/ads/${currentID}`);
    if (response.status !== 200) throw Error;
  } catch (error) {
    console.error(error);
  }
};

// const queryClient = new QueryClient();
// queryClient.setMutationDefaults(['addAds'], {
//   mutationFn: addAds,
//   onMutate: async (variables: IAds) => {
//     await queryClient.cancelQueries(['ads']);
//     const optimisticAd: IAds = variables;
//     queryClient.setQueryData(['ads'], (prev: any) => [...prev, optimisticAd]); // any
//     return {optimisticAd};
//   },
//   onSuccess: (result, variables, context) => {
//     queryClient.setQueryData(['ads'], (prev: any) =>
//       prev.map((ad: IAds) => (ad.id === context.optimisticAd.id ? result : ad)),
//     );
//   },
//   onError: (error, variables, context) => {
//     queryClient.setQueryData(['ads'], (prev: any) =>
//       prev.filter((ad: any) => ad.id !== context.optimisticAd.id),
//     );
//   },
//   retry: 3,
// });
