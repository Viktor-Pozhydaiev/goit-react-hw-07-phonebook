import css from '../ContactList/Contact.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import { deleteContacts } from 'redux/operations';

export const Contact = ({ id, number, name }) => {
  const dispatch = useDispatch();

  const deleteContact = () => {
    dispatch(deleteContacts(id));
    Notiflix.Notify.warning(`You deleted contact ${name}. `);
  };

  return (
    <li className={css.contact_item}>
      {name}: {number}
      <button className={css.contact_btn} onClick={deleteContact} type="button">
        Delete
      </button>
    </li>
  );
};
Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
