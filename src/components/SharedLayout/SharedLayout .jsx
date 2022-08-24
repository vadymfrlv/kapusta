import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import s from './sharedLayout.module.css';
// import s from './SharedLayout.module.css';

const SharedLayout = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <>
      <Header />
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
    </>
  );
};

export default SharedLayout;
