import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  getExpenseTransaction,
  getIncomeTransaction,
} from 'redux/transaction/transaction-operations';

const items = createReducer([], {
  [getExpenseTransaction.fulfilled]: (_, { payload }) => payload.monthsStats,
  [getIncomeTransaction.fulfilled]: (_, { payload }) => payload.monthsStats,
});

export default combineReducers({
  items,
});
