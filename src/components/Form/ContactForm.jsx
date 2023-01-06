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

    const { name, number } = event.target;

    const form = event.target;
    const contactName = name.value;
    const contactNumber = number.value;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === contactName.toLowerCase()
      )
    ) {
      Notiflix.Notify.failure(`${contactName} is already  in contacts.`);
      form.reset();
      return;
    } else if (contacts.find(contact => contact.number === contactNumber)) {
      Notiflix.Notify.failure(
        `Contact number ${contactNumber} is already  in contacts.`
      );
      form.reset();
    } else {
      dispatch(addContacts({ name: contactName, number: contactNumber }));
      Notiflix.Notify.success(`You added new contact ${contactName}. `);
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
