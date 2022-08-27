import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  getExpenseTransaction,
  addExpenseTransaction,
  removeTransaction,
  addIncomeTransaction,
  getIncomeTransaction,
} from './transaction-operations';

const items = createReducer([], {
  [getExpenseTransaction.fulfilled]: (state, { payload }) => {
    console.log(state);
    return payload;
  },
  [addExpenseTransaction.fulfilled]: (state, { payload }) => {
    console.log(payload.transaction);
    console.log(state);
    return [...state, payload.transaction];
  },

  [getIncomeTransaction.fulfilled]: (_, { payload }) => payload,
  [addIncomeTransaction.fulfilled]: (state, { payload }) => [...state, payload],

  [removeTransaction.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [getExpenseTransaction.pending]: () => true,
  [getExpenseTransaction.fulfilled]: () => false,
  [getExpenseTransaction.rejected]: () => false,

  [addExpenseTransaction.pending]: () => true,
  [addExpenseTransaction.fulfilled]: () => false,
  [addExpenseTransaction.rejected]: () => false,

  [getIncomeTransaction.pending]: () => true,
  [getIncomeTransaction.fulfilled]: () => false,
  [getIncomeTransaction.rejected]: () => false,

  [addIncomeTransaction.pending]: () => true,
  [addIncomeTransaction.fulfilled]: () => false,
  [addIncomeTransaction.rejected]: () => false,

  [removeTransaction.pending]: () => true,
  [removeTransaction.fulfilled]: () => false,
  [removeTransaction.rejected]: () => false,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [getExpenseTransaction.rejected]: setError,
  [getExpenseTransaction.pending]: () => null,

  [addExpenseTransaction.rejected]: setError,
  [addExpenseTransaction.pending]: () => null,

  [getIncomeTransaction.rejected]: setError,
  [getIncomeTransaction.pending]: () => null,

  [addIncomeTransaction.rejected]: setError,
  [addIncomeTransaction.pending]: () => null,

  [removeTransaction.rejected]: setError,
  [removeTransaction.pending]: () => null,
});

export default combineReducers({
  items,
  loading,
  error,
});
