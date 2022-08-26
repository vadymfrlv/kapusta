import AppBar from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import s from './SharedLayout.module.css';

const SharedLayout = () => {
  const { pathname } = useLocation();

  return (
    <>
      {/* <AppBar /> */}
      <section className={pathname === '/' ? s.section : s.sectionHome}>
        {pathname === '/' && (
          <div className={s.bottomSection}>
            <h1 className={s.title}>Kapusta</h1>
            <p className={s.tittleText}>Smart Finance</p>
          </div>
        )}
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </section>
      {/* <ToastContainer /> */}
    </>
  );
};

export default SharedLayout;
