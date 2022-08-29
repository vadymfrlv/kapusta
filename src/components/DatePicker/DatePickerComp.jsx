import { useState } from 'react';
import DatePicker from 'react-datepicker';
import s from './datePickerComp.module.css';
const DatePickerComp = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className={s.timeDiv}>
      <span className={s.calendarIcon}></span>
      <DatePicker
        dateFormat="dd.MM.yyyy"
        className={s.date}
        selected={date}
        onChange={(date: Date) => setDate(date)}
      />
    </div>
  );
};

export default DatePickerComp;
