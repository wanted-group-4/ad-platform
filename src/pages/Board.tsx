import React, {useState} from 'react';
import {useQuery, useQueryClient} from 'react-query';

import {getReport, getChannel} from '@src/api/queries';
import {IDailyAdStatus} from '../types/models/advertise';
import {IMediaStatus} from '../types/models/mediaStatus';

export default function Board() {
  const [date, setDate] = useState('2022-02-01');
  const queryClient = useQueryClient();
  const {
    isLoading: isReportLoading,
    isError: isReportError,
    data: reportData,
    error: reportError,
  } = useQuery<boolean, boolean, IDailyAdStatus[], [string, string]>(
    ['report', date],
    () => getReport(new Date(date)),
  );
  const {
    isLoading: isChannelLoading,
    isError: isChannelError,
    data: channelData,
    error: channelError,
  } = useQuery<boolean, boolean, IMediaStatus[], [string, string]>(
    ['channel', date],
    () => getChannel(new Date(date)),
  );
  const handleDate = () => {
    setDate(() => '2022-02-10');
    queryClient.invalidateQueries('report');
    queryClient.invalidateQueries('channel');
  };
  if (reportData) console.log('reportData', reportData[0]);
  if (channelData) console.log('channelData', channelData[0]);

  return (
    <div>
      {!isChannelLoading &&
        !isReportLoading &&
        (isChannelError || isReportError ? (
          <div>
            Error:
            {reportError}
            {channelError}
          </div>
        ) : (
          <>
            <h1>hello</h1>
            <p>imp: {reportData && reportData[0].imp}</p>
            <p>channel: {channelData && channelData[0].channel}</p>
            <button type="button" onClick={handleDate} onKeyDown={handleDate}>
              2022-02-10
            </button>
          </>
        ))}
    </div>
  );
}
