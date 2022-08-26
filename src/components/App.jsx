import HomePage from '../pages/HomePage';
import MainPage from '../pages/MainPage';
import ReportsPage from 'pages/ReportsPage';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';

import { Navigate, Route, Routes } from 'react-router-dom';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SharedLayout from './SharedLayout/SharedLayout ';
import IncomeComponent from './IncomeComponent/IncomeComponent';

import { getCurUser } from 'redux/auth/authOperations';

import { getMustCurUser } from 'redux/auth/AuthSelector';
import { getIsAuth } from 'redux/auth/AuthSelector';

import AppBar from './AppBar/AppBar';

export const App = () => {

 
  const isAuth = useSelector(getIsAuth);



  const dispatch = useDispatch();
  const mustCurUser = useSelector(getMustCurUser);

  useEffect(() => {
    mustCurUser && dispatch(getCurUser());
  }, [dispatch, mustCurUser]);
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<SharedLayout />}>

          <Route
            index
            element={<PublicRoute restricted component={MainPage} />}
          />
          <Route
            path="/expenses"
            element={<PrivateRoute component={HomePage} />}
          />
          <Route
            path="income"
            element={<PrivateRoute component={IncomeComponent} />}
          />
          <Route
            path="reports"
            element={<PrivateRoute component={ReportsPage} />}
          />

        </Route>
        <Route path="*" element={<Navigate to="/" />} />

        {/* {isAuth && <Route path="income" element={<IncomeComponent />} />}
        {!isAuth && <Route index element={<MainPage />} />}
        {isAuth && <Route path="*" element={<HomePage />} />} */}
      </Routes>
    </>
  );
};
