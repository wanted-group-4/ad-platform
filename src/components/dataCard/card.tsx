/* eslint-disable no-unused-expressions */
import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';

// import {IDailyAdStatus} from '@src/types/models/advertise';
import {useQueries} from 'react-query';
import {getReport} from '@src/api/queries';

//  IDailyAdStatus[]
function Card({info, type}: any) {
  const queryResult = useQueries([
    {
      queryKey: ['report', type],
      queryFn: () => getReport(new Date(type)),
    },
  ]);

  const {data} = queryResult[0];

  // roas,
  function calculate(weeklyInfo: any, category: any) {
    const result =
      weeklyInfo.reduce((acc: number, cur: any) => acc + cur[category], 0) / 7;
    return parseInt(String(result), 10);
  }
  // 전환수(conv), 광고비(cost) 클릭수(click), 노출수(imp), 매출(convValue)
  function calculateSum(weeklyInfo: any, category: any, method?: number) {
    let result = weeklyInfo.reduce(
      (acc: number, cur: any) => acc + cur[category],
      0,
    );
    result = String(result);
    if (result.length > 4 && method === 0) {
      result = result.slice(0, result.length - 4);
      result = Number(result);
      return `${result}만`;
    }
    return Number(result);
  }

  const [store, setStore] = useState<any>([]);
  useEffect(() => {
    if (data && info) {
      const preWeeklyInfo: any = [
        calculate(data, 'roas'),
        calculateSum(data, 'cost'),
        calculateSum(data, 'imp'),
        calculateSum(data, 'click'),
        calculateSum(data, 'conv'),
        calculateSum(data, 'convValue'),
      ];
      const weeklyInfo: any = [
        calculate(info, 'roas'),
        calculateSum(info, 'cost'),
        calculateSum(info, 'imp'),
        calculateSum(info, 'click'),
        calculateSum(info, 'conv'),
        calculateSum(info, 'convValue'),
      ];
      // [-65, 34086, 48631, -1033, -126, -2123230]
      const differenceValue: number[] = [];
      for (let i = 0; i < preWeeklyInfo.length; i += 1) {
        differenceValue.push(weeklyInfo[i] - preWeeklyInfo[i]);
      }
      setStore(differenceValue);
    }
  }, [type]);
  return (
    <Container>
      {info && data !== undefined && store !== [] ? (
        <>
          <Div>
            <Title>ROAS</Title>
            <Content>{calculate(info, 'roas')}%</Content>
            <div>{store[0]}</div>
          </Div>
          <Div>
            <Title>광고비</Title>
            <Content>{calculateSum(info, 'cost', 0)} 원</Content>
            <div>{store[1]}</div>
          </Div>
          <Div>
            <Title>노출 수</Title>
            <Content>{calculateSum(info, 'imp', 0)} 회</Content>
            <div>{store[2]}</div>
          </Div>
          <Div>
            <Title>클릭 수</Title>
            <Content>{calculateSum(info, 'click', 0)} 회</Content>
            <div>{store[3]}</div>
          </Div>
          <Div>
            <Title>전환 수</Title>
            <Content>{calculateSum(info, 'conv', 0)}회</Content>
            <div>{store[4]}</div>
          </Div>
          <Div>
            <Title>매출</Title>
            <Content>{calculateSum(info, 'convValue', 0)} 원</Content>
            <div>{store[5]}</div>
          </Div>
        </>
      ) : null}
    </Container>
  );
}
export default Card;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Div = styled.div`
  width: 200px;
  height: 200px;
  background: #ffffff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 1620px) {
    width: 150px;
    height: 150px;
  }
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: #414345;
  margin-bottom: 12px;
  @media screen and (max-width: 1620px) {
    font-size: 18px;
  }
`;
const Content = styled.div`
  font-weight: 700;
  font-size: 36px;
  color: #414345;
  margin-bottom: 12px;
  @media screen and (max-width: 1620px) {
    font-size: 27px;
  }
`;
