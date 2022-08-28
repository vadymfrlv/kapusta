import { createSlice } from '@reduxjs/toolkit';
import { changeBalance } from './balanceOperations';
import { getCurUser } from 'redux/auth/authOperations';
import {
  addExpenseTransaction,
  addIncomeTransaction,
} from 'redux/transaction/transaction-operations';

const balanceSlice = createSlice({
  name: 'balance',
  initialState: {
    isLoading: false,
    balance: '',
    error: null,
  },

  extraReducers: {
    [changeBalance.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [changeBalance.fulfilled]: (state, { payload }) => {
      state.balance = payload;
      state.isLoading = false;
    },
    [changeBalance.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [getCurUser.fulfilled]: (state, { payload }) => {
      const { balance } = payload;
      state.isLoading = false;
      state.balance = balance;
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
  },
});

export default balanceSlice.reducer;
