import axios from 'axios';

const savedToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
};

export const changeBalanceApi = async data => {
  const response = await axios.patch(
    'https://kapusta-backend.goit.global/user/balance',
    data
  );
  return response.data;
};
