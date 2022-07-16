import React, {useEffect} from 'react';
import axios from 'axios';
import * as Charts from 'recharts';
import {format, parseISO} from 'date-fns';
import styled from 'styled-components';

export default function LineChart() {
  const [dbData, setDbData] = React.useState([]);

  useEffect(() => {
    async function getData() {
      await axios
        .get('/db.json')
        .then(response => {
          const newFormat = response.data.report.daily.map((data: any) => {
            //
            return {
              IMP: data.imp,
              CLICK: data.click,
              COST: data.cost,
              CONV: data.conv,
              CONVVALUE: data.convValue,
              CTR: data.ctr,
              CVR: data.cvr,
              CPC: data.cpc,
              CPA: data.cpa,
              ROAS: data.roas,
              DATE: format(parseISO(data.date), 'MM월 dd일'),
            };
          });
          setDbData(newFormat);
        })
        .catch((error: Error) => console.log(error));
    }
    getData();
  }, []);

  return (
    <Container>
      <DropwDownContainer>
        <DropwDownButton>Select</DropwDownButton>
        <DropwDownButton>Select</DropwDownButton>
      </DropwDownContainer>

      <ChartBackground>
        <Charts.ResponsiveContainer width="100%" height="100%">
          <Charts.LineChart width={1050} height={350} data={dbData}>
            <Charts.CartesianGrid vertical={false} />
            <Charts.XAxis dataKey="DATE" padding={{left: 50, right: 50}} />
            <Charts.YAxis dataKey="ROAS" padding={{top: 50}} />
            <Charts.Tooltip />
            <Charts.Line
              type="linear"
              dataKey="CLICK"
              stroke="#8884d8"
              activeDot={{r: 5}}
              dot={false}
            />
            <Charts.Line
              type="linear"
              dataKey="ROAS"
              stroke="#82ca9d"
              activeDot={{r: 5}}
              dot={false}
            />
          </Charts.LineChart>
        </Charts.ResponsiveContainer>
      </ChartBackground>
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

const ChartBackground = styled.div`
  width: 100%;
  height: 100%;
  background: #d9d9d9;
`;

const DropwDownContainer = styled.div`
  display: flex;
  gap: 14.23px;
`;

const DropwDownButton = styled.div`
  width: 119.87px;
  height: 36.04px;
  background: #ffffff;
  border: 1px solid #b4b4b4;
  border-radius: 10px;
  text-align: center;
  line-height: 36.04px;
`;
