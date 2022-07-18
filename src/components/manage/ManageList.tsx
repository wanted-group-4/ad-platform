import React from 'react';
import {useQuery} from 'react-query';
import styled from '@emotion/styled';

import {IAds} from '../../types/models/management';
import {getAdsList} from '../../api/queries';
import ManageItem from './ManageItem';

export default function ManageList() {
  const {isLoading, data} = useQuery<IAds[]>(['ads'], getAdsList);

  return (
    <>
      {/* <h1>currentID: {currentID}</h1> */}
      {/* {currentID !== -1 && modal && <ManageItem item={modal} />} */}
      {!isLoading && (
        <ManageListContainer>
          {data?.map((ad: IAds) => (
            <ManageItem ad={ad} key={ad.id} />
          ))}
        </ManageListContainer>
      )}
    </>
  );
}

const ManageListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 30px 0;
  justify-content: space-between;
  @media ${({theme}) => theme.size.mobile} {
    width: 360px;
    margin: 0 auto;
  }
`;
