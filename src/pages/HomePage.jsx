import ExpensesComponent from 'components/Expenses/ExpensesComponent';
import { Balance } from 'components/Balance/Balance';

const HomePage = () => {
  return (
    <>
      <Balance />
      <ExpensesComponent />
    </>
  );
};
export default HomePage;
