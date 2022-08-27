import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  getExpenseMonthsStats,
  getIncomeMonthsStats,
} from './monthsStats-operations';

const items = createReducer([], {
  [getExpenseMonthsStats.fulfilled]: (_, { payload }) => payload,
  [getIncomeMonthsStats.fulfilled]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [getExpenseMonthsStats.pending]: () => true,
  [getExpenseMonthsStats.fulfilled]: () => false,
  [getExpenseMonthsStats.rejected]: () => false,

  [getIncomeMonthsStats.pending]: () => true,
  [getIncomeMonthsStats.fulfilled]: () => false,
  [getIncomeMonthsStats.rejected]: () => false,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [getExpenseMonthsStats.rejected]: setError,
  [getExpenseMonthsStats.pending]: () => null,

  [getIncomeMonthsStats.rejected]: setError,
  [getIncomeMonthsStats.pending]: () => null,
});

export default combineReducers({
  items,
  loading,
  error,
});