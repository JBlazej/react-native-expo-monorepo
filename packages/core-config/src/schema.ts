import {z} from 'zod'

const schema = z.object({
  STAGE: z.union([z.literal('development'), z.literal('preview'), z.literal('production')]),
})

export type Config = z.infer<typeof schema>

export const validateSchema = (inputs: unknown): Config => {
  try {
    return schema.parse(inputs)
  } catch (_) {
    throw new Error('Missing .env.local file or invalid config schema')
  }
}
