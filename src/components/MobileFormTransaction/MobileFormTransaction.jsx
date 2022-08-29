import FormTransaction from 'components/FormTransaction/FormTransaction';
import optionsExpense from '../../data/expensesForm.json';
import optionsIncome from '../../data/incomeForm.json';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  addExpenseTransaction,
  addIncomeTransaction,
} from '../../redux/transaction/transaction-operations';
import s from './MobileFormTransaction.module.css';
const MobileFormTransaction = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <button className={s.btnPrevPagemob} onClick={e => navigate(-1)}></button>
      {location.pathname === '/transactions/expenses' && (
        <FormTransaction
          operation={addExpenseTransaction}
          options={optionsExpense}
        />
      )}

      {location.pathname === '/transactions/income' && (
        <FormTransaction
          operation={addIncomeTransaction}
          options={optionsIncome}
        />
      )}
    </>
  );
};
export default MobileFormTransaction;
