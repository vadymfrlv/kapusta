import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { getExpenseTransaction, addExpenseTransaction, removeExpenseTransaction, addIncomeTransaction } from './transaction-operations';

const items = createReducer([], {
  [getExpenseTransaction.fulfilled]: (_, { payload }) => payload,
  [addExpenseTransaction.fulfilled]: (state, { payload }) => [
    ...state,
    payload,
  ],

  [addIncomeTransaction.fulfilled]: (state, { payload }) => [...state, payload],

  [removeExpenseTransaction.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [getExpenseTransaction.pending]: () => true,
  [getExpenseTransaction.fulfilled]: () => false,
  [getExpenseTransaction.rejected]: () => false,

  [addExpenseTransaction.pending]: () => true,
  [addExpenseTransaction.fulfilled]: () => false,
  [addExpenseTransaction.rejected]: () => false,


  [addIncomeTransaction.pending]: () => true,
  [addIncomeTransaction.fulfilled]: () => false,
  [addIncomeTransaction.rejected]: () => false,

  [removeExpenseTransaction.pending]: () => true,
  [removeExpenseTransaction.fulfilled]: () => false,
  [removeExpenseTransaction.rejected]: () => false,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [getExpenseTransaction.rejected]: setError,
  [getExpenseTransaction.pending]: () => null,

  [addExpenseTransaction.rejected]: setError,
  [addExpenseTransaction.pending]: () => null,

  [addIncomeTransaction.rejected]: setError,
  [addIncomeTransaction.pending]: () => null,

  [removeExpenseTransaction.rejected]: setError,
  [removeExpenseTransaction.pending]: () => null,
});

export default combineReducers({
  items,
  loading,
  error,
});
