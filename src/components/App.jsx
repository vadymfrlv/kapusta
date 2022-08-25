import HomePage from '../pages/HomePage';
import MainPage from '../pages/MainPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout ';
import IncomeComponent from './IncomeComponent/IncomeComponent';
import { getCurUser } from 'redux/auth/authOperations';
import { getMustCurUser, getIsAuth } from 'redux/auth/AuthSelector';

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
        <Routes>
          {/* <Route path="/" element={<SharedLayout />}> */}
          {isAuth && <Route path="income" element={<IncomeComponent />} />}
          {!isAuth && <Route index element={<MainPage />} />}
          {isAuth && <Route path="*" element={<HomePage />} />}
          {/* </Route> */}
        </Routes>
    </>
  );
};
