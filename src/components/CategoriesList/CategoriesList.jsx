import expensesCategories from '../../data/expensesCategories.json';
import PropTypes from 'prop-types';
import sprite from '../../assets/images/svg/sprite.svg';
import s from './CategoriesList.module.css';

const CategoriesList = ({ data, type, category, setCategory }) => {
  return (
    <ul className={s.list}>
      {data.map((el, index) => (
        <li key={index} className={s.item}>
          <p className={s.total}>{el[1].total}</p>
          <svg
            aria-label={
              type === 'expenses' ? expensesCategories[el[0]].title : [el[0]]
            }
            className={el[0] === category ? s.imageActive : s.image}
            width="56"
            height="56"
            // onClick={e => onCategoryChange(el[0])}
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
            {type === 'expenses' ? expensesCategories[el[0]].title : [el[0]]}
          </p>
        </li>
      ))}
    </ul>
  );
};

CategoriesList.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default CategoriesList;
