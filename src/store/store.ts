import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/slice';
import { authQueries } from './features/auth/queries';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: { authReducer, [authQueries.reducerPath]: authQueries.reducer },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authQueries.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
