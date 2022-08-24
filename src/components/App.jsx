import HomePage from '../pages/HomePage';
import MainPage from '../pages/MainPage';

import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout ';

import IncomeComponent from './IncomeComponent/IncomeComponent';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="expenses" element={<HomePage />} />
        <Route path="income" element={<IncomeComponent />} />
      </Route>
    </Routes>
  );
};
