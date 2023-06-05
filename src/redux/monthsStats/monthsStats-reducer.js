import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { logoutUser } from 'redux/auth/authOperations';
import months from '../../data/months.json';
import {
  addExpenseTransaction,
  addIncomeTransaction,
  getExpenseTransaction,
  getIncomeTransaction,
  removeTransaction,
} from 'redux/transaction/transaction-operations';

const expenses = createReducer({}, builder => {
  builder
    .addCase(getExpenseTransaction.fulfilled, (_, { payload }) => payload.monthsStats)
    .addCase(addExpenseTransaction.fulfilled, (state, { payload }) => {
      const index = new Date(payload.transaction.date).getMonth();
      const amount = payload.transaction.amount;
      const monthTitle = Object.keys(months)[index];
      const prevState = state[monthTitle] === 'N/A' ? 0 : state[monthTitle];
      return { ...state, [monthTitle]: prevState + amount };
    })
    .addCase(removeTransaction.fulfilled, (state, { payload }) => {
      if (payload.expensesAmount !== undefined) {
        const index = new Date(payload.expensesAmount.date).getMonth();
        const amount = payload.expensesAmount.amount;
        const monthTitle = Object.keys(months)[index];
        const prevState = state[monthTitle] === 'N/A' ? 0 : state[monthTitle];
        return { ...state, [monthTitle]: prevState - amount };
      }
    })
    .addCase(logoutUser.fulfilled, () => []);
});

const incomes = createReducer({}, builder => {
  builder
    .addCase(getIncomeTransaction.fulfilled, (_, { payload }) => payload.monthsStats)
    .addCase(addIncomeTransaction.fulfilled, (state, { payload }) => {
      const index = new Date(payload.transaction.date).getMonth();
      const amount = payload.transaction.amount;
      const monthTitle = Object.keys(months)[index];
      const prevState = state[monthTitle] === 'N/A' ? 0 : state[monthTitle];
      return { ...state, [monthTitle]: prevState + amount };
    })
    .addCase(removeTransaction.fulfilled, (state, { payload }) => {
      if (payload.incomesAmount !== undefined) {
        const index = new Date(payload.incomesAmount.date).getMonth();
        const amount = payload.incomesAmount.amount;
        const monthTitle = Object.keys(months)[index];
        const prevState = state[monthTitle] === 'N/A' ? 0 : state[monthTitle];
        return { ...state, [monthTitle]: prevState - amount };
      }
    })
    .addCase(logoutUser.fulfilled, () => []);
});

export default combineReducers({
  expenses,
  incomes,
});
