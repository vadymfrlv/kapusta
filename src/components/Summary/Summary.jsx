import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import month from '../../data/months';
import {
  expensesStats,
  incomesStats,
} from 'redux/monthsStats/monthsStats-selector';
import s from './Summary.module.css';

export const Summary = () => {
  const location = useLocation();

  const stats = useSelector(
    location.pathname === '/transactions/expenses'
      ? expensesStats
      : incomesStats
  );
  const array = Object.entries(stats);
  const filteredMonths = array.filter(el => el[1] !== 'N/A');

  return (
    <div className={s.summary}>
      <ul className={s.list}>
        <li className={s.title}>SUMMARY</li>
        {filteredMonths.map(el => (
          <li key={el[0]} className={s.item}>
            <p>{month[el[0]]}</p>
            <p>{el[1]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
