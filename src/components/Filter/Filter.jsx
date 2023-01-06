import { useDispatch } from 'react-redux';
import { contactsFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterInput = event => {
    const filterStr = event.target.value;
    console.log(filterStr);
    dispatch(contactsFilter(filterStr));
  };
  return (
    <label>
      <p>Find contacts by name</p>
      <input type="text" onChange={handleFilterInput} />
    </label>
  );
};
