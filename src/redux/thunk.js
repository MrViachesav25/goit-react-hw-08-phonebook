import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com',
});

const createToken = token => {
    instance.defaults.headers['Authorization'] = `Bearer ${token}`;
}

const deleteToken = () => {
    instance.defaults.headers['Authorization'] = '';
}

export const registerUserThunk = createAsyncThunk(
    'auth/register', 
    async (body, thunkApi) => {
        try {
            const { data } = await instance.post('/users/signup', body);
            createToken(data.token);
            return data;
        }
        catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const loginUserThunk = createAsyncThunk(
    'auth/login',
    async (body, thunkApi) => {
        try {
            const { data } = await instance.post('/users/login', body);
            createToken(data.token);
            return data;
        }
        catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);


export const upgradeUserThunk = createAsyncThunk(
    'auth/upgrade',
    async (_, thunkApi) => {
        const state = thunkApi.getState();
        const token = state.auth.token;
        
        try {
            createToken(token);
            const { data } = await instance.get('/users/current');
            return data;
        }

        catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const logoutUserThunk = createAsyncThunk(
    'auth/logout',
    async (_, thunkApi) => {
        const state = thunkApi.getState();
        const token = state.auth.token;
        createToken(token);
       const { data } = await instance.post('/users/logout');
            deleteToken();
            return data;
    }
)

// ------------------- Actions with contacts ----------------------

export const fetchContactThunk = createAsyncThunk(
    'contacts/fetchContactThunk', 
    async (_, thunkApi) => {
        try {
            const { data } = await instance.get('/contacts');
            return data;
        }
        catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const addContactThunk = createAsyncThunk(
    'contacts/addContactThunk',
    async (contact, thunkApi) => {
        try {
            const response = await instance.post('/contacts', contact);
            return response.data;
        }
        catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const deleteContactThunk = createAsyncThunk(
    'contacts/deleteContactThunk',
    async (id, thunkApi) => {
        try { 
            const { data } = await instance.delete(`/contacts/${id}`);
            return data;
        }
        catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);