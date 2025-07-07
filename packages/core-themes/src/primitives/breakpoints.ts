export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl'
export type Breakpoints = Readonly<Record<Breakpoint, number>>

export const breakpoints: Breakpoints = {
  lg: 992,
  md: 768,
  sm: 576,
  xl: 1200,
} as const
