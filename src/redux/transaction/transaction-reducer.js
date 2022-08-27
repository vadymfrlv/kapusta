import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  getExpenseTransaction,
  addExpenseTransaction,
  removeTransaction,
  getIncomeTransaction,
  addIncomeTransaction,
} from './transaction-operations';
// import itemsReducer from '../redux/transaction/items-reducer';

const items = createReducer([], {
  [getExpenseTransaction.fulfilled]: (_, { payload }) => payload,

  [addExpenseTransaction.fulfilled]: (state, { payload }) => [
    ...state,
    payload.transaction,
  ],

  [getIncomeTransaction.fulfilled]: (_, { payload }) => payload,

  [addIncomeTransaction.fulfilled]: (state, { payload }) => [
    ...state,
    payload.transaction,
  ],

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
  // items: itemsReducer,
  items,
  loading,
  error,
});
