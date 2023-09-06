import { Component } from 'react';
import css from './PhonebookForm.module.css';
class PhonebookForm extends Component {
  state = {
    contacts: [],
    name: '',
  };

  //   handleChanged = event => {
  //     console.log(event.currentTarget.value);
  //     this.setState({ name: event.currentTarget.value });
  //   };

  render() {
    return (
      <form type="submit" className={css.form}>
        <label htmlFor="" className={css.label}>
          Name
          <input
            // value={this.state.name}
            // onChange={this.handleChanged}
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <button className={css.addBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default PhonebookForm;
