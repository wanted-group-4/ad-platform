/* eslint-disable no-constant-condition */
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {getDay} from 'date-fns';
import {IDailyAdStatus} from '@src/types/models/advertise';

export default function Board() {
  const [weekInfo, setWeekInfo] = useState<IDailyAdStatus[][]>([]);
  useEffect(() => {
    try {
      axios.get('data/db.json').then(res => {
        weeklyData(res.data.report.daily);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  function weeklyData(data: IDailyAdStatus[]) {
    const all = [];
    let result = [];
    for (let i = 0; i < data.length; i += 1) {
      const removeDash = data[i].date.split('-');
      const findDay = getDay(
        new Date(
          Number(removeDash[0]),
          Number(removeDash[1]),
          Number(removeDash[2]),
        ),
      );
      if (findDay === 1) {
        result.push(data[i]);
        result.push(data[i + 1]);
        result.push(data[i + 2]);
        result.push(data[i + 3]);
        result.push(data[i + 4]);
        result.push(data[i + 5]);
        result.push(data[i + 6]);
        i += 6;
        all.push(result);
      }
      result = [];
    }
    setWeekInfo([...weekInfo, ...all]);
  }
  console.log(weekInfo);

  return (
    <BoardContainer>
      <DashBoard>
        <Title DashBoard>대시보드</Title>
        <DateSelection>년/월/일</DateSelection>
      </DashBoard>
      <IntegrationAd>
        <Title>통합 광고 현황</Title>
        <DataBox>
          <DataCard>데이터 카드 컴포넌트</DataCard>
          <GraphChart>차트 컴포넌트</GraphChart>
        </DataBox>
      </IntegrationAd>
      <CurrentStateOfAd>
        <Title>매체 현황</Title>
        <DataBox>
          <BarChart>바 차트 컴포넌트</BarChart>
          <Diagram> 표 컴포넌트</Diagram>
        </DataBox>
      </CurrentStateOfAd>
    </BoardContainer>
  );
}

const BoardContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  height: 170vh;
`;
const DashBoard = styled.div`
  // border: solid red 2px;
  display: flex;
  height: 5.5vh;
  display: flex;
  flex: 0 1 auto;
`;
const IntegrationAd = styled.div`
  border: solid red 2px;
  height: 40vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;
const CurrentStateOfAd = styled.div`
  border: solid red 2px;
  height: 40vh;
  padding: 2rem;
  flex: 1 1 auto;
`;
const Title = styled.div<{DashBoard?: any}>`
  width: ${props => (props.DashBoard ? '118px' : '')};
  height: ${props => (props.DashBoard ? '46px' : '29px')};
  font-size: ${props => (props.DashBoard ? '32px' : '20px')};
  font-weight: 700;
  color: #4a4a4a;
  //border: solid red 2px;
  position: relative;
  left: ${props => (props.DashBoard ? '30px' : '')}
  flex: 1 1 auto;
`;
const DateSelection = styled.div`
  flex: 0.4 1 auto;
`;
const DataBox = styled.div`
  border: solid 2px black;
  display: flex;
  flex-direction: column;
  height: 70vh;
  flex: 1 1 auto;
`;
const DataCard = styled.div`
  border: dotted 2px red;
  flex: 0.5 0 auto;
`;
const GraphChart = styled.div`
  border: dotted 2px red;
  flex: 1 0 auto;
`;
const BarChart = styled.div`
  border: dotted 2px red;
  flex: 1 0 auto;
`;

const Diagram = styled.div`
  border: dotted 2px red;
  flex: 0.9 0 auto;
`;
