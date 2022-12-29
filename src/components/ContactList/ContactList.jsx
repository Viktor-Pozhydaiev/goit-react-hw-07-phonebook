import { Contact } from './Contact';
import css from '../ContactList/Contact.module.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContacts, getFiltered } from 'redux/selectors';

export const ContactList = ({ title }) => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFiltered);
  const filteredContacts = !filter
    ? contacts
    : contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
  return (
    <>
      {contacts.length > 0 && (
        <ul className={css.contacts_list}>
          <h2>{title}</h2>
          {filteredContacts.map(contact => (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          ))}
        </ul>
      )}
    </>
  );
};
ContactList.propTypes = {
  title: PropTypes.string.isRequired,
};
