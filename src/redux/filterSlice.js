import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./contactsSlice";

const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        addFilter(state, action) {
            state.filter = action.payload;
        },
    },
});

export const { addFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;