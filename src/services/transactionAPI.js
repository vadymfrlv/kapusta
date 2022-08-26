import axios from 'axios';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global/';

export const getExpenseTransactionApi = async () => {
  const response = await axios.get(
    '/transaction/expense'
  );
  // console.log(response.data.expenses)
  return response.data.expenses;
};

export const addExpenseTransactionApi = async ({
  description,
  amount,
  date,
  category,
}) => {
  const transaction = { description, amount, date, category };

  const response = await axios.post('/transaction/expense', transaction);
  return response.data.transaction;
};

export const deleteTransactionApi = async id  => {
  await axios.delete(`/transaction/${id}`);

  return id;
};


export const addIncomeTransactionApi = async ({
  description,
  amount,
  date,
  category,
}) => {
  const transaction = { description, amount, date, category };

  const response = await axios.post('/transaction/income', transaction);
  return response.data.transaction;
};