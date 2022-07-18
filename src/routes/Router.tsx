import React, {lazy} from 'react';
import {Routes, Route} from 'react-router-dom';

const Board = lazy(() => import('@pages/Board'));
const Manage = lazy(() => import('@pages/Manage'));

export default function Router() {
  return (
    <Routes>
      <Route path="" element={<Board />} />
      <Route path="manage" element={<Manage />} />
    </Routes>
  );
}
