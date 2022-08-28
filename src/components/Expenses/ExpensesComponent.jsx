import React from 'react';
import { useSelector } from 'react-redux';
import FormTransaction from 'components/FormTransaction/FormTransaction';
import ExpenseTransactionList from 'components/ExpenseTransactionList/ExpenseTransactionList';
import options from '../../data/expensesForm.json';
import { addExpenseTransaction } from '../../redux/transaction/transaction-operations';
import { isLoading } from 'redux/transaction/transaction-selector';
import Loader from 'components/Loader/Loader';
import s from './ExpensesComponent.module.css';

const ExpensesComponent = () => {
  const loading = useSelector(isLoading);

  return (
    <div className={s.container}>
      <FormTransaction operation={addExpenseTransaction} options={options} />
      <ExpenseTransactionList />
      {loading && <Loader />}
    </div>
  );
};

export default ExpensesComponent;
