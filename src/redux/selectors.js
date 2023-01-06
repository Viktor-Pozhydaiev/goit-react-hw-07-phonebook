import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFiltered = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFiltered],
  (contacts, filter) => {
    return !filter
      ? contacts
      : contacts.filter(e =>
          e.name.toLowerCase().includes(filter.toLowerCase())
        );
  }
);
