import React from 'react';
import PropTypes from 'prop-types';
import expenses from '../../data/expensesReports.json';
import { removeTransaction } from 'redux/transaction/transaction-operations';
import s from './TransactionList.module.css';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

const TransactionList = ({ transactionsArray, location }) => {
  const dispatch = useDispatch();

  const { t } = useTranslation();

  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th>{t('transactions.date')}</th>
          <th>{t('transactions.descr')}</th>
          <th>{t('transactions.categ')}</th>
          <th>{t('transactions.sum')}</th>
          <th></th>
        </tr>
      </thead>
      <tbody className={s.tableBody}>
        {transactionsArray &&
          transactionsArray.map(item => (
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
                &nbsp; {t('general.currencyName')}
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
  transactionsArray: PropTypes.array.isRequired,
  location: PropTypes.string.isRequired,
};

export default TransactionList;
