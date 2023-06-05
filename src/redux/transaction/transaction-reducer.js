import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  getExpenseTransaction,
  addExpenseTransaction,
  removeTransaction,
  getIncomeTransaction,
  addIncomeTransaction,
} from './transaction-operations';
import { logoutUser } from 'redux/auth/authOperations';

const expenses = createReducer([], builder => {
  builder
    .addCase(getExpenseTransaction.fulfilled, (_, { payload }) => payload.expenses)
    .addCase(addExpenseTransaction.fulfilled, (state, { payload }) => [
      ...state,
      payload.transaction,
    ])
    .addCase(removeTransaction.fulfilled, (state, { payload }) =>
      state.filter(el => el._id !== payload.id)
    )
    .addCase(logoutUser.fulfilled, () => []);
});

const incomes = createReducer([], builder => {
  builder
    .addCase(getIncomeTransaction.fulfilled, (_, { payload }) => payload.incomes)
    .addCase(addIncomeTransaction.fulfilled, (state, { payload }) => [
      ...state,
      payload.transaction,
    ])
    .addCase(removeTransaction.fulfilled, (state, { payload }) =>
      state.filter(el => el._id !== payload.id)
    )
    .addCase(logoutUser.fulfilled, () => []);
});

const loading = createReducer(false, builder => {
  builder
    .addCase(getExpenseTransaction.pending, () => true)
    .addCase(getExpenseTransaction.fulfilled, () => false)
    .addCase(getExpenseTransaction.rejected, () => false)
    .addCase(addExpenseTransaction.pending, () => true)
    .addCase(addExpenseTransaction.fulfilled, () => false)
    .addCase(addExpenseTransaction.rejected, () => false)
    .addCase(getIncomeTransaction.pending, () => true)
    .addCase(getIncomeTransaction.fulfilled, () => false)
    .addCase(getIncomeTransaction.rejected, () => false)
    .addCase(addIncomeTransaction.pending, () => true)
    .addCase(addIncomeTransaction.fulfilled, () => false)
    .addCase(addIncomeTransaction.rejected, () => false)
    .addCase(removeTransaction.pending, () => true)
    .addCase(removeTransaction.fulfilled, () => false)
    .addCase(removeTransaction.rejected, () => false);
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, builder => {
  builder
    .addCase(getExpenseTransaction.rejected, setError)
    .addCase(getExpenseTransaction.pending, () => null)
    .addCase(addExpenseTransaction.rejected, setError)
    .addCase(addExpenseTransaction.pending, () => null)
    .addCase(getIncomeTransaction.rejected, setError)
    .addCase(getIncomeTransaction.pending, () => null)
    .addCase(addIncomeTransaction.rejected, setError)
    .addCase(addIncomeTransaction.pending, () => null)
    .addCase(removeTransaction.rejected, setError)
    .addCase(removeTransaction.pending, () => null);
});

export default combineReducers({
  expenses,
  incomes,
  loading,
  error,
});
