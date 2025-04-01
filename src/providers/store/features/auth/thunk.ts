import { createAsyncThunk } from '@reduxjs/toolkit';
import { TGetPokemonsRequest } from './types/dto/request';
import { TGetPokemonsResponse } from './types/dto/response';

export const authThunk = {
  login: createAsyncThunk<TGetPokemonsResponse, TGetPokemonsRequest>('login', async (payload, { signal, rejectWithValue, fulfillWithValue }) => {
    try {
      //fetch
      //signal -> abortController
      return fulfillWithValue({});
    } catch (error) {
      return rejectWithValue(error);
    }
  }),
};
