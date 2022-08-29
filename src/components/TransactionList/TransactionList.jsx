import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import expenses from '../../data/expensesReports.json';
import { removeTransaction } from 'redux/transaction/transaction-operations';
import { getEmailUser } from 'redux/auth/AuthSelector';
import s from './TransactionList.module.css';

const TransactionList = ({ operation, selector, location }) => {
  const transactions = useSelector(selector);
  const dispatch = useDispatch();
  const email = useSelector(getEmailUser);

  useEffect(() => {
    if (email) dispatch(operation);
    // eslint-disable-next-line
  }, [transactions.length, email]);

  return (
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
        {transactions &&
          transactions.map(item => (
            <tr key={item._id}>
              <td>{item.date.split('-').reverse().join('.')}</td>
              <td>{item.description}</td>
              <td>
                {location === 'expenses'
                  ? expenses[item.category].title
                  : item.category}
              </td>
              <td className={location === 'expenses' ? s.expenses : s.incomes}>
                {location === 'expenses' && '-'}
                &nbsp;
                {item.amount
                  .toFixed(2)
                  .replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')}
                &nbsp; грн
              </td>
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
  );
};

TransactionList.propTypes = {
  operation: PropTypes.func.isRequired,
  selector: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
};

export default TransactionList;
