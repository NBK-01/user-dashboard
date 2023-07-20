import { z } from "zod"

export const userSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  role: z.string(),
})

export type User = z.infer<typeof userSchema>