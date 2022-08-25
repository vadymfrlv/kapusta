import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { getExpenseTransaction, addExpenseTransaction } from './transaction-operations';
// import { getContacts, addContacts, removeContacts } from './contacts-operations';

const items = createReducer([], {
  [addExpenseTransaction.fulfilled]: (_, { payload }) => payload,

//   [removeContacts.fulfilled]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [getExpenseTransaction.pending]: () => true,
  [getExpenseTransaction.fulfilled]: () => false,
  [getExpenseTransaction.rejected]: () => false,

  [addExpenseTransaction.pending]: () => true,
  [addExpenseTransaction.fulfilled]: () => false,
  [addExpenseTransaction.rejected]: () => false,

//   [removeContacts.pending]: () => true,
//   [removeContacts.fulfilled]: () => false,
//   [removeContacts.rejected]: () => false,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [getExpenseTransaction.rejected]: setError,
  [getExpenseTransaction.pending]: () => null,

  [addExpenseTransaction.rejected]: setError,
  [addExpenseTransaction.pending]: () => null,

//   [removeContacts.rejected]: setError,
//   [removeContacts.pending]: () => null,
});

export default combineReducers({
  items,
  loading,
  error,
});
