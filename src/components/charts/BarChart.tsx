import React from 'react';
import {
  BarChart as BarChartGraph,
  Bar as BarGraph,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
// import {IMediaStatus} from '@src/types/models/mediaStatus';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function BarChart() {
  let tooltipId: string;
  const CustomTooltip = React.useCallback(({active, payload}: any) => {
    if (!active || !payload) return null;
    return payload.map(
      (pay: any) =>
        pay.dataKey === tooltipId && (
          <div key={pay.dataKey} style={{background: 'gray'}}>
            {pay.value}
          </div>
        ),
    );
  }, []);

  return (
    <ResponsiveContainer width="80%" height={400}>
      <BarChartGraph
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        stackOffset="expand"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" type="category" />
        <YAxis
          type="number"
          tickFormatter={tick => `${tick * 100}%`}
          ticks={[0.2, 0.4, 0.6, 0.8, 1]}
        />
        <Tooltip content={CustomTooltip} />
        <Legend />
        <BarGraph
          dataKey="pv"
          stackId="a"
          fill="#8884d8"
          onMouseOver={() => {
            tooltipId = 'pv';
          }}
        />
        <BarGraph
          dataKey="uv"
          stackId="a"
          fill="#82ca9d"
          onMouseOver={() => {
            tooltipId = 'uv';
          }}
        />
        <BarGraph
          dataKey="amt"
          stackId="a"
          fill="#86304d"
          onMouseOver={() => {
            tooltipId = 'amt';
          }}
        />
      </BarChartGraph>
    </ResponsiveContainer>
  );
}
