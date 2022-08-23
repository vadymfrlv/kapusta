import { Balance } from './Balance/Balance';
import HomePage from 'pages/HomePage/HomePage';
import MainPage from 'pages/MainPage/MainPage';

// Misha
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout ';
import ExpensesComponent from './ExpensesComponent/ExpensesComponent';
import IncomeComponent from './IncomeComponent/IncomeComponent';

import Header from './Header/Header';

export const App = () => {
  return (
    <div>
      <Header />
      <MainPage />

      <Balance />

      <Routes>
        <Route element={<SharedLayout />}>
          <Route index element={<ExpensesComponent />} />
          <Route path="income" element={<IncomeComponent />} />
        </Route>
      </Routes>
    </div>
  );
};
