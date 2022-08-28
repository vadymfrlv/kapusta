import { createSlice } from '@reduxjs/toolkit';
import { changeBalance } from './balanceOperations';

import { getCurUser, logoutUser, loginUser } from 'redux/auth/authOperations';

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

  extraReducers: {
    [loginUser.fulfilled]: (state, { payload }) => {
      console.log('🚀 ~ payload', payload);
      state.balance = payload.userData.balance;
    },
    [getCurUser.fulfilled]: (state, { payload }) => {
      const { balance } = payload;
      state.isLoading = false;
      state.balance = balance;
    },
    [changeBalance.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [changeBalance.fulfilled]: (state, { payload }) => {
      state.balance = Number(payload.newBalance);

      state.isLoading = false;
    },
    [changeBalance.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [addExpenseTransaction.fulfilled]: (state, { payload }) => {
      state.error = null;
      state.isLoading = false;
      state.balance = payload.newBalance;
    },
    [addIncomeTransaction.fulfilled]: (state, { payload }) => {
      state.error = null;
      state.isLoading = false;
      state.balance = payload.newBalance;
    },
    [removeTransaction.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.balance = payload.newBalance;
    },

    [logoutUser.fulfilled]: state => (state.balance = 0),
  },
});

export default balanceSlice.reducer;
