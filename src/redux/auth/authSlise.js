import { createSlice } from '@reduxjs/toolkit';

import {
  registerUser,
  loginUser,
  logoutUser,
  getCurUser,
  refreshToken,
} from './authOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      email: null,
      id: null,
    },
    sid: null,
    isLoading: false,
    error: null,
    token: null,
    refreshToken: null,
  },
  reducers: {
    googleAuth(state, { payload }) {
      return { ...state, ...payload };
    },
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
        id: null,
        email: null,
        balance: 0,
      };
      state.token = null;
      state.refreshToken = null;
      state.sid = null;
    },
    [logoutUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    // [changeBalance.pending]: state => {
    //   state.error = null;
    // },
    // [changeBalance.fulfilled]: (state, { payload }) => {
    //   state.user.balance = payload;
    // },
    // [changeBalance.rejected]: (state, { payload }) => {
    //   state.error = payload;
    // },
    [refreshToken.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [refreshToken.fulfilled]: (state, { payload }) => {
      const { token, refreshToken, sid } = payload;
      state.isLoading = false;
      state.token = token;
      state.refreshToken = refreshToken;
      state.sid = sid;
    },
    [refreshToken.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { googleAuth } = authSlice.actions;
export default authSlice.reducer;
