import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import UserMenuHeader from 'components/UserMenuHeader/UserMenuHeader';
import { getIsAuth } from 'redux/auth/AuthSelector';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import s from './SharedLayout.module.css';

const SharedLayout = () => {
  const { pathname } = useLocation();
  const isLoggedIn = useSelector(getIsAuth);

  return (
    <>
      {isLoggedIn ? <UserMenuHeader /> : <Header />}
      <section className={pathname === '/' ? s.section : s.sectionHome}>
        {pathname === '/' && (
          <div className={s.bottomSection}>
            <h1 className={s.title}>Kapusta</h1>
            <p className={s.tittleText}>Smart Finance</p>
          </div>
        )}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </section>
      <ToastContainer />
    </>
  );
};

export default SharedLayout;
