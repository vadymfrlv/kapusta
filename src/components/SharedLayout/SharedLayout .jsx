import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import s from './sharedLayout.module.css';
// import s from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <section className={s.section}>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </section>
    </>
  );
};

export default SharedLayout;
