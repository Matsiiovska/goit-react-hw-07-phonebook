import { createSlice } from '@reduxjs/toolkit';

const inFilterState = '';//початкове значення

const filterSlice = createSlice({
  name: 'filter',
  initialState: inFilterState, 
  reducers: {
    changeFilter(state, action) {
      return (state=action.payload); // обновлення
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
