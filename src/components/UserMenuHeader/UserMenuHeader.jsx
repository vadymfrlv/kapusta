import { Link } from 'react-router-dom';
import styles from '../Header/Header.module.css';
import LogoHeader from '../LogoHeader/LogoHeader';
import UserLogOut from './UserLogOut/UserLogOut';

export default function UserMenuHeader() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContaiener}>
          <Link to="/" alt="homepage">
            <LogoHeader />
          </Link>
          <UserLogOut />
        </div>
      </header>
    </>
  );
}