import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeBalance } from 'redux/balance/balanceOperations';
import s from './Balance.module.css';
import { BalanceModal } from 'components/BalanceModal/BalanceModal';
import { Link } from 'react-router-dom';
import Sprite from '../../assets/images/svg/sprite.svg';
import { toast } from 'react-toastify';

// import useWindowDimensions from '../../hooks/useWindowDimensions';

export const Balance = () => {
  const balance = useSelector(state => state.balance.balance);
  const email = useSelector(state => state.auth.user.email);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleChange = e => {
    const { value } = e.target;

    setInput(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (input !== '') return dispatch(changeBalance({ newBalance: input }));

    toast.error('Please, enter number > 0', {
      autoClose: 2000,
      theme: 'colored',
    });
  };

  return (
    <>
      <form className={s.balance} onSubmit={handleSubmit}>
        <h3 className={s.title}>Balance:</h3>
        <label className={s.label}>
          <input
            type="text"
            className={s.input}
            value={input === '' ? balance : input}
            decimalscale={1}
            maxLength={9}
            onChange={handleChange}
            disabled={balance !== 0 ? true : false}
          />
          <span className={s.money}>UAH</span>
          {input === '' && balance === 0 && email ? <BalanceModal /> : !(<BalanceModal />)}
        </label>

        <button
          className={balance !== 0 ? s.button : s.buttonActive}
          type="submit"
          disabled={balance !== 0 ? true : false}
        >
          CONFIRM
        </button>
      </form>
    </>
  );
};
