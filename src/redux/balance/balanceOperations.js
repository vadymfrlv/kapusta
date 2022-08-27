import { createAsyncThunk } from '@reduxjs/toolkit';
import { changeBalanceApi } from '../../services/balanceApi';

export const changeBalance = createAsyncThunk(
  'balance/change',
  async (data, thunkApi) => {
    try {
      const balance = await changeBalanceApi(data);
      return balance;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
