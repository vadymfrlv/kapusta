import { useSelector } from 'react-redux';
import s from './Summary.module.css';

export const Summary = () => {
  const stats = useSelector(state => state.monthsStats.items);
  const monthsOfYear = Object.entries(stats);
  const filteredMonths = monthsOfYear.filter(month => month[1] !== 'N/A');

  return (
    <div className={s.summary}>
      <ul className={s.list}>
        <li className={s.title}>SUMMARY</li>
        {filteredMonths.map(month => (
          <li key={month[0]} className={s.item}>
            <p>{month[0]}</p>
            <p>{month[1]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
