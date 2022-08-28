// import { createAsyncThunk } from '@reduxjs/toolkit';

// import {
//   getExpenseTransactionApi,
//   getIncomeTransactionApi,

// } from '../../services/transactionAPI';

// export const getExpenseMonthsStats = createAsyncThunk(
//   'getExpenseMonthsStats',
//   async (_, thunkApi) => {
//     try {
//         const transaction = await getExpenseTransactionApi();
//       return transaction.monthsStats;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// export const getIncomeMonthsStats = createAsyncThunk(
//     'getIncomeMonthsStat',
//     async (_, thunkApi) => {
//         try {
//             const transaction = await getIncomeTransactionApi();
//             return transaction.monthsStats;
//         } catch (error) {
//             return thunkApi.rejectWithValue(error.message);
//         }
//     }
//     );
