import { Link, useLocation } from 'react-router-dom';
import s from './HomeNavigation.module.css';

function HomeNavigation() {
  const location = useLocation();
  return (
    <div className={s.container}>
      <Link
        to="expenses"
        className={
          location.pathname === '/transactions/expenses' ? s.activeLink : s.link
        }
      >
        Expenses
      </Link>
      <Link
        to="income"
        className={
          location.pathname === '/transactions/expenses' ? s.link : s.activeLink
        }
      >
        Income
      </Link>
    </div>
  );
}

export default HomeNavigation;
