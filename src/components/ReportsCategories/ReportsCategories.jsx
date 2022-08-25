import CategoriesList from 'components/CategoriesList/CategoriesList';
import PropTypes from 'prop-types';
import s from './ReportsCategories.module.css';

const typesOfOperations = ['expenses', 'income'];

const ReportsCategories = ({
  type,
  setType,
  userExpenses,
  userIncomes,
  category,
  setCategory,
}) => {
  return (
    <div className={s.block}>
      <div className={s.wrapper}>
        <button
          aria-label="Previous type"
          className={s.prevBtn}
          onClick={e => setType(typesOfOperations[0])}
          disabled={type === typesOfOperations[0] ? true : false}
        ></button>
        <p
          style={{
            fontWeight: '700',
            fontSize: '14px',
            lineHeight: '16px',
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            color: '#000000',
          }}
        >
          {type}
        </p>
        <button
          aria-label="Next type"
          className={s.nextBtn}
          onClick={e => setType(typesOfOperations[1])}
          disabled={type === typesOfOperations[1] ? true : false}
        ></button>
      </div>
      {type === 'expenses' && (
        <CategoriesList
          data={Object.entries(userExpenses.expensesData)}
          category={category}
          setCategoty={setCategory}
          type={type}
        />
      )}
      {type === 'income' && (
        <CategoriesList
          data={Object.entries(userIncomes.incomesData)}
          category={category}
          setCategoty={setCategory}
          type={type}
        />
      )}
    </div>
  );
};

ReportsCategories.propTypes = {
  type: PropTypes.string.isRequired,
  setType: PropTypes.func.isRequired,
  userExpenses: PropTypes.object.isRequired,
  userIncomes: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default ReportsCategories;
