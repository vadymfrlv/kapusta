import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Balance } from 'components/Balance/Balance';
import Pagination from 'components/Pagination/Pagination';
import s from './ReportsHeader.module.css';

const ReportsHeader = ({ month, setMonth, setCategory }) => {
  const navigate = useNavigate();

  const onMonthChange = value => {
    const monthNew = new Date(month);
    if (value === 'prev') {
      monthNew.setMonth(monthNew.getMonth() - 1);
      if (monthNew.getMonth() + 1 <= 9) {
        setMonth(`${monthNew.getFullYear()}-0${monthNew.getMonth() + 1}`);
        return;
      }
      setMonth(`${monthNew.getFullYear()}-${monthNew.getMonth() + 1}`);
      return;
    }
    if (value === 'next') {
      monthNew.setMonth(monthNew.getMonth() + 1);
      if (monthNew.getMonth() + 1 <= 9) {
        setMonth(`${monthNew.getFullYear()}-0${monthNew.getMonth() + 1}`);
        return;
      }
      setMonth(`${monthNew.getFullYear()}-${monthNew.getMonth() + 1}`);
    }
  };

  return (
    <div className={s.block}>
      <div className={s.wrapper}>
        <button className={s.btnPrevPage} onClick={e => navigate(-1)}></button>
        <p className={s.mainPage}>Main Page</p>
      </div>
      <Balance />
      <div className={s.blockMonth}>
        <p className={s.currentPeriod}>Current Period:</p>
        <Pagination
          title="month"
          onMonthChange={onMonthChange}
          month={month}
          setCategory={setCategory}
        />
      </div>
    </div>
  );
};

ReportsHeader.propTypes = {
  month: PropTypes.string.isRequired,
  setMonth: PropTypes.func.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default ReportsHeader;
