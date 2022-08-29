import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import options from '../../data/expensesForm.json';
import {
  addExpenseTransaction,
  getExpenseTransaction,
} from '../../redux/transaction/transaction-operations';
import { getExpensesTransactions, isLoading } from 'redux/transaction/transaction-selector';
import { expensesStats } from 'redux/monthsStats/monthsStats-selector';
import Loader from 'components/Loader/Loader';
import { Summary } from 'components/Summary/Summary';
import FormTransaction from 'components/FormTransaction/FormTransaction';
import TransactionList from 'components/TransactionList/TransactionList';
import s from './ExpensesComponent.module.css';
import { getEmailUser } from 'redux/auth/AuthSelector';

const ExpensesComponent = () => {
  const [date, setDate] = useState(new Date());
  const loading = useSelector(isLoading);
  const email = useSelector(getEmailUser);
  const transactions = useSelector(getExpensesTransactions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (email) dispatch(getExpenseTransaction());
    // eslint-disable-next-line
  }, [transactions.length, email]);

  return (
    <>
      <FormTransaction
        operation={addExpenseTransaction}
        options={options}
        date={date}
        setDate={setDate}
      />
      <div className={s.transactions}>
        <TransactionList
          location="expenses"
          transactionsArray={transactions.filter(
            el => el.date === date.toISOString().slice(0, 10)
          )}
        />
        <Summary selector={expensesStats} />
      </div>
      {loading && <Loader />}
    </>
  );
};

export default ExpensesComponent;
