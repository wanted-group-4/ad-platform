import React, {useEffect} from 'react';
import axios from 'axios';
import * as Charts from 'recharts';
import {format, parseISO} from 'date-fns';

export default function LineChart() {
<<<<<<< HEAD
  return <div>LineChart</div>;
=======
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
        .catch(error => console.log(error));
    }
    getData();
  }, []);

  return (
    <Charts.ResponsiveContainer width="100%" height="100%">
      <Charts.LineChart
        width={500}
        height={300}
        data={dbData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <Charts.CartesianGrid vertical={false} />
        <Charts.XAxis dataKey="DATE" padding={{left: 50, right: 50}} />
        <Charts.YAxis dataKey="ROAS" />
        <Charts.Tooltip />
        <Charts.Line
          type="linear"
          dataKey="CLICK"
          stroke="#2d23ed"
          activeDot={{r: 5}}
          dot={false}
        />
        <Charts.Line
          type="linear"
          dataKey="ROAS"
          stroke="#19f46d"
          activeDot={{r: 5}}
          dot={false}
        />
      </Charts.LineChart>
    </Charts.ResponsiveContainer>
  );
>>>>>>> eaa8d85 (feat: recharts mockdata 와 연결 & date format 변경)
}
