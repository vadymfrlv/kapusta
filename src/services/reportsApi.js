import axios from 'axios';

export const getDataForPeriod = date => {
  axios.defaults.headers.common.Authorization =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzA2NDYzMGRiN2E4MTA4MTQwMzBiMzAiLCJzaWQiOiI2MzA3OGM1YmRiN2E4MTA4MTQwMzBjZjQiLCJpYXQiOjE2NjE0MzkwNjcsImV4cCI6MTY2MTQ0MjY2N30.JwLJF29mjlQWKVZK2Y4xAgiyGj78eti6jQuQrfVKWqU';

  return axios
    .get(
      `https://kapusta-backend.goit.global/transaction/period-data?date=${date}`
    )
    .then(response => {
      console.log(response.data);
      return response.data;
    });
};

// {
//     "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzA2NDYzMGRiN2E4MTA4MTQwMzBiMzAiLCJzaWQiOiI2MzA2NzU2ZmRiN2E4MTA4MTQwMzBiYjMiLCJpYXQiOjE2NjEzNjc2NjMsImV4cCI6MTY2MTM3MTI2M30.F8AVOTXXUFxozx-rGF9boNntpS7gqUKsZddiNRuDTk0",
//     "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzA2NDYzMGRiN2E4MTA4MTQwMzBiMzAiLCJzaWQiOiI2MzA2NjY5NWRiN2E4MTA4MTQwMzBiYTEiLCJpYXQiOjE2NjEzNjM4NjEsImV4cCI6MTY2Mzk5MTg2MX0.HlomEYWK17hdbsD4diOFGCSv4Br-sGcpsBiBYW4nY18",
//     "sid": "63066695db7a810814030ba1",
//     "userData": {
//         "email": "anna1608@gmail.com",
//         "balance": 0,
//         "id": "63064630db7a810814030b30",
//         "transactions": []
//     }
// }
