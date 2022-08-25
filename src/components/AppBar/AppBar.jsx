import UserMenuHeader from '../UserMenuHeader/UserMenuHeader';
import Header from '../Header/Header'
import  authSelectors  from '../../redux/auth/auth-selectors'
import { useSelector } from 'react-redux'

export default function AppBar() {

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

    return (
        <>
            {isLoggedIn ? <UserMenuHeader /> : <Header />}
        </>
    )
}