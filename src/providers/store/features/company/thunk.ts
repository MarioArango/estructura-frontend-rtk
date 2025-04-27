import { createAsyncThunk } from '@reduxjs/toolkit';
import { TGetCompanyRequest, TSaveCompanyRequest } from './types/dto/request';
import { TGetCompanyResponse, TSaveCompanyResponse } from './types/dto/response';

import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase';
import { CollectionNames } from '../../../firebase/firestore/documents';
import { cleanUndefined } from '../../../../utils/firebase';

export const companyThunk = {
  saveCompany: createAsyncThunk<TSaveCompanyResponse, TSaveCompanyRequest>(
    'saveCompany',
    async (payload, { rejectWithValue, fulfillWithValue }) => {
      try {
        console.log({ payload });
        const cleanPayload = cleanUndefined(payload);
        console.log({ cleanPayload });
        const docRef = await addDoc(collection(db, CollectionNames.COMPANIES), cleanPayload);
        console.log({ docRef });
        return fulfillWithValue({});
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  ),
  getCompany: createAsyncThunk<TGetCompanyResponse, TGetCompanyRequest>(
    'getCompany',
    async (_: any, { rejectWithValue, fulfillWithValue }) => {
      try {
        const querySnapshot = await getDocs(collection(db, CollectionNames.COMPANIES));
        const companies: TGetCompanyResponse[] = querySnapshot.docs.map(doc => ({
          ...(doc.data() as TGetCompanyResponse),
          id: doc.id,
        }));
        const company = companies[0];
        console.log({ companies });

        return fulfillWithValue(company);
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  ),
};
