import { useEffect, useState } from 'react';
import { getDataForPeriod } from '../services/reportsApi';
import ReportsHeader from '../components/ReportsHeader/ReportsHeader';
import ReportsTotal from 'components/ReportsTotal/ReportsTotal';
import ReportsCategories from 'components/ReportsCategories/ReportsCategories';

const ReportsPage = () => {
  const [month, setMonth] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('expenses');
  const [userExpenses, setUserExpenses] = useState(null);
  const [userIncomes, setUserIncomes] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // console.log(new Date(2022, -1));
    if (month <= 8) {
      const date = `2020-0${month + 1}`;
      getDataForPeriod(date)
        .then(data => {
          setUserExpenses(data.expenses);
          setUserIncomes(data.incomes);
        })
        .catch(error => {
          setError(error.message);
        });
      return;
    }
    const date = `2020-${month + 1}`;
    getDataForPeriod(date)
      .then(data => {
        setUserExpenses(data.expenses);
        setUserIncomes(data.incomes);
      })
      .catch(error => {
        setError(error.message);
      });
  }, [month]);

  //   const onCategoryChange = value => {
  //     setCategory(value);
  //     if (type === 'expenses') {
  //       const arrayOfKeys = Object.keys(userData.expenses.expensesData[value]);
  //       const totalKeysForDelete = arrayOfKeys.splice(0, 1);
  //       const arrayOfValues = Object.values(
  //         userData.expenses.expensesData[value]
  //       );
  //       const totalValuesForDelete = arrayOfValues.splice(0, 1);

  //       setKeysDiagram(arrayOfKeys);
  //       setValuesDiagram(arrayOfValues);
  //     }
  //     if (type === 'income') {
  //       const arrayOfKeys = Object.keys(userData.incomes.incomesData[value]);
  //       const totalKeysForDelete = arrayOfKeys.splice(0, 1);
  //       const arrayOfValues = Object.values(userData.incomes.incomesData[value]);
  //       const totalValuesForDelete = arrayOfValues.splice(0, 1);
  //       setKeysDiagram(arrayOfKeys);
  //       setValuesDiagram(arrayOfValues);
  //     }
  //   };

  return (
    <>
      <ReportsHeader
        setMonth={setMonth}
        month={month}
        setCategory={setCategory}
      />
      {userExpenses && userIncomes && (
        <ReportsTotal userExpenses={userExpenses} userIncomes={userIncomes} />
      )}
      {userExpenses && userIncomes && (
        <ReportsCategories
          category={category}
          setCategory={setCategory}
          type={type}
          setType={setType}
          userExpenses={userExpenses}
          userIncomes={userIncomes}
        />
      )}
    </>
  );
};
export default ReportsPage;
