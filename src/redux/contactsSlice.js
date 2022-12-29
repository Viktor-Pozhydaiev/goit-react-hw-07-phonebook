import { combineReducers, createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './filterSlice';

const contactsInitialState = [];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContacts: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContacts(state, action) {
      const id = state.findIndex(contact => contact.id === action.payload);
      state.splice(id, 1);
    },
  },
});

export const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterReducer,
});
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};
export const contactsPersistReducer = persistReducer(
  persistConfig,
  rootReducer
);
export const { addContacts, deleteContacts } = contactsSlice.actions;
