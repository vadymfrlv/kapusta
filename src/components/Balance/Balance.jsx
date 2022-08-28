import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeBalance } from 'redux/balance/balanceOperations';
import s from './Balance.module.css';
import { BalanceModal } from 'components/BalanceModal/BalanceModal';

// import useWindowDimensions from '../../hooks/useWindowDimensions';

export const Balance = () => {
  const balance = useSelector(state => state.balance.balance);
  const email = useSelector(state => state.auth.user.email);
  console.log('🚀 ~ email', email);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleChange = e => {
    const { value } = e.target;

    setInput(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (input !== '' || balance !== 0) return dispatch(changeBalance({ newBalance: input }));

    alert(' сумма повинна бути більще 0 !!!');
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
