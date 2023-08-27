const { createSlice } = require("@reduxjs/toolkit");
const { fetchContactThunk, deleteContactThunk, addContactThunk } = require("./thunk");


export const initialState = {
    contacts: {
        items: [],
        isLoading: false,
        error: null,
    },
    filter: '',
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialState,
    extraReducers: builder => 
    builder
    .addCase(fetchContactThunk.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
    })
    .addCase(fetchContactThunk.fulfilled,  (state, action) =>{
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
        state.contacts.error = null;
     })
    .addCase(fetchContactThunk.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
    })
    // -----------Add contacts---------//
    .addCase(addContactThunk.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
    })
    .addCase(addContactThunk.fulfilled,  (state, action) =>{
        state.contacts.isLoading = false;
        state.contacts.items.push(action.payload);
        state.contacts.error = null;
     })
    .addCase(addContactThunk.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
    })
    // ------------Delete contacts---------//
    .addCase(deleteContactThunk.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
    })
    .addCase(deleteContactThunk.fulfilled,  (state, action) =>{
        state.contacts.isLoading = false;
        state.contacts.items = state.contacts.items.filter((contact) => contact.id !== action.payload.id);
        state.contacts.error = null;
     })
    .addCase(deleteContactThunk.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
    })
});

export const contactsReducer = contactsSlice.reducer;