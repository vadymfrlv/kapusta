import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logoutUser,
  getCurUser,
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
      const { balance, ...rest } = userData;
      state.isLoading = false;
      state.user = rest;
      state.token = accessToken;
      state.refreshToken = refreshToken;
      state.sid = sid;
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
      state.isLoading = false;
      state.user = payload;
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
  },
});

export default authSlice.reducer;
