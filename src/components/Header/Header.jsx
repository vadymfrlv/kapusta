// import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import LogoHeader from 'components/LogoHeader/LogoHeader';

  const Header = () => {
  
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContaiener}>
         
            <LogoHeader />
       
        </div>
      </header>
    </>
  );
}
export default Header
