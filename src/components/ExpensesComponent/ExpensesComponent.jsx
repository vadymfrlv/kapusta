import React from 'react';
import { Link } from 'react-router-dom';
import s from './ExpensesComponent.module.css';
import FormTransaction from 'components/FormTransaction/FormTransaction';
import ExpenseTransactionList from 'components/ExpenseTransactionListComponent/ExpenseTransactionList';


const ExpensesComponent = () => {

  return (
    <div className={s.componentContainer}>
      <div className={s.linkContainer}>
        <Link to="/expenses" className={s.activeLink}>
          Expenses
        </Link>
        <Link to="/income" className={s.link}>
          Income
        </Link>
      </div>

      <div className={s.container}>
        <FormTransaction />
        <ExpenseTransactionList />
      </div>
    </div>
  );
};

export default ExpensesComponent;
