import PropTypes from 'prop-types';
import CategoriesList from 'components/CategoriesList/CategoriesList';
import Pagination from 'components/Pagination/Pagination';
import s from './ReportsCategories.module.css';

const ReportsCategories = ({
  userExpenses,
  userIncome,
  category,
  onCategoryChange,
  type,
  setType,
  setCategory,
}) => {
  return (
    <div className={s.block}>
      <Pagination
        title="type"
        setType={setType}
        type={type}
        setCategory={setCategory}
      />
      <CategoriesList
        transactions={
          type === 'expenses'
            ? userExpenses.expensesData
            : userIncome.incomesData
        }
        category={category}
        type={type}
        onCategoryChange={onCategoryChange}
      />
    </div>
  );
};

ReportsCategories.propTypes = {
  userExpenses: PropTypes.object.isRequired,
  userIncome: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  setType: PropTypes.func.isRequired,
};

export default ReportsCategories;
