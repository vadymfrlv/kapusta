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
import balanceReduser from '../redux/balance/balanceSlice';

const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token', 'refreshToken'],
};

export const store = configureStore({
  reducer: {
    balance: balanceReduser,
    auth: persistReducer(authPersistConfig, authReducer),
    transactions: transactionReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
