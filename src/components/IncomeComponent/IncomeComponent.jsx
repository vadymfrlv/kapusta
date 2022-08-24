import { Link } from 'react-router-dom';
import s from './IncomeComponent.module.css';
import Select from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

const options = [
  { value: 'transport', label: 'Transport' },
  { value: 'products', label: 'Products' },
  { value: 'health', label: 'Health' },
  { value: 'alcohol', label: 'Alcohol' },
  { value: 'entertainment', label: 'Entertainment' },
  { value: 'housing', label: 'Housing' },
  { value: 'communal, communication', label: 'Communal, communication' },
  { value: 'sports, hobbies', label: 'Sports, hobbies' },
  { value: 'education', label: 'Education' },
  { value: 'other', label: 'Other' },
];

const IncomeComponent = () => {
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(null);
  const [amount, setAmount] = useState(0);

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
      date: date.toLocaleString().slice(0, 10),
      category: category.label,
    };
    console.log(initialForm);

    // dispatch(addContacts(form));
  };

      console.log(description, amount, date, category.label);


  return (
    <div>
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
            className={s.date}
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
        </form>
          <button type="submit" className={s.buttonClear} onChange={()=> (setDate(new Date()),
    setDescription(''),
    setCategory(null),
    setAmount(0))} >
            Clear
          </button>
      </div>
    </div>
  );
};

export default IncomeComponent;
