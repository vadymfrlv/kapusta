import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NumberFormat from 'react-number-format';
import { changeBalance } from 'redux/balance/balanceOperations';
import s from './Balance.module.css';
import { BalanceModal } from 'components/BalanceModal/BalanceModal';
import { NumberFormatCustom } from 'components/BalanceForm/BalanceForm';

// import useWindowDimensions from '../../hooks/useWindowDimensions';

export const Balance = () => {
  const balance = useSelector(state => state.auth.user.balance);
  console.log('🚀 ~ balance', balance);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  console.log('🚀 ~ input', input);
  // const transactions = useSelector(state => state.transactions.items.length);
  // let itemIndex = transactions - 1;
  // let amount = useSelector(state => state.transactions.items[itemIndex]);
  // const viewPort = useWindowDimensions();

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
    // <NumberFormatCustom />
    <>
      <form className={s.balance} onSubmit={handleSubmit}>
        <h3 className={s.title}>Balance:</h3>
        <label className={s.label}>
          {/* <NumberFormat /> */}
          {/* <NumberFormat
            className={s.text}
            value={input === '' ? balance : input}
            displayType={'text'}
            suffix={' UAH'}
          /> */}
          <input
            type="text"
            className={s.input}
            value={input === '' ? balance : input}
            decimalscale={1}
            onChange={handleChange}
          />
          <span className={s.money}>UAH</span>
          {input === '' && balance === 0 ? (
            <BalanceModal />
          ) : (
            !(<BalanceModal />)
          )}
        </label>

        <button className={s.button} type="submit">
          CONFIRM
        </button>
      </form>
    </>
  );
};
