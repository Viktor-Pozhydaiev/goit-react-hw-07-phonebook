import css from '../Form/Form.module.css';
import { useDispatch, useSelector } from 'react-redux';

import Notiflix from 'notiflix';
import { selectContacts } from 'redux/selectors';
import { Filter } from 'components/Filter/Filter';
import { addContacts } from 'redux/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handelSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const newName = event.target.name.value;
    const number = event.target.number.value;
    console.log(number);
    if (contacts.find(({ name }) => name === newName)) {
      Notiflix.Notify.failure(`${newName} is already  in contacts.`);
      form.reset();
      return;
    } else {
      dispatch(addContacts(newName, number));
      Notiflix.Notify.success(`You added new contact ${newName}. `);
    }

    form.reset();
  };

  return (
    <>
      <div>
        <form className={css.form_wrapper} onSubmit={handelSubmit}>
          <p className={css.name_form}> Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            id="name"
            placeholder="Enter name.."
            required
          />
          <p className={css.phone_form}>Phone</p>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Enter number.."
            id="number"
            required
          />
          <button className={css.form_btn} type="submit">
            Add contact
          </button>
        </form>
      </div>
      {contacts.length > 0 && <Filter />}
    </>
  );
};
