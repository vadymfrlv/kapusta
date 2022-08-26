import axios from 'axios';

export const getDataForPeriod = date => {
  axios.defaults.headers.common.Authorization =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzA2NDYzMGRiN2E4MTA4MTQwMzBiMzAiLCJzaWQiOiI2MzA4ZDAyY2RiN2E4MTA4MTQwMzBlZDIiLCJpYXQiOjE2NjE1MjE5NjQsImV4cCI6MTY2MTUyNTU2NH0.OVcFAWfTCDsFJm2oMlk9RdaipfAgJ2ZNIU1rmC7Trpo';

  return axios.get(`/transaction/period-data?date=${date}`).then(response => {
    console.log(response.data);
    return response.data;
  });
};
