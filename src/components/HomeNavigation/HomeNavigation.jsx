import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import s from './HomeNavigation.module.css';

function HomeNavigation() {
  const { t } = useTranslation();

  const location = useLocation();
  return (
    <div className={s.container}>
      <Link
        to="expenses"
        className={
          location.pathname === '/transactions/expenses' ? s.activeLink : s.link
        }
      >
        {t('nav.expenses')}
      </Link>
      <Link
        to="income"
        className={
          location.pathname === '/transactions/income' ? s.activeLink : s.link
        }
      >
        {t('nav.income')}
      </Link>
    </div>
  );
}

export default HomeNavigation;
