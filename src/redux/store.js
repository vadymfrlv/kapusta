import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import authReducer from '../redux/auth/authSlise';
import transactionReducer from '../redux/transaction/transaction-reducer';
import balanceReducer from '../redux/balance/balanceSlice';
import monthsStatsReducer from '../redux/monthsStats/monthsStats-reducer';

const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token', 'refreshToken', 'sid'],
};

export const store = configureStore({
  reducer: {
    balance: balanceReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    transactions: transactionReducer,
    monthsStats: monthsStatsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
