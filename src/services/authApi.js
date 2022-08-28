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
  const response = await axios.post(
    'https://kapusta-backend.goit.global/auth/login',
    userData
  );
  savedToken.set(response.data.accessToken);
  console.log('RD', response.data);
  return response.data;
};

export const getCurUserApi = async (token, sid) => {
  savedToken.set(token);
  const response = await axios.get('https://kapusta-backend.goit.global/user', {
    token,
    sid,
  });
  console.log('qwe', response.data);
  return response.data;
};

export const logoutUserApi = async () => {
  await axios.post('https://kapusta-backend.goit.global/auth/logout');
  savedToken.unset();
};

export const refreshTokenApi = (sid, token) => {
  return (axios.post('https://kapusta-backend.goit.global/auth/refresh'),
  { sid: sid, token: token }).then(({ data }) => ({
    token: data.newAccessToken,
    refreshToken: data.newRefreshToken,
    sid: data.newSid,
  }));
};

export const googleAuth = async () =>
  await axios.get('https://kapusta-backend.goit.global/auth/google');
