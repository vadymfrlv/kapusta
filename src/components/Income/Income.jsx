import React from 'react';
import { useSelector } from 'react-redux';
import IncomeTransactionList from 'components/IncomeTransactionList/IncomeTransactionList';
import { addIncomeTransaction } from '../../redux/transaction/transaction-operations';
import { isLoading } from 'redux/transaction/transaction-selector';
import options from '../../data/incomeForm.json';
import Loader from 'components/Loader/Loader';
import FormTransaction from 'components/FormTransaction/FormTransaction';
import s from './Income.module.css';

const IncomeComponent = () => {
  const loading = useSelector(isLoading);
  return (
    <div className={s.container}>
      <FormTransaction operation={addIncomeTransaction} options={options} />
      <IncomeTransactionList />
      {loading && <Loader />}
    </div>
  );
};

export default IncomeComponent;
