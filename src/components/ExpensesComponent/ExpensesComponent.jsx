import { Link } from 'react-router-dom';
import s from './ExpensesComponent.module.css';

const ExpensesComponent = () => {
  return (
              <div>
          <div className={s.linkContainer}>
        <Link to="/expenses" className={s.activeLink}>Expenses</Link>
        <Link to="/income" className={s.link}>Income</Link>
      </div>
    
    <div className={s.container}>
      <form>
        <span className={s.calendar}>Calendar</span>
        <label>
          <input
            className={s.input}
            type="text"
            name="name"
            placeholder="Product category"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            // value={form.name}
            // onChange={handleChange}
          />
        </label>
        <label placeholder="Product description">
          {/* <input
            className={s.input}
            type="number"
            name="number"
            placeholder="Product description"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            // value={form.number}
            // onChange={handleChange}
            /> */}
            
            <select  >
              className={s.input}
                          {/* placeholder="Product description" */}
  <option value="Transport">Transport</option>
  <option value="Health">Health</option>
  <option value="Alcohol">Alcohol</option>
  <option value="Entertainment">Entertainment</option>
</select>
        </label>
        <label>
          <input
            className={s.input}
            type="number"
            name="number"
            placeholder="0,00"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            // value={form.number}
            // onChange={handleChange}
          />
        </label>
        <button type="submit" className={s.buttonInput}>
          Input
        </button>
        <button type="submit" className={s.buttonClear}>
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
