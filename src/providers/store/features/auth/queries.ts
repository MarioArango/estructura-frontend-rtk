import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { TGetPokemonsRequest } from './types/dto/request';
import type { TGetPokemonsResponse } from './types/dto/response';

export const authQueries = createApi({
  reducerPath: 'authReducerQuery', //nombre del slice que maneja los estados de este query
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/pokemon' }),
  keepUnusedDataFor: 0, //clear data when desmount component
  refetchOnMountOrArgChange: true, //request always data when mount component
  endpoints: builder => ({
    getPokemons: builder.query<TGetPokemonsResponse, TGetPokemonsRequest>({
      query: payload => `${payload.name}`,
    }),
  }),
});

export const { useGetPokemonsQuery } = authQueries;
