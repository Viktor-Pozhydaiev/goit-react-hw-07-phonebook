import { Contact } from './Contact';
import css from '../ContactList/Contact.module.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

export const ContactList = ({ title }) => {
  const contacts = useSelector(selectFilteredContacts);
  const reversedContacts = [...contacts].reverse();

  return (
    <>
      {reversedContacts.length > 0 && (
        <ul className={css.contacts_list}>
          <h2>{title}</h2>
          {reversedContacts.map(({ id, number, name }) => (
            <Contact key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      )}
    </>
  );
};
ContactList.propTypes = {
  title: PropTypes.string.isRequired,
};
