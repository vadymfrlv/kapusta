import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeBalance } from 'redux/balance/balanceOperations';
import s from './Balance.module.css';

export const Balance = () => {
  const dispatch = useDispatch();
  const { input, setInput } = useState(0);

  const handleChange = e => {
    const { value } = e.target;

    setInput(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(changeBalance(input));
  };

  return (
    <form className={s.balance} onSubmit={handleSubmit}>
      <h3 className={s.title}>Balance:</h3>
      <label className={s.label}>
        <input className={s.input} value={input} onChange={handleChange} />
      </label>
      <button className={s.button} type="submit">
        CONFIRM
      </button>
    </form>
  );
};
