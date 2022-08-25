import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeBalance } from 'redux/balance/balanceOperations';
import s from './Balance.module.css';

export const Balance = () => {
  const balance = useSelector(state => state.auth.user.balance);
  console.log('🚀 ~ balance', balance);
  const dispatch = useDispatch();
  const [input, setInput] = useState(0);

  const handleChange = e => {
    const { value } = e.target;
    console.log('🚀 ~ value', value);

    setInput(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(changeBalance({ newBalance: input }));
  };

  return (
    <form className={s.balance} onClick={handleSubmit}>
      <h3 className={s.title}>Balance:</h3>
      <label className={s.label}>
        <input
          type="text"
          className={s.input}
          value={input}
          onChange={handleChange}
        />
        <span className={s.text}>.00 UAH</span>
      </label>
      <button className={s.button} type="submit">
        CONFIRM
      </button>
    </form>
  );
};
