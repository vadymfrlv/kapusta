import axios from 'axios';

const savedToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const getRegisterApi = async userData => {
  const response = await axios.post(
    'https://kapusta-backend.goit.global/auth/register',
    userData
  );
  console.log(response.data);
  return response.data;
};

export const getLoginApi = async userData => {
  //   savedToken.set(token);
  const response = await axios.post(
    'https://kapusta-backend.goit.global/auth/login',
    userData
  );
  console.log(response.data);
  return response.data;
};

export const getCurUserApi = async token => {
  savedToken.set(token);
  const response = await axios.get('https://kapusta-backend.goit.global/user', {
    token,
  });
  return response.data;
};

export const logoutUserApi = async () => {
  await axios.post('https://kapusta-backend.goit.global/auth/logout');
  //   savedToken.unset();
};
