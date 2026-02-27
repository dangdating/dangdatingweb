// Zod 스키마: leadSchema (사전등록 폼), emailSchema (Hero 이메일)
import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().optional(),
  email: z.string().email("올바른 이메일을 입력해주세요"),
  phone: z
    .string()
    .regex(/^01[0-9]-?\d{3,4}-?\d{4}$/, "올바른 전화번호를 입력해주세요")
    .optional()
    .or(z.literal("")),
  hasDog: z.boolean(),
  preRegisterIntent: z.enum(["yes", "thinking"]),
  comment: z.string().max(500).optional(),
  consentPrivacy: z.literal(true, {
    message: "개인정보 수집에 동의해주세요",
  }),
});

export type LeadFormData = z.infer<typeof leadSchema>;

export const emailSchema = z.object({
  email: z.string().email("올바른 이메일을 입력해주세요"),
});

export type EmailFormData = z.infer<typeof emailSchema>;
