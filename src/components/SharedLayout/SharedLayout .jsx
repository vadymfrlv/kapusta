import AppBar from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import s from './sharedLayout.module.css';
// import s from './SharedLayout.module.css';

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
    </>
  );
};

export default SharedLayout;
