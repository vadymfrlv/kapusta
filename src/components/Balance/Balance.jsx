import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NumberFormat from 'react-number-format';
import { changeBalance } from 'redux/balance/balanceOperations';
import s from './Balance.module.css';
import { AuthModal } from 'components/Auth/AuthModal';

export const Balance = () => {
  const balance = useSelector(state => state.auth.user.balance);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleChange = e => {
    const { value } = e.target;

    setInput(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (input !== '' || balance !== 0)
      return dispatch(changeBalance({ newBalance: input }));

    alert(' сумма повинна бути більще 0 !!!');
  };

  return (
    <>
      <form className={s.balance} onSubmit={handleSubmit}>
        <h3 className={s.title}>Balance:</h3>
        <label className={s.label}>
          <NumberFormat
            className={s.text}
            value={input === '' ? balance : input}
            displayType={'text'}
            suffix={' UAH'}
          />
          <input
            type="text"
            className={s.input}
            value={input}
            onChange={handleChange}
          />
        </label>
        <button className={s.button} type="submit">
          CONFIRM
        </button>
      </form>
      {input === '' && balance === 0 ? <AuthModal /> : !(<AuthModal />)}
    </>
  );
};
