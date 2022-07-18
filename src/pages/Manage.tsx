import React from 'react';
import {QueryClientProvider, QueryClient} from 'react-query';

import {ManageList} from '@src/components/manage';

export default function Manage() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ManageList />
    </QueryClientProvider>
  );
}
