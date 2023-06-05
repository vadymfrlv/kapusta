import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, logoutUser, getCurUser, refreshToken } from './authOperations';

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

  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { accessToken, refreshToken, sid, userData } = payload;
        state.isLoading = false;
        state.user.email = userData.email;
        state.user.id = userData.id;
        state.token = accessToken;
        state.refreshToken = refreshToken;
        state.sid = sid;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(loginUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { accessToken, refreshToken, sid, userData } = payload;
        state.isLoading = false;
        state.user.email = userData.email;
        state.user.id = userData.id;
        state.token = accessToken;
        state.refreshToken = refreshToken;
        state.sid = sid;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getCurUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCurUser.fulfilled, (state, { payload }) => {
        const { email } = payload;
        state.isLoading = false;
        state.user.email = email;
      })
      .addCase(getCurUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(logoutUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.isLoading = false;
        state.user.id = null;
        state.user.email = null;
        state.token = null;
        state.refreshToken = null;
        state.sid = null;
      })
      .addCase(logoutUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(refreshToken.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(refreshToken.fulfilled, (state, { payload }) => {
        const { token, refreshToken, sid } = payload;
        state.isLoading = false;
        state.token = token;
        state.refreshToken = refreshToken;
        state.sid = sid;
      })
      .addCase(refreshToken.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { googleAuth } = authSlice.actions;
export default authSlice.reducer;
