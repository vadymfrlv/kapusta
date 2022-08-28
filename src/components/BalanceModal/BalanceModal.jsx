import { useSelector } from 'react-redux';
import { isTransaction } from 'redux/balance/Balanse.ModalSelector';
import s from './BalanceModal.module.css';

export const BalanceModal = () => {
  const isTrans = useSelector(isTransaction);

  return (
    <div className={s.modalWindow}>
      <div className={s.modal}>
        {isTrans ? (
          <>
            <p className={s.firstText}>
              Hello! To get started, enter the current balance of your account!
            </p>
            <p className={s.secondText}>
              You can't spend money until you have it :)
            </p>{' '}
          </>
        ) : (
          <p className={s.firstText}>"ВВЕДІТЬ БУДЬ-ЛАСКА СУММУ!!!"</p>
        )}
      </div>
      <div className={s.part}></div>
    </div>
  );
};
