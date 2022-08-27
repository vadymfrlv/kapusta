import s from './Summary.module.css';

export const Summary = () => {
  return (
    <div className={s.summary}>
      <ul className={s.list}>
        <li className={s.title}>SUMMARY</li>
        <li className={s.item}>
          <p>Січень</p>
          <p>200</p>
        </li>
        <li className={s.item}>
          <p>Лютий</p>
          <p>200</p>
        </li>
        <li className={s.item}>
          <p>Березень</p>
          <p>200</p>
        </li>
        <li className={s.item}>
          <p>Квітень</p>
          <p>200</p>
        </li>
        <li className={s.item}>
          <p>Травень</p>
          <p>200</p>
        </li>
        <li className={s.item}>
          <p>Червень</p>
          <p>200</p>
        </li>
        <li className={s.item}>
          <p>Липень</p>
          <p>200</p>
        </li>
        <li className={s.item}>
          <p>Серпень</p>
          <p>200</p>
        </li>
      </ul>
    </div>
  );
};
