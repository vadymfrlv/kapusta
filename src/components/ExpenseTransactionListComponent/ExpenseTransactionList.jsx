import React from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import s from './ExpenseTransactionList.module.css';

import { useEffect } from 'react';
import {
  getExpenseTransaction,
  removeExpenseTransaction,
} from 'redux/transaction/transaction-operations';

import { useDispatch } from 'react-redux';
import { Summary } from 'components/Summary/Summary';

const ExpenseTransactionList = () => {
  const transactionList = useSelector(state => state.transactions.items);
  console.log('🚀 ~ transactionList', transactionList);
  // const userEmail = useSelector(state => state.auth.user.email);
  // const qwe = getExpenseTransactionApi().then(response => response.data);
  // console.log(auth)
  const dispatch = useDispatch();

  useEffect(() => {
    // if(userEmail) {dispatch(getExpenseTransaction())};

    setTimeout(() => {
      dispatch(getExpenseTransaction());
    }, 0);
    // console.log(transactionList)
  }, [dispatch, transactionList.length]);

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
        <tbody>
          {transactionList &&
            transactionList.map(item => (
              <tr key={item._id}>
                <td>{item.date}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td className={s.expense}>- {item.amount} грн</td>
                <td>
                  <button
                    className={s.buttonDelete}
                    onClick={() => dispatch(removeExpenseTransaction(item._id))}
                  >
                    Del
                  </button>
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
