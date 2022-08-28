import React from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import s from './IncomeTransactionList.module.css';

import { useEffect } from 'react';
import {
  getIncomeTransaction,
  removeTransaction,
} from 'redux/transaction/transaction-operations';

import { useDispatch } from 'react-redux';
import { Summary } from 'components/Summary/Summary';
import { getEmailUser } from 'redux/auth/AuthSelector';


const IncomeTransactionList = () => {
 const transactionList = useSelector(state => state.transactions.items);
  const listLength = useSelector(state => state.transactions.items.length);
  const email = useSelector(getEmailUser);

  const dispatch = useDispatch();

  useEffect(() => {

    if (email) dispatch(getIncomeTransaction());
  }, [listLength, email, dispatch]);

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
                <td className={s.expense}>+ {item.amount} грн</td>
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

export default IncomeTransactionList;
