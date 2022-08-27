import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  getExpenseTransaction,
  // getExpenseMonthsStats,
  addExpenseTransaction,
  addExpenseBalance,
  removeTransaction,
  getIncomeTransaction,
  // getIncomeMonthsStats,
  addIncomeTransaction,
  addIncomeBalance,
} from './transaction-operations';
// import itemsReducer from '../redux/transaction/items-reducer';

const items = createReducer([], {
  [getExpenseTransaction.fulfilled]: (_, { payload }) => payload,
  // [getExpenseMonthsStats.fulfilled]: (_, { payload }) => payload,

  [addExpenseTransaction.fulfilled]: (state, { payload }) => [
    ...state,
    payload.transaction,
  ],
  [addExpenseBalance.fulfilled]: (state, { payload }) => [...state, payload],

  [getIncomeTransaction.fulfilled]: (_, { payload }) => payload,
  // [getIncomeMonthsStats.fulfilled]: (_, { payload }) => payload,

  [addIncomeTransaction.fulfilled]: (state, { payload }) => [...state, payload],
  [addIncomeBalance.fulfilled]: (state, { payload }) => [...state, payload],

  [removeTransaction.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [getExpenseTransaction.pending]: () => true,
  [getExpenseTransaction.fulfilled]: () => false,
  [getExpenseTransaction.rejected]: () => false,

  // [getExpenseMonthsStats.pending]: () => true,
  // [getExpenseMonthsStats.fulfilled]: () => false,
  // [getExpenseMonthsStats.rejected]: () => false,

  [addExpenseTransaction.pending]: () => true,
  [addExpenseTransaction.fulfilled]: () => false,
  [addExpenseTransaction.rejected]: () => false,

  [addExpenseBalance.pending]: () => true,
  [addExpenseBalance.fulfilled]: () => false,
  [addExpenseBalance.rejected]: () => false,

  [getIncomeTransaction.pending]: () => true,
  [getIncomeTransaction.fulfilled]: () => false,
  [getIncomeTransaction.rejected]: () => false,

  // [getIncomeMonthsStats.pending]: () => true,
  // [getIncomeMonthsStats.fulfilled]: () => false,
  // [getIncomeMonthsStats.rejected]: () => false,

  [addIncomeTransaction.pending]: () => true,
  [addIncomeTransaction.fulfilled]: () => false,
  [addIncomeTransaction.rejected]: () => false,

  [addIncomeBalance.pending]: () => true,
  [addIncomeBalance.fulfilled]: () => false,
  [addIncomeBalance.rejected]: () => false,

  [removeTransaction.pending]: () => true,
  [removeTransaction.fulfilled]: () => false,
  [removeTransaction.rejected]: () => false,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [getExpenseTransaction.rejected]: setError,
  [getExpenseTransaction.pending]: () => null,

  // [getExpenseMonthsStats.rejected]: setError,
  // [getExpenseMonthsStats.pending]: () => null,

  [addExpenseTransaction.rejected]: setError,
  [addExpenseTransaction.pending]: () => null,

  [addExpenseBalance.rejected]: setError,
  [addExpenseBalance.pending]: () => null,

  [getIncomeTransaction.rejected]: setError,
  [getIncomeTransaction.pending]: () => null,

  // [getIncomeMonthsStats.rejected]: setError,
  // [getIncomeMonthsStats.pending]: () => null,

  [addIncomeTransaction.rejected]: setError,
  [addIncomeTransaction.pending]: () => null,

  [addIncomeBalance.rejected]: setError,
  [addIncomeBalance.pending]: () => null,

  [removeTransaction.rejected]: setError,
  [removeTransaction.pending]: () => null,
});

export default combineReducers({
  // items: itemsReducer,
  items,
  loading,
  error,
});
