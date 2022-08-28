import React from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import s from './ExpenseTransactionList.module.css';

import { useEffect } from 'react';
import {
  getExpenseTransaction,
  removeTransaction,
} from 'redux/transaction/transaction-operations';

import { getExpenseMonthsStats } from 'redux/monthsStats/monthsStats-operations';

import { useDispatch } from 'react-redux';
import { Summary } from 'components/Summary/Summary';
import { getEmailUser } from 'redux/auth/AuthSelector';


const ExpenseTransactionList = () => {
  // const [value, setValue] = useState(0);
  const transactionList = useSelector(state => state.transactions.items);
  const listLength = useSelector(state => state.transactions.items.length);
  const email = useSelector(getEmailUser)

  // console.log(listLength);

  // console.log('🚀 ~ transactionList', transactionList);
  // const userEmail = useSelector(state => state.auth.user.email);
  // const qwe = getExpenseTransactionApi().then(response => response.data);
  // console.log(auth)
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getExpenseTransaction());
      dispatch(getExpenseMonthsStats());
    // console.log(transactionList)
  }, [listLength, email]);

  // useEffect(() => {
  //     setValue(listLength)

  // }, [removeTransaction]);

  return (
    <div className={s.transactions}>
      <table className={s.table}>
        <thead>
          <tr>
            <th>DATE</th>
            <th>DESCRIPTION</th>
            <th>CATEGORY</th>
            <th>SUM</th>
            <th></th>
          </tr>
        </thead>
        <tbody className={s.tableBody}>
          {transactionList &&
            transactionList.map(item => (
              <tr key={item._id}>
                <td>{item.date.split('-').reverse().join('.')}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td className={s.expense}>- {item.amount} грн</td>
                <td>
                  <button
                    className={s.buttonDelete}
                    onClick={() => dispatch(removeTransaction(item._id))}
                  ></button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Summary />
    </div>
  );
};

// ContactsList.propTypes = {
//   contactEl: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       onDeleteContact: PropTypes.func.isRequired,
//     })
//   ),
// };

export default ExpenseTransactionList;
