import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Board from './pages/Board';
import Manage from './pages/Manage';

const Router = () => {
  return (
    <Routes>
      <Route path="" element={<Board />} />
      <Route path="manage" element={<Manage />} />
    </Routes>
  );
};

export default Router;
