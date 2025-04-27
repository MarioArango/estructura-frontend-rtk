import { TCompanySchema } from '../../../../../firebase/firestore/schemas/company';

export type TSaveCompanyResponse = {};

export type TGetCompanyResponse = TCompanySchema & {
  id: string;
};
