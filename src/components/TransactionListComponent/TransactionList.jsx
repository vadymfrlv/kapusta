import React from 'react';
import { useSelector} from 'react-redux';
// import PropTypes from 'prop-types';
import s from './TransactionList.module.css';
// import ContactsEl from './ContactsEl';
// import { removeContacts } from '../../redux/contacts/contacts-operations';
// import {getTransaction} from '../../redux/transaction/transaction-selector';

// import { useEffect } from "react";
// import { getExpenseTransactionApi } from 'services/transactionAPI';
// import { getExpenseTransaction } from 'redux/transaction/transaction-operations';

// import { useDispatch } from 'react-redux';





const TransactionList = () => {
  const transactionList = useSelector(state => state.transactions.items);
  // const qwe = getExpenseTransactionApi().then(response => response.data);
  // console.log(qwe)
  // const dispatch = useDispatch();

  // console.log(transactionList)

    // useEffect(() => {
    //   dispatch(getExpenseTransaction());
    // });
  

  return (
      <div>

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
                  {transactionList && transactionList.map((contacts) => (
            <tr key={contacts.id}>
                <td>{(contacts.date).toLocaleString()}</td>
                <td>{contacts.description}</td>
                <td>{contacts.category}</td>
                <td>{contacts.amount}</td>
          </tr>
        ))}
        </tbody>
      </table>
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

export default TransactionList;