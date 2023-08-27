import { loginUserThunk, logoutUserThunk, registerUserThunk, upgradeUserThunk } from "./thunk";

const { createSlice } = require("@reduxjs/toolkit")

export const initialState = {
    user: null,
    isLoading: false,
    error: null,
    token: null,
    authentificated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    extraReducers: builder =>
    builder
      .addCase(registerUserThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUserThunk.fulfilled,  (state, action) =>{
        state.isLoading = false;
        state.user = action.payload.user;
        state.error = null;
        state.token = action.payload.token;
        state.authentificated = true;
      })
      .addCase(registerUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
        //-------Login(if user is authentificated)
        .addCase(loginUserThunk.pending, state => {
            state.isLoading = true;
            state.error = null;
          })
          .addCase(loginUserThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.authentificated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
          })
          .addCase(loginUserThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          })
      //-------Upgrade(if user is authentificated)
       .addCase(upgradeUserThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(upgradeUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authentificated = true;
        state.user = action.payload;
      })
      .addCase(upgradeUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //-------Logout-----
      .addCase(logoutUserThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authentificated = false;
        state.user = null;
        state.token = null;
      })
      .addCase(logoutUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
});

export const authReducer = authSlice.reducer;