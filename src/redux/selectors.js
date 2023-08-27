import { createSelector } from "@reduxjs/toolkit";
export const selectContacts = state => state.contacts.contacts.items;
export const selectFilter = state => state.filter.filter;
export const selectIsLoading = state => state.contacts.contacts.isLoading;
export const selectError = state => state.contacts.contacts.error;
export const selectToken = state => state.auth.token;
export const selectUserLoading = state => state.contacts.contacts.isLoading;
export const selectUserError = state => state.auth.error;
export const selectUser = state => state.auth.user;
export const selectAuthentificated = state => state.auth.authentificated;



export const selectVisibleContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => {
        return contacts.filter(contact => 
        contact.name && contact.name.toLowerCase().includes(filter.toLowerCase()));
    }
)