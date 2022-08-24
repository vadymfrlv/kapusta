import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logoutUser,
  getCurUser,
} from './authOperations';
import { changeBalance } from 'redux/balance/balanceOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      email: null,
      id: null,
      balance: 0,
    },
    sid: null,
    isLoading: false,
    error: null,
    token: null,
    refreshToken: null,

    // nane: 'transactions',
    // initialState: {
    //   income: {
    //     data: [],
    //     stats: [],
    //   },
    //   expenses: {
    //     data: [],
    //     stats: [],
    //   },
    // },
    // name: 'category',
    // initialState: {
    //   income: [],
    //   expenses: [],
    // },
  },

  extraReducers: {
    [registerUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      console.log('🚀 ~ payload', payload);
      state.isLoading = false;
      state.user = payload;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [loginUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { accessToken, refreshToken, sid, userData } = payload;
      console.log('🚀 ~ userData', userData);
      //   const { balance, ...rest } = userData;
      state.isLoading = false;
      state.user = userData;
      state.token = accessToken;
      state.refreshToken = refreshToken;
      state.sid = sid;

      //   state.balance = balance;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [getCurUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [getCurUser.fulfilled]: (state, { payload }) => {
      const { email, balance } = payload;
      state.isLoading = false;
      state.user.email = email;
      state.balance = balance;
    },
    [getCurUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [logoutUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [logoutUser.fulfilled]: state => {
      state.isLoading = false;
      state.user = {
        name: null,
        email: null,
      };
      state.token = null;
    },
    [logoutUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [changeBalance.pending]: state => {
      state.error = null;
    },
    [changeBalance.fulfilled]: (state, { payload }) => {
      state.user.balance = payload;
    },
    [changeBalance.rejected]: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export default authSlice.reducer;
