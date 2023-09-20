import { configureStore } from '@reduxjs/toolkit';

import chatApi from '../services/api/chat';
import authReducer from './auth';
import chatReducer from './chat';
import uiReducer from './ui';

const store = configureStore({
  reducer: {
    auth: authReducer,
    chat: chatReducer,
    ui: uiReducer,
    [chatApi.reducerPath]: chatApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(chatApi.middleware),
  devTools: {
    trace: true,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
