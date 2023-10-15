import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from './operations';


const initialState = {
  items: [],
  isLoading: false,
  error: null,

}

const contactsSlice = createSlice({
  name: 'contacts', 
  initialState, 
  extraReducers: builder =>
    builder.addCase(
        fetchContacts.fulfilled, (state, action) => {
          state.items = action.payload;
      }).addCase(
        addContacts.fulfilled, (state, action) => {
          state.items.push(action.payload);
      }).addCase(
        deleteContacts.fulfilled, (state, action) => {
  state.items = state.items.filter(contact => contact.id !== action.payload.id);
      })
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected),
});

const handleFulfilled = state => {//виконано
  state.isLoading = false;
  state.error = null;
};

const handlePending = state => {//очікування
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {//відхилено
  state.isLoading = false;
  state.error = action.payload;
};





const extraActions = [fetchContacts, addContacts, deleteContacts];

const getActions = type => extraActions.map(action => action[type]);

export const contactsReducer = contactsSlice.reducer;