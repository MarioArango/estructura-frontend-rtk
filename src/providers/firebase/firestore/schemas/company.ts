import { z } from 'zod';

export const companySchema = z.object({
  socialReason: z.string().max(150),
  comercialName: z.string().max(100),
  ruc: z.string().max(11),
  address: z.string().max(200).optional(),
  ubigeo: z.string().optional(),
  nameLegalRepresentative: z.string().max(150),
  dniLegalRepresentative: z.string().max(8),
  igv: z.number(),
  mainPhone: z.string().max(20).optional(),
  secondaryPhone: z.string().max(20).optional(),
  email: z.string().email().max(100).optional(),
  webSite: z.string().max(255).optional(),
  maxSessionAttempts: z.number().min(1).max(10).optional(),
});

export type TCompanySchema = z.infer<typeof companySchema>;
