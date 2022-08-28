import { Link } from 'react-router-dom';
import { Balance } from 'components/Balance/Balance';

import Sprite from '../../assets/images/svg/sprite.svg';
import s from './DataHeader.module.css';

export const DataHeader = () => {
  return (
    <div className={s.container}>
      <Balance />

      <Link className={s.reportsLinkWrapper} to="/reports">
        <span className={s.reports}>Reports</span>
        <svg className={s.iconReports} width="24" height="24">
          <use href={`${Sprite}#icon-reports`}></use>
        </svg>
      </Link>
    </div>
  );
};
