import { Link } from 'react-router-dom';
import UserLogOut from 'components/UserLogOut/UserLogOut';
import styles from './Header.module.css';
import { getIsAuth } from 'redux/auth/AuthSelector';
import { useSelector } from 'react-redux';

const Header = () => {
  const isLoggedIn = useSelector(getIsAuth);
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Link to="/" alt="homepage">
            <span className={styles.link} aria-label="logo"></span>
          </Link>
          {isLoggedIn && <UserLogOut />}
        </div>
      </header>
    </>
  );
};
export default Header;
