import React from 'react';
import PropTypes from 'prop-types';
import expenses from '../../data/expensesReports.json';
import { removeTransaction } from 'redux/transaction/transaction-operations';
import s from './TransactionList.module.css';
import { useDispatch } from 'react-redux';

const TransactionList = ({ transactionsArray, location }) => {
  const dispatch = useDispatch();

  return (
    <>
      {transactionsArray && (
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
            {transactionsArray.map(item => (
              <tr key={item._id}>
                <td>{item.date && item.date.split('-').reverse().join('.')}</td>
                <td>{item.description && item.description}</td>
                <td>
                  {item.category && location === 'expenses'
                    ? expenses[item.category].title
                    : item.category}
                </td>
                <td
                  className={location === 'expenses' ? s.expenses : s.incomes}
                >
                  {location === 'expenses' && item.amount && '-'}
                  &nbsp;
                  {item.amount &&
                    `${item.amount
                      .toFixed(2)
                      .replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')} грн`}
                </td>
                <td>
                  {item.amount && (
                    <button
                      className={s.buttonDelete}
                      onClick={() => dispatch(removeTransaction(item._id))}
                    ></button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

TransactionList.propTypes = {
  transactionsArray: PropTypes.array.isRequired,
  location: PropTypes.string.isRequired,
};

export default TransactionList;
