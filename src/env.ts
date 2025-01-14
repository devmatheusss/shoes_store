import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  R2_ENDPOINT: z.string().url(),
  R2_ACCESS_KEY_ID: z.string(),
  R2_SECRET_ACCESS_KEY: z.string()
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  throw new Error("Invalid credentials.")
}

const env = _env.data

export { env }
