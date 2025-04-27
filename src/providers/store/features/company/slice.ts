import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCompanyInitialState } from './types/state';
import { RootState } from '../../store';
import { companyThunk } from './thunk';

const initialState: TCompanyInitialState = {};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // rtkIncrement: (state, { payload }: PayloadAction<number>) => {
    //   state.value = state.value + payload;
    // },
    // rtkDecrement: (state, { payload }: PayloadAction<number>) => {
    //   state.value = state.value - payload;
    // },
  },
  extraReducers: builder => {
    builder.addCase(companyThunk.getCompany.pending, (state, action) => {});
    builder.addCase(companyThunk.getCompany.fulfilled, (state, action) => {});
    builder.addCase(companyThunk.getCompany.rejected, (state, action) => {});
  },
});

export const {} = authSlice.actions;

export const authReducer = authSlice.reducer;
export default authReducer;

export const authSelector = (state: RootState) => state.authReducer;
