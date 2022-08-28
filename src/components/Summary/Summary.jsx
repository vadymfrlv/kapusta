import { useSelector } from 'react-redux';
import s from './Summary.module.css';

export const Summary = () => {
  const stats = useSelector(state => state.monthsStats.items);
  const keys = Object.keys(stats);
  const values = Object.values(stats);

  const monthEn = [
    [(keys[0] = 'January'), values[0]],
    [(keys[1] = 'February'), values[1]],
    [(keys[2] = 'March'), values[2]],
    [(keys[3] = 'April'), values[3]],
    [(keys[4] = 'May'), values[4]],
    [(keys[5] = 'June'), values[5]],
    [(keys[6] = 'July'), values[6]],
    [(keys[7] = 'August'), values[7]],
    [(keys[8] = 'September'), values[8]],
    [(keys[9] = 'October'), values[9]],
    [(keys[10] = 'November'), values[10]],
    [(keys[11] = 'Desember'), values[11]],
  ];

  const filteredMonths = monthEn.filter(month => month[1] !== 'N/A');

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
