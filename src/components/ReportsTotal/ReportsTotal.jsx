import PropTypes from 'prop-types';
import s from './ReportsTotal.module.css';

const ReportsTotal = ({ userExpenses, userIncome }) => {
  return (
    <>
      {console.log(userIncome)}
      <div className={s.block}>
        <p className={s.expenses}>
          Expenses:
          <span className={s.expensesTotal}>
            {userExpenses.expenseTotal
              .toFixed(2)
              .replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')}
            грн.
          </span>
        </p>
        <p className={s.income}>
          Income:
          <span className={s.incomeTotal}>
            {userIncome.incomeTotal
              .toFixed(2)
              .replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')}
            грн.
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
