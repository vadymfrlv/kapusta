import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Header from 'components/Header/Header';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import s from './SharedLayout.module.css';

const SharedLayout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      <section className={pathname === '/' ? s.section : s.sectionHome}>
        <div className={s.BottomHomeCabagge}>
          <div className={s.container}>
            <div className={pathname === '/' ? s.background : s.backgroundHome}>
              {pathname === '/' && (
                <div className={s.bottomSection}>
                  <h1 className={s.title}>Kapusta</h1>
                  <p className={s.tittleText}>Smart Finance</p>
                </div>
              )}
              <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default SharedLayout;
