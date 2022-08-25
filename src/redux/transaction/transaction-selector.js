import { createSelector } from '@reduxjs/toolkit';

export const getTransaction = state => state.transactions.items;
// export const getIsContacts = (state) => Boolean(state.contacts.items.length);

export const getAddedTransaction = createSelector(
  [getTransaction ],
  (items) => {
    const filteredItems = items;

    return filteredItems;
  }
);