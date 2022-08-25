import PropTypes from 'prop-types';
import s from './ReportsTotal.module.css';

const ReportsTotal = ({ userExpenses, userIncomes }) => {
  return (
    <>
      <div className={s.block}>
        <p className={s.expenses}>
          Expenses:
          <span className={s.expensesTotal}>
            {userExpenses.expenseTotal.toFixed(2)} грн.
          </span>
        </p>
        <p className={s.income}>
          Income:
          <span className={s.incomeTotal}>
            {userIncomes.incomeTotal.toFixed(2)} грн.
          </span>
        </p>
      </div>
    </>
  );
};

ReportsTotal.propTypes = {
  userExpenses: PropTypes.object.isRequired,
  userIncomes: PropTypes.object.isRequired,
};

export default ReportsTotal;
