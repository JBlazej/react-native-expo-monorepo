import {Config, validateSchema} from './schema'

export const config: Config = validateSchema({
  STAGE: process.env.EXPO_PUBLIC_STAGE,
})
