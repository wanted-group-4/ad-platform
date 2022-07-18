import React, {useEffect, useState} from 'react';
import axios from 'axios';
import * as Charts from 'recharts';
import {format, parseISO} from 'date-fns';
import styled from 'styled-components';
import DropDown from '../DropDown';
import {IDailyAdStatus} from '../../types/models/advertise';

type AdStatusKey =
  | 'roas'
  | 'click'
  | 'cost'
  | 'conv'
  | 'convValue'
  | 'ctr'
  | 'cvr'
  | 'cpc'
  | 'cpa'
  | 'roas';

export default function LineChart() {
  const [dbData, setDbData] = useState([]);
  const [dataKey1, setDataKey] = useState<AdStatusKey>('roas');
  const [dataKey2, setDataKey2] = useState<AdStatusKey>('click');

  function getLinebyComparingeMax(line1: AdStatusKey, line2: AdStatusKey) {
    const line1Data = dbData
      .map(dailyAdStatus => dailyAdStatus[line1])
      .sort((start, end) => end - start);

    const line2Data = dbData
      .map(dailyAdStatus => dailyAdStatus[line2])
      .sort((start, end) => end - start);

    if (line1Data[0] < line2Data[0]) return line2;
    return line1;
  }

  useEffect(() => {
    async function getData() {
      await axios
        .get('/db.json')
        .then(response => {
          const newFormat = response.data.report.daily.map(
            (data: IDailyAdStatus) => {
              return {
                imp: data.imp,
                click: data.click,
                cost: data.cost,
                conv: data.conv,
                convValue: data.convValue,
                ctr: data.ctr,
                cvr: data.cvr,
                cpc: data.cpc,
                cpa: data.cpa,
                roas: data.roas,
                date: format(parseISO(data.date), 'MM월 dd일'),
              };
            },
          );
          setDbData(newFormat);
        })
        .catch((error: Error) => console.log(error));
    }
    getData();
  }, []);

  return (
    <Container>
      <DropwDownContainer>
        <DropDown setDataKey={setDataKey} dataKey={dataKey1} />
        <DropDown setDataKey={setDataKey2} dataKey={dataKey2} />
      </DropwDownContainer>
      <Charts.ResponsiveContainer width="100%" height="100%">
        <Charts.LineChart
          margin={{left: 20}}
          width={1050}
          height={350}
          data={dbData}
        >
          <Charts.CartesianGrid vertical={false} />
          <Charts.XAxis dataKey="date" padding={{left: 50, right: 50}} />
          <Charts.YAxis
            dataKey={getLinebyComparingeMax(dataKey1, dataKey2)}
            padding={{top: 50}}
          />
          <Charts.Tooltip />
          <Charts.Line
            type="monotone"
            dataKey={dataKey1}
            stroke="#8884d8"
            activeDot={{r: 5}}
            dot={false}
          />
          <Charts.Line
            type="monotone"
            dataKey={dataKey2}
            stroke="#82ca9d"
            activeDot={{r: 5}}
            dot={false}
          />
        </Charts.LineChart>
      </Charts.ResponsiveContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1050px;
  height: 350px;
  background: #ffffff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 24px 25px;
  gap: 26.96px;
`;

const DropwDownContainer = styled.div`
  display: flex;
  gap: 14.23px;
`;
