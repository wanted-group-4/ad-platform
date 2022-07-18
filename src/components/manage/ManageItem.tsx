import React from 'react';
import {v4 as uuidv4} from 'uuid';
import {useSetRecoilState} from 'recoil';
import {useMutation} from 'react-query';
import {IAds} from '@src/types/models/management';

import {addAds} from '@src/api/queries';
import {currentIDState} from '../../api/selectors';

interface ItemProps {
  item: IAds;
}

export default function ManageItem(props: ItemProps) {
  const {item} = props;
  const setCurrentID = useSetRecoilState(currentIDState);
  const addMutation = useMutation(addAds);
  const handleModal = () => {
    setCurrentID(item.id);
  };
  const handleSubmit = () => {
    const newAd: IAds = {
      id: +uuidv4(),
      adType: 'app',
      title: '광고',
      budget: Math.floor(Math.random() * 10 ** 5),
      status: 'active',
      startDate: '2022-02-10T00:00:00',
      endDate: null,
      report: {
        cost: 9300222,
        convValue: 38234789,
        roas: 411,
      },
    };
    addMutation.mutate(newAd);
  };

  return (
    <div>
      <p>{item.title}</p>
      <p>{item.budget}</p>
      <p>{item.status}</p>
      <button type="button" onClick={handleModal}>
        modal
      </button>
      <button type="button" onClick={handleSubmit}>
        submit
      </button>
    </div>
  );
}
