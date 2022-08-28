import s from './FormTransaction.module.css';

import { addExpenseTransaction } from '../../redux/transaction/transaction-operations';
import { useDispatch } from 'react-redux';

import Select, { StylesConfig } from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import options from './ExpensesCategories';

const colourStyles: StylesConfig<Select> = {
  control: (styles) => ({ ...styles, border: ' 2px solid #f6f7fc', width: '170px', borderRadius: '0px',  color: '#C7CCDC',}),
};

const FormTransaction = () => {
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(null);
  const [amount, setAmount] = useState('');
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

    if (category === null) {
      return alert('Виберіть категорію');
    }
    const initialForm = {
      description,
      amount: Number(amount),
      date: date.toISOString().slice(0, 10),
      category: category.value,
    };
    dispatch(addExpenseTransaction(initialForm));
    console.log(initialForm)
  };

  const reset = () => {
    setDate(new Date());
    setDescription('');
    setCategory(null);
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <span className={s.calendarIcon}></span>

      <DatePicker
        dateFormat="dd.MM.yyyy"
        className={s.date}
        selected={date}
        onChange={(date: Date) => setDate(date)}
      />
      <label>
        <input
          className={s.input}
          type="text"
          name="description"
          placeholder="Product description"
          required
          value={description}
          onChange={handleChange}
        />
      </label>
      <Select
        styles={colourStyles}
        placeholder="Product category"
        className={s.select}
        value={category}
        onChange={setCategory}
        options={options}
      />
      <label>
        <input
          className={s.calcInput}
          type="number"
          name="number"
          pattern="^[1-9]\d*$"
          required
          placeholder="0,00"
          value={amount}
          onChange={handleChangeAmount}
        />
      </label>
      <button type="submit" className={s.buttonInput}>
        Input
      </button>
      <button type="button" className={s.buttonClear} onClick={reset}>
        Clear
      </button>
    </form>
  );
};

export default FormTransaction;
