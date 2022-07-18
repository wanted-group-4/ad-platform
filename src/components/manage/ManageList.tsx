import React from 'react';
import {useQuery} from 'react-query';
import {useRecoilValue} from 'recoil';

import currentIDState from '@src/api/atom';
import {IAds} from '../../types/models/management';
import {getAdsList, getAdItem} from '../../api/queries';
import ManageItem from './ManageItem';

export default function ManageList() {
  const currentID = useRecoilValue(currentIDState);
  const {isLoading, isError, data, error} = useQuery<
    boolean,
    boolean,
    IAds[],
    [string]
  >(['ads'], getAdsList);
  const {data: modal} = useQuery<IAds, [string, number]>(['ads'], () =>
    getAdItem(currentID),
  );

  return (
    <>
      <h1>currentID: {currentID}</h1>
      {currentID !== -1 && modal && <ManageItem item={modal} />}
      {!isLoading &&
        (isError ? (
          <div>{error}</div>
        ) : (
          <div>
            {data?.map(item => (
              <ManageItem key={item.id} item={item} />
            ))}
          </div>
        ))}
    </>
  );
}
