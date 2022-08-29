import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import month from '../../data/months';
import s from './Summary.module.css';
import { useRef } from 'react';

export const Summary = ({ selector }) => {
  const currentDate = useRef(new Date().getMonth());
  const stats = useSelector(selector);
  const array = Object.entries(stats);
  const filteredMonths = array.filter(
    (el, index) => index <= currentDate.current
  );

  return (
    <div className={s.summary}>
      <ul className={s.list}>
        <li className={s.title}>SUMMARY</li>
        {filteredMonths.map(el => (
          <li key={el[0]} className={s.item}>
            <p>{month[el[0]]}</p>
            <p>
              {el[1] === 'N/A'
                ? 0
                : el[1].toFixed(2).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

Summary.propTypes = {
  selector: PropTypes.func.isRequired,
};
