import expensesCategories from '../../data/expensesReports.json';
import PropTypes from 'prop-types';
import sprite from '../../assets/images/svg/sprite.svg';
import s from './CategoriesList.module.css';

const CategoriesList = ({ type, category, onCategoryChange, transactions }) => {
  const array = Object.entries(transactions);
  return (
    <>
      {array.length === 0 && (
        <p className={s.noInfo}>
          Sorry, you don't have {type} operations for this period
        </p>
      )}
      {array.length !== 0 && (
        <ul className={s.list}>
          {array.map((el, index) => (
            <li key={index} className={s.item}>
              <p className={s.total}>
                {el[1].total
                  .toFixed(2)
                  .replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')}
              </p>
              <svg
                aria-label={
                  type === 'expenses'
                    ? expensesCategories[el[0]].title
                    : [el[0]]
                }
                className={el[0] === category ? s.imageActive : s.image}
                width="56"
                height="56"
                onClick={e => onCategoryChange(el[0], transactions)}
              >
                <use
                  href={
                    type === 'expenses'
                      ? `${sprite}#${expensesCategories[el[0]].id}`
                      : `${sprite}#icon-${el[0]}`
                  }
                ></use>
              </svg>
              <p className={s.title}>
                {type === 'expenses'
                  ? expensesCategories[el[0]].title
                  : [el[0]]}
              </p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

CategoriesList.propTypes = {
  type: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  transactions: PropTypes.object.isRequired,
};

export default CategoriesList;
