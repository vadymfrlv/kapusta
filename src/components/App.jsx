import { Balance } from './Balance/Balance';
import HomePage from 'pages/HomePage/HomePage';
import MainPage from 'pages/MainPage/MainPage';

export const App = () => {
  return (
    <div>
      <MainPage />
      <Balance />
    </div>
  );
};
