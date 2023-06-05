import { createSlice } from '@reduxjs/toolkit';
import { changeBalance } from './balanceOperations';

import { getCurUser, loginUser, registerUser } from 'redux/auth/authOperations';

import {
  addExpenseTransaction,
  addIncomeTransaction,
} from 'redux/transaction/transaction-operations';
import { removeTransaction } from 'redux/transaction/transaction-operations';

const balanceSlice = createSlice({
  name: 'balance',
  initialState: {
    isLoading: false,
    balance: 0,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.balance = payload.userData.balance;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.balance = payload.userData.balance;
      })
      .addCase(getCurUser.fulfilled, (state, { payload }) => {
        const { balance } = payload;
        state.isLoading = false;
        state.balance = balance;
      })
      .addCase(changeBalance.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(changeBalance.fulfilled, (state, { payload }) => {
        state.balance = Number(payload.newBalance);
        state.isLoading = false;
      })
      .addCase(changeBalance.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(addExpenseTransaction.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoading = false;
        state.balance = payload.newBalance;
      })
      .addCase(addIncomeTransaction.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoading = false;
        state.balance = payload.newBalance;
      })
      .addCase(removeTransaction.fulfilled, (state, { payload }) => {
        state.balance = payload.balance;
      });
  },
});

export default balanceSlice.reducer;
