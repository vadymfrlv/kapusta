import axios from 'axios';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global/';

export const getExpenseTransactionApi = async () => {
  const response = await axios.get(
    '/transaction/expense'
  );
  console.log(response.data.expenses)
  return response.data;
};

export const addExpenseTransactionApi = async ({
  description,
  amount,
  date,
  category,
}) => {
  const transaction = { description, amount, date, category };
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzA1Y2RhMGRiN2E4MTA4MTQwMzBhYjAiLCJzaWQiOiI2MzA1Y2RkMWRiN2E4MTA4MTQwMzBhYjEiLCJpYXQiOjE2NjEzMjQ3NTMsImV4cCI6MTY2MTMyODM1M30.zCMUQw5hPWzW9Z1otpf67n4oJlSgh3PJtJNAVXNSyb4';

  const response = await axios.post('/transaction/expense', transaction, token);
  return response.data;
};
