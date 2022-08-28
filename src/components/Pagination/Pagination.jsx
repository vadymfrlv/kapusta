import PropTypes from 'prop-types';
import moment from 'moment';
import months from '../../data/months.json';
import types from '../../data/types.json';
import s from './Pagination.module.css';

const Pagination = ({
  title,
  month,
  type,
  setType,
  onMonthChange,
  setCategory,
}) => {
  return (
    <div className={title === 'type' ? s.paginationType : s.pagination}>
      <button
        aria-label={title === 'month' ? 'Previous month' : 'Previous type'}
        className={s.prevBtn}
        disabled={title === 'type' && type === types[0] ? true : false}
        onClick={
          title === 'month'
            ? e => {
                onMonthChange('prev');
                setCategory('');
              }
            : e => {
                setType(types[0]);
                setCategory('');
              }
        }
      ></button>
      <p className={title === 'type' ? s.titleType : s.titleMonth}>
        {title === 'month'
          ? `${Object.values(months)[month.split('-')[1] - 1]} ${
              month.split('-')[0]
            }`
          : type}
      </p>
      <button
        aria-label={title === 'month' ? 'Next month' : 'Next type'}
        className={
          title === 'month' && moment().format('YYYY-MM') === month
            ? s.notActiveBtn
            : s.nextBtn
        }
        disabled={title === 'type' && type === types[1] ? true : false}
        onClick={
          title === 'month'
            ? e => {
                onMonthChange('next');
                setCategory('');
              }
            : e => {
                setType(types[1]);
                setCategory('');
              }
        }
      ></button>
    </div>
  );
};

Pagination.propTypes = {
  title: PropTypes.string.isRequired,
  month: PropTypes.string,
  onMonthChange: PropTypes.func,
  type: PropTypes.string,
  setType: PropTypes.func,
  setCategory: PropTypes.func.isRequired,
};

export default Pagination;
