// import { createReducer, combineReducers } from '@reduxjs/toolkit';
// import {
//   getExpenseTransaction,
//   addExpenseTransaction,
//   addIncomeTransaction,
//   getIncomeTransaction,
// } from './transaction-operations';

// const expense = createReducer([], {
//   [getExpenseTransaction.fulfilled]: (_, { payload }) => payload.expenses,
//   [addExpenseTransaction.fulfilled]: (state, { payload }) => [
//     ...state,
//     payload.transaction,
//   ],
// });

// const income = createReducer([], {
//   [getIncomeTransaction.fulfilled]: (_, { payload }) => payload.incomes,
//   [addIncomeTransaction.fulfilled]: (state, { payload }) => [
//     ...state,
//     payload.transaction,
//   ],
// });

// export default combineReducers({
//   expense,
//   income,
// });
