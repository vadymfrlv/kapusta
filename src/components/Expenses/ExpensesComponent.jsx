import React from 'react';
import s from './ExpensesComponent.module.css';
import FormTransaction from 'components/FormTransaction/FormTransaction';
import ExpenseTransactionList from 'components/ExpenseTransactionList/ExpenseTransactionList';
import Loader from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { isLoading } from 'redux/transaction/transaction-selector';

const ExpensesComponent = () => {
  const loading = useSelector(isLoading);

  return (
    <div className={s.container}>
      <FormTransaction />
      <ExpenseTransactionList />
      {loading && <Loader />}
    </div>
  );
};

export default ExpensesComponent;
