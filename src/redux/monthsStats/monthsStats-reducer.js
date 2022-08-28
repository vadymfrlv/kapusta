import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { logoutUser } from 'redux/auth/authOperations';
import {
  getExpenseTransaction,
  getIncomeTransaction,
} from 'redux/transaction/transaction-operations';

const expenses = createReducer(
  {},
  {
    [getExpenseTransaction.fulfilled]: (_, { payload }) => payload.monthsStats,
    [logoutUser.fulfilled]: () => [],
  }
);

const incomes = createReducer(
  {},
  {
    [getIncomeTransaction.fulfilled]: (_, { payload }) => payload.monthsStats,
    [logoutUser.fulfilled]: () => [],
  }
);

export default combineReducers({
  expenses,
  incomes,
});
