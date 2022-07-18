import React from 'react';
import styled from '@emotion/styled';

import {IAds} from '@src/types/models/management';
import {adItemList, changeDataForm} from '@src/utils';
import {AdItem, Button} from './ad';

interface ItemProps {
  ad: IAds;
}

export default function ManageItem(props: ItemProps) {
  const {ad} = props;

  const changeData = changeDataForm(ad);

  const handleUpdateData = () => {
    console.log('update');
  };

  const handleDeleteDate = () => {
    console.log('delete');
  };

  return (
    <ManageItemContainer>
      <AdCard>
        <AdTitle>{ad.title}</AdTitle>
        <AdItemList>
          {adItemList.map((item, index) => (
            <AdItem title={item} data={changeData[index]} key={item} />
          ))}
        </AdItemList>
        <ButtonWrap>
          <Button onClick={handleUpdateData}>수정</Button>
          <Button onClick={handleDeleteDate}>삭제</Button>
        </ButtonWrap>
      </AdCard>
    </ManageItemContainer>
  );
}

const ButtonWrap = styled.div`
  display: flex;
  justify-content: right;
  button {
    margin-left: 20px;
  }
`;

const ManageItemContainer = styled.div`
  margin-bottom: 30px;
`;

const AdCard = styled.div`
  width: 350px;
  height: 500px;
  background: #ffffff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  padding: 30px;
`;

const AdTitle = styled.h1`
  font-weight: 700;
  font-size: 24px;
  padding-bottom: 50px;
`;

const AdItemList = styled.div`
  margin-bottom: 40px;
`;
