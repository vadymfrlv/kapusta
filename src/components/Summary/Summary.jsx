import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import s from './Summary.module.css';

export const Summary = () => {
  const stats = useSelector(state => state.monthsStats.items);

  const keys = Object.keys(stats);
  const values = Object.values(stats);

  return (
    <div className={s.summary}>
      <ul className={s.list}>
        <li className={s.title}>SUMMARY</li>

        <li key={keys[0]} className={s.item}>
          <p>{keys[0]}</p>
          <p>{values[0]}</p>
        </li>
        <li key={keys[1]} className={s.item}>
          <p>{keys[1]}</p>
          <p>{values[1]}</p>
        </li>
        <li key={keys[2]} className={s.item}>
          <p>{keys[2]}</p>
          <p>{values[2]}</p>
        </li>
        <li key={keys[3]} className={s.item}>
          <p>{keys[3]}</p>
          <p>{values[3]}</p>
        </li>
        <li key={keys[4]} className={s.item}>
          <p>{keys[4]}</p>
          <p>{values[4]}</p>
        </li>
        <li key={keys[5]} className={s.item}>
          <p>{keys[5]}</p>
          <p>{values[5]}</p>
        </li>
        <li key={keys[6]} className={s.item}>
          <p>{keys[6]}</p>
          <p>{values[6]}</p>
        </li>
        <li key={keys[7]} className={s.item}>
          <p>{keys[7]}</p>
          <p>{values[7]}</p>
        </li>
      </ul>
    </div>
  );
};
