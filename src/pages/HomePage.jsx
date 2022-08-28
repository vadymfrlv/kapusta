import ExpensesComponent from 'components/Expenses/ExpensesComponent';
import { Balance } from 'components/Balance/Balance';
import { DataHeader } from 'components/DataHeader/DataHeader';

const HomePage = () => {
  return (
    <>
      {/* <Balance /> */}
      <DataHeader />
      <ExpensesComponent />
    </>
  );
};
export default HomePage;
