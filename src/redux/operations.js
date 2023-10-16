import { createAsyncThunk } from '@reduxjs/toolkit';
/*import * as api from 'services/api'*/
import axios from 'axios';

axios.defaults.baseURL = 'https://6528ffc055b137ddc83e0400.mockapi.io';


export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPi) => {
        try {
            const response = await axios.get('contacts');
            return response.data;
        } catch (error) {
            return thunkAPi.rejectWithValue(error.message);
     }
 }   
);




export const addContacts = createAsyncThunk(
    'contacts/addContact',
    async ({name, number}, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', {name, number});
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  } 

);


export const deleteContacts = createAsyncThunk(
     'contacts/deleteContact',
    async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
