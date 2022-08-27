import { createAsyncThunk } from '@reduxjs/toolkit';
// import { getContactsApi, addContactApi, deleteContactApi } from "../../api/connectionsAPI";
import {
  getExpenseTransactionApi,
  addExpenseTransactionApi,
  deleteTransactionApi,
  getIncomeTransactionApi,
  addIncomeTransactionApi,
} from '../../services/transactionAPI';

export const getExpenseTransaction = createAsyncThunk(
  'getExpenseTransaction',
  async (_, thunkApi) => {
    try {
      const transaction = await getExpenseTransactionApi();
      return transaction;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addExpenseTransaction = createAsyncThunk(
  'addExpenseTransaction',
  async (transaction, rejectWithValue) => {
    try {
      const newTransaction = await addExpenseTransactionApi(transaction);
      console.log(newTransaction);
      return newTransaction;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeTransaction = createAsyncThunk(
  'deleteTransaction',
  async (id, { rejectWithValue }) => {
    try {
      await deleteTransactionApi(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getIncomeTransaction = createAsyncThunk(
  'getIncomeTransaction',
  async (_, thunkApi) => {
    try {
      const transaction = await getIncomeTransactionApi();
      return transaction;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addIncomeTransaction = createAsyncThunk(
  'addIncomeTransaction',
  async (transaction, rejectWithValue) => {
    try {
      const newTransaction = await addIncomeTransactionApi(transaction);

      return newTransaction;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
