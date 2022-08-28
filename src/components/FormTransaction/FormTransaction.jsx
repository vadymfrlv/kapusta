import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import Select, { StylesConfig } from 'react-select';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import 'react-datepicker/dist/react-datepicker.css';
import s from './FormTransaction.module.css';

const colourStyles: StylesConfig<Select> = {
  control: styles => ({
    ...styles,
    border: ' 2px solid #f6f7fc',
    width: '170px',
    borderRadius: '0px',
    color: '#C7CCDC',
  }),
};

const FormTransaction = ({ operation, options }) => {
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(null);
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();
  const { t } = useTranslation();

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
      return alert(t('transactions.categoryInfo'));
    }
    const initialForm = {
      description,
      amount: Number(amount),
      date: date.toISOString().slice(0, 10),
      category: category.value,
    };
    dispatch(operation(initialForm));
    console.log(initialForm);
  };

  const reset = () => {
    setDate(new Date());
    setDescription('');
    setCategory(null);
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div className={s.timeDiv}>
        <span className={s.calendarIcon}></span>
        <DatePicker
          dateFormat="dd.MM.yyyy"
          className={s.date}
          selected={date}
          onChange={(date: Date) => setDate(date)}
        />
      </div>

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
        {t('transactions.input')}
      </button>
      <button type="button" className={s.buttonClear} onClick={reset}>
        {t('transactions.clear')}
      </button>
    </form>
  );
};

FormTransaction.propTypes = {
  operation: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default FormTransaction;
