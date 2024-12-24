
import { z } from "zod";

export const AboutUsSchema = z.object({
  companyName: z.object({
    en: z.string().nonempty("Company name in English is required"),
    ar: z.string().nonempty("Company name in Arabic is required"),
  }),
  description: z.object({
    en: z.string().nonempty("Description in English is required"),
    ar: z.string().nonempty("Description in Arabic is required"),
  }),
//   logo image
logo: z.instanceof(File),

  mission: z.object({
    en: z.string().nonempty("Mission in English is required"),
    ar: z.string().nonempty("Mission in Arabic is required"),
  }),
  vision: z.object({
    en: z.string().nonempty("Vision in English is required"),
    ar: z.string().nonempty("Vision in Arabic is required"),
  }),
  values: z.object({
    en: z.string().nonempty("Values in English are required"),
    ar: z.string().nonempty("Values in Arabic are required"),
  }),
  phone: z.string().nonempty("Phone number is required"),
  whatsapp: z.string().nonempty("WhatsApp number is required"),
});
