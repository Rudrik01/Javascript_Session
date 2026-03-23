import * as z from "zod";

type ValidationMode = "onSubmit" | "onBlur" | "onChange";
type FormValues = Record<string, string | boolean | string[] | number>

export const formSchema = z
  .object({
    firstName: z.string().min(3, "Please enter name"),
    lastName: z.string(),

    email: z.union([
  z.literal(""),
  z.email("Enter a valid email")
]),

    phone: z.string().min(1,"Phone number is required").regex(/^\d{10}$/, {
      error: "Please enter valid phone number",
    }),

    password: z.string().min(1,"Password is required").regex(/^(?=.*[A-Z])(?=.*\d).{8,}$/, {
      error:
        "Password must have 8 characters, 1 uppercase letter and 1 number",
    }),

    confirmPassword: z.string(),

    gender: z.enum(["Male", "Female", "Other"],{error:"Please select correct gender"}),
    role: z.enum(["Admin", "User", "Guest"], {
  error: "Please select a role"
}),

    agree: z.literal(true, { error: "You must agree" }),

    age: z.coerce
      .number()
      .min(18, { error: "Age must be above 18" })
      .max(100, { error: "Age must be below 100" }),

    skills: z.array(z.string()).min(3,{error:"Add minium 3 skills"}).max(5,{error:"You can add maximum 5 skills"}),

    hobbies: z.array(z.string()).max(5).optional(),

    fatherName: z.string().optional(),
    motherName: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Password do not match",
        path: ["confirmPassword"],
      });
    }

    if ((data.gender === "Male" || data.gender === "Other") &&!data.fatherName) {
      ctx.addIssue({
        code: "custom",
        message: "Father name is required",
        path: ["fatherName"],
      });
    }

    if (
      (data.gender === "Female" || data.gender === "Other") &&
      !data.motherName
    ) {
      ctx.addIssue({
        code: "custom",
        message: "Mother name is required",
        path: ["motherName"],
      });
    }
  });
export type FormSchemaType = z.infer<typeof formSchema>;




export const validateWithZod = (
  formData: FormValues,
  mode: ValidationMode,
  fieldName?: string
): Record<string, string> => {

  const result = formSchema.safeParse(formData)

  if (result.success) return {}

  const formattedErrors = result.error.format()

  const errors: Record<string, string> = {}

  Object.entries(formattedErrors).forEach(([key, value]) => {
    if (key === "_errors") return

    if (
      typeof value === "object" &&
      value !== null &&
      "_errors" in value &&
      value._errors.length > 0
    ) {
      errors[key] = value._errors[0]
    }
  })

  if (mode === "onSubmit") return errors

  if (fieldName) {
    return {
      [fieldName]: errors[fieldName] ?? ""
    }
  }

  return {}
}