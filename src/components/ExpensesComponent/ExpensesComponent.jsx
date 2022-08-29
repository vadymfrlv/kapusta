import React, { useState } from 'react';
import { useSelector } from 'react-redux';
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

const ExpensesComponent = () => {
  const [date, setDate] = useState(new Date());
  const loading = useSelector(isLoading);

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
          operation={getExpenseTransaction()}
          selector={getExpensesTransactions}
          location="expenses"
          date={date}
        />
        <Summary selector={expensesStats} />
      </div>
      {loading && <Loader />}
    </>
  );
};

export default ExpensesComponent;
