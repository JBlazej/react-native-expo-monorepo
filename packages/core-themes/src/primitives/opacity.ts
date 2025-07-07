export const opacity = {
  o0: 0,
  o10: 0.1,
  o100: 1,
  o20: 0.2,
  o25: 0.25,
  o30: 0.3,
  o40: 0.4,
  o5: 0.05,
  o50: 0.5,
  o60: 0.6,
  o70: 0.7,
  o75: 0.75,
  o80: 0.8,
  o85: 0.85,
  o90: 0.9,
  o95: 0.95,
} as const

export type OpacityKeys = keyof typeof opacity
