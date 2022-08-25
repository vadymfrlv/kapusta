import { createAsyncThunk } from "@reduxjs/toolkit";
// import { getContactsApi, addContactApi, deleteContactApi } from "../../api/connectionsAPI";
import { getExpenseTransactionApi, addExpenseTransactionApi } from "../../services/transactionAPI";

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

export const addExpenseTransaction  = createAsyncThunk(
  'addExpenseTransaction',
  async (transaction, rejectWithValue) => {
    try {
      const newTransaction = await addExpenseTransactionApi(transaction);

      return newTransaction;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const removeContacts = createAsyncThunk(
//   'deleteContacts',
//   async (id, { rejectWithValue }) => {
//     try {
//       await deleteContactApi (id);
//       return id;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );