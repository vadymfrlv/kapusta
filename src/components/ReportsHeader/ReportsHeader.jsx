import PropTypes from 'prop-types';
import s from './ReportsHeader.module.css';

const arrayOfMOnths = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'november',
  'october',
  'december',
];

const ReportsHeader = ({ month, setMonth, setCategory }) => {
  return (
    <ul className={s.list}>
      {arrayOfMOnths.map((el, index) => (
        <li key={index} className={s.item}>
          <button
            className={month === index && s.button}
            onClick={e => {
              setCategory('');
              setMonth(index);
            }}
          >
            {el}
          </button>
        </li>
      ))}
    </ul>
  );
};

ReportsHeader.propTypes = {
  month: PropTypes.number.isRequired,
  setCategory: PropTypes.func.isRequired,
  setMonth: PropTypes.func.isRequired,
};

export default ReportsHeader;
