import PropTypes from 'prop-types';
import s from './ReportsTotal.module.css';
import { useTranslation } from 'react-i18next';

const ReportsTotal = ({ userExpenses, userIncome }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={s.block}>
        <p className={s.expenses}>
          {t('reports.expenses')}
          <span className={s.expensesTotal}>
            {userExpenses.expenseTotal.toFixed(2).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')}
            &nbsp; {t('general.currencyName')}
          </span>
        </p>
        <p className={s.income}>
          {t('reports.income')}
          <span className={s.incomeTotal}>
            {userIncome.incomeTotal.toFixed(2).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')}
            &nbsp; {t('general.currencyName')}
          </span>
        </p>
      </div>
    </>
  );
};

ReportsTotal.propTypes = {
  userExpenses: PropTypes.object.isRequired,
  userIncome: PropTypes.object.isRequired,
};

export default ReportsTotal;
