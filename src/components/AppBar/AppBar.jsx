import UserMenuHeader from '../UserMenuHeader/UserMenuHeader';
import Header from '../Header/Header';
import { useSelector } from 'react-redux';
import { getIsAuth } from 'redux/auth/AuthSelector';

export default function AppBar() {
  const isLoggedIn = useSelector(getIsAuth);

  return <>{isLoggedIn ? <UserMenuHeader /> : <Header />}</>;
}
