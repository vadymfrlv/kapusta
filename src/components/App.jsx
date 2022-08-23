import { Balance } from './Balance/Balance';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        fontWeight: 700,
      }}
    >
      <Balance />
    </div>
  );
};
