import DropDown from '@src/components/dropdown/Select';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useRecoilValue} from 'recoil';
import styled from 'styled-components';
import {getDay, format, add} from 'date-fns';
import {IDailyAdStatus} from '@src/types/models/advertise';
import {reportState, channelState} from '../api/selectors';

export default function Board() {
  const [dateList, setDateList] = useState<any>([['0', '로딩중']]);
  const [type, setType] = useState(['2022-02-07']);
  const selectDate: string = type;

  useEffect(() => {
    try {
      axios
        .get('http://localhost:3001/daily')
        .then(response => DateList(response.data))
        .then(response => setDateList([...response]));
    } catch (error) {
      console.log(error);
    }
  }, []);

  // 월요일을 찾아서 일주일 단위로 selectList를 보여주는 함수
  function DateList(data: IDailyAdStatus[]) {
    const result = [];
    let count = 0;
    for (let i = 0; i < data.length; i += 1) {
      const removeDash = data[i].date;
      const findDay = getDay(new Date(removeDash));
      if (findDay === 1) {
        const endDate = format(
          add(new Date(data[i].date), {days: 6}),
          'yyyy-MM-dd',
        );
        count += 1;
        result.push([String(count), `${data[i].date}-${endDate}`]);
        i += 6;
      }
    }
    return result;
  }
  console.log('dateList', dateList);

  const weeklyReports = useRecoilValue(reportState(new Date(selectDate)));
  console.log('weeklyReports', weeklyReports);

  const weeklyChannels = useRecoilValue(channelState(new Date(selectDate)));
  console.log('weeklyChannels', weeklyChannels);

  const handleChange = () => {
    setType(option[1].slice(0, 10));
  };

  return (
    <BoardContainer>
      <DashBoard>
        <Title DashBoard>대시보드</Title>
        <DateSelection>
          <DropDown handleChange={handleChange} optionData={dateList} />
        </DateSelection>
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
  left: ${props => (props.DashBoard ? '30px' : '')};
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
