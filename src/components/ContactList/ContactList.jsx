import css from './ContactList.module.css';
// import { Component } from 'react';

// class ContactList extends Component {
//   state = {
//     contacts: [],
//     name: '',
//   };

//   render() {
//     return <h3>hello</h3>;
//   }
// }

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id} className={css.item}>
            <h2 className={css.title}>{contact.name}</h2>
            <h2 className={css.number}>{contact.number}</h2>
            <button
              className={css.delete}
              onClick={() => onDeleteContact(contact.id)}
              type="button"
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
