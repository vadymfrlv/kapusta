// import PropTypes from 'prop-types';
import s from './TransactionList.module.css';
// import ContactsEl from './ContactsEl';
// import { removeContacts } from '../../redux/contacts/contacts-operations';
// import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';

import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from "react";
// import { getExpenseTransaction } from '../../redux/transaction/transaction-operations';



const TransactionList = () => {

  return (
      <div>

      {/* <ol>
        {list && list.map((contacts) => (
            <li key={contacts.id}>
                <p>{contacts.amount}</p>
                <p>{contacts.category}</p>
                <p>{contacts.date}</p>
                <p>{contacts.description}</p>
          </li>
        ))}
          </ol> */}
    
          
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
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
                  </tr>
                            <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
                  </tr>
                            <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
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