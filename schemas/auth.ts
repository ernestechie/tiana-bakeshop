import z from "zod";

export const authFormSchema = z.object({
  firstName: z
    .string("First name is required")
    .min(1, "First name is required")
    .max(52, "First name should not exceed 52 characters."),
  lastName: z
    .string("Last name is required")
    .min(1, "Last name is required")
    .max(52, "Last name should not exceed 52 characters."),
  email: z.email("Email is required"),
  phoneNumber: z
    .string("Phone number is required")
    .min(11, "Invalid phone number"),
});

export type AuthFormSchemaType = z.infer<typeof authFormSchema>;
