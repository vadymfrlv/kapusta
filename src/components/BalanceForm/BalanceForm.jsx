// import { useState } from 'react';
// import NumberFormat from 'react-number-format';
// import { useSelector, useDispatch } from 'react-redux';
// import { changeBalance } from 'redux/balance/balanceOperations';
// import s from './Balance.module.css';

// export const NumberFormatCustom = props => {
//   const { inputRef, onChange, ...other } = props;
//   const dispatch = useDispatch();
//   const [input, setInput] = useState('');
//   console.log('🚀 ~ input', input);
//   const balance = useSelector(state => state.balance);

//   const handleChange = e => {
//     const { value } = e.target;

//     setInput(value);
//   };

//   const handleSubmit = e => {
//     e.preventDefault();

//     if (input !== '' || balance !== 0)
//       return dispatch(changeBalance({ newBalance: input }));

//     alert(' сумма повинна бути більще 0 !!!');
//   };

//   return (
//     <div className={s.balance} onSubmit={handleSubmit}>
//       <h3 className={s.title}>Balance:</h3>
//       {/* <label className={s.label}> */}
//       <NumberFormat
//         {...other}
//         required
//         className={s.text}
//         type={'text'}
//         getInputRef={input}
//         onChange={handleChange}
//         decimalScale={1}
//       />
//       {/* </label> */}
//       <button className={s.button} onClick={handleSubmit} type="submit">
//         CONFIRM
//       </button>
//     </div>
//   );
// };
