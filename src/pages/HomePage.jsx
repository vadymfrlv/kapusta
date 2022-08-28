import { Suspense, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { DataHeader } from 'components/DataHeader/DataHeader';
import HomeNavigation from 'components/HomeNavigation/HomeNavigation';

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('expenses');
  }, []);

  return (
    <>
      <DataHeader />
      <HomeNavigation />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default HomePage;
