import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  getExpenseTransaction,
  getIncomeTransaction,
} from 'redux/transaction/transaction-operations';

const expenses = createReducer(
  {},
  {
    [getExpenseTransaction.fulfilled]: (_, { payload }) => payload.monthsStats,
  }
);

const incomes = createReducer(
  {},
  {
    [getIncomeTransaction.fulfilled]: (_, { payload }) => payload.monthsStats,
  }
);

export default combineReducers({
  expenses,
  incomes,
});
