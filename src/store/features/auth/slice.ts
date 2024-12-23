import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TAuthInitialState } from './types/state';
import { RootState } from '../../store';
import { authThunk } from './thunk';

const initialState: TAuthInitialState = {
  value: 0,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    rtkIncrement: (state, { payload }: PayloadAction<number>) => {
      state.value = state.value + payload;
    },
    rtkDecrement: (state, { payload }: PayloadAction<number>) => {
      state.value = state.value - payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(authThunk.login.pending, (state, action) => {});
    builder.addCase(authThunk.login.fulfilled, (state, action) => {});
    builder.addCase(authThunk.login.rejected, (state, action) => {});
  },
});

export const { rtkIncrement, rtkDecrement } = authSlice.actions;

export const authReducer = authSlice.reducer;
export default authReducer;

export const authSelector = (state: RootState) => state.authReducer;
