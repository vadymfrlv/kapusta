import { Auth } from 'components/Auth/Auth';
import { useSelector } from 'react-redux';
import { getIsAuth } from 'redux/auth/AuthSelector';

const MainPage = () => {
  const isAuth = useSelector(getIsAuth);
  return <>{!isAuth && <Auth />}</>;
};
export default MainPage;
