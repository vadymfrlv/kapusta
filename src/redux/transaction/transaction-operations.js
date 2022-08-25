import { createAsyncThunk } from "@reduxjs/toolkit";
// import { getContactsApi, addContactApi, deleteContactApi } from "../../api/connectionsAPI";
import { addExpenseTransactionApi } from "../../services/transactionAPI";

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
// //   unset() {
// //     axios.defaults.headers.common.Authorization = '';
// //   },
// };

// export const getContacts = createAsyncThunk(
//   'getContacts',
//   async (_, thunkApi) => {
//     try {
//       const contacts = await getContactsApi();
//       return contacts;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

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