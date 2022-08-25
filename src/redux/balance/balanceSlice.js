// import { createSlice } from '@reduxjs/toolkit';
// // import { useSelector } from 'react-redux';
// import { changeBalance } from './balanceOperations';

// // const balance = useSelector(state => state.user.balance);

// const balanceSlice = createSlice({
//   // name: 'balance',
//   // initialState: {
//   //   balance: 0,
//   // },

//   extraReducers: {
//     [changeBalance.pending]: state => {
//       state.error = null;
//     },
//     [changeBalance.fulfilled]: (state, { payload }) => {
//       state.user.balance = payload;
//     },
//     [changeBalance.rejected]: (state, { payload }) => {
//       state.error = payload;
//     },
//   },
// });

// export default balanceSlice.reducer;
