import { Link } from 'react-router-dom';
import s from './IncomeComponent.module.css';
import Select from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import IncomeTransactionList from 'components/IncomeTransactionListComponent/IncomeTransactionList';
import { addIncomeTransaction } from '../../redux/transaction/transaction-operations';
import { useDispatch } from 'react-redux';
import { Balance } from 'components/Balance/Balance';

const options = [
  { value: 'З/П', label: 'Salary' },
  { value: 'Доп. доход', label: 'Add. income' },
];

const IncomeComponent = () => {
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(null);
  const [amount, setAmount] = useState(0);

  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;
    setDescription(value);
  };

  const handleChangeAmount = e => {
    const { value } = e.target;
    setAmount(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const initialForm = {
      description,
      amount,
      date: date.toISOString().slice(0, 10),
      category: category.value,
    };
    console.log(initialForm);

    dispatch(addIncomeTransaction(initialForm));
    // dispatch(addContacts(form));
  };

  return (
    <div>
      <Balance />
      <div className={s.linkContainer}>
        <Link to="/expenses" className={s.link}>
          Expenses
        </Link>
        <Link to="/income" className={s.activeLink}>
          Income
        </Link>
      </div>

      <div className={s.container}>
        <form onSubmit={handleSubmit} className={s.form}>
          <span className={s.calendarIcon}></span>

          <DatePicker
            dateFormat="dd.MM.yyyy"
            className={s.date}
            // calendarClassName="rasta-stripes"
            selected={date}
            onChange={(date: Date) => setDate(date)}
          />
          <label>
            <input
              className={s.input}
              type="text"
              name="description"
              placeholder="Product category"
              required
              value={description}
              onChange={handleChange}
            />
          </label>
          <Select
            placeholder="Product category"
            className={s.select}
            classNamePrefix={s.selectList}
            defaultValue={category}
            onChange={setCategory}
            options={options}
          />
          <label>
            <input
              className={s.input}
              type="number"
              name="number"
              placeholder="0,00"
              required
              value={amount}
              onChange={handleChangeAmount}
            />
          </label>
          <button type="submit" className={s.buttonInput}>
            Input
          </button>
          <button
            type="submit"
            className={s.buttonClear}
            onChange={() => (
              setDate(new Date()),
              setDescription(''),
              setCategory(null),
              setAmount(0)
            )}
          >
            Clear
          </button>
        </form>
        <IncomeTransactionList />
      </div>
    </div>
  );
};

export default IncomeComponent;
