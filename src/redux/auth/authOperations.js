import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getCurUserApi,
  getLoginApi,
  getRegisterApi,
  logoutUserApi,
} from '../../services/authApi';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, thunkApi) => {
    try {
      const registerUserData = await getRegisterApi(userData);

      return registerUserData;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (userData, thunkApi) => {
    try {
      const loginUserData = await getLoginApi(userData);
      return loginUserData;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkApi) => {
    try {
      const logoutUserData = await logoutUserApi();
      return logoutUserData;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getCurUser = createAsyncThunk(
  'auth/getCurUser',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { token } = getState().auth;
      const curUserData = await getCurUserApi(token);
      return curUserData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
