import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser } from '../lib/interfaces/user';
import { LocalStorageService } from '../services/localStorage.service';

const initialState = {
  currentUser: LocalStorageService.getItem('authUser'),
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (auth, { payload }: PayloadAction<IUser>) => {
      auth.currentUser = payload;
      LocalStorageService.setItem('authUser', payload);
    },
    logout: (auth) => {
      auth.currentUser = null;
      LocalStorageService.setItem('authUser', null);
    },
  },
});

export default slice.reducer;

export const authActions = slice.actions;
