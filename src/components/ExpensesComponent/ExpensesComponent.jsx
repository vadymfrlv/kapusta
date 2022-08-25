import { Link } from 'react-router-dom';
import s from './ExpensesComponent.module.css';

import { addExpenseTransaction } from '../../redux/transaction/transaction-operations';
import { useDispatch } from 'react-redux';

import Select from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

const options = [
  { value: 'Транспорт', label: 'Transport' },
  { value: 'Продукты', label: 'Products' },
  { value: 'Здоровье', label: 'Health' },
  { value: 'Алкоголь', label: 'Alcohol' },
  { value: 'Развлечения', label: 'Entertainment' },
  { value: 'Всё для дома', label: 'Housing' },
  { value: 'Техника', label: 'Technique' },
  { value: 'Коммуналка и связь', label: 'Communal, communication' },
  { value: 'Спорт и хобби', label: 'Sports, hobbies' },
  { value: 'Образование', label: 'Education' },
  { value: 'Прочее', label: 'Other' },
];

const ExpensesComponent = () => {
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
    
    dispatch(addExpenseTransaction(initialForm));
    // console.log(initialForm);
  };

  return (
              <div>
          <div className={s.linkContainer}>
        <Link to="/expenses" className={s.activeLink}>Expenses</Link>
        <Link to="/income" className={s.link}>Income</Link>
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
          <button type="submit" className={s.buttonClear} onChange={()=> (setDate(new Date()),
    setDescription(''),
    setCategory(null),
    setAmount(0))} >
            Clear
          </button>
        </form>

      <table className={s.table}>
        <thead>
          <tr>
            <th>DATE</th>
            <th>DESCRIPTION</th>
            <th>CATEGORY</th>
            <th>SUM</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      </div>
      </div>
  );
};

export default ExpensesComponent;
