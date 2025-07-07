import {DefaultTheme} from 'styled-components'

import {OpacityKeys} from './primitives/opacity'

export type ThemeVariants = 'light' | 'dark'

type ColorVariants = {
  base: string
  100: string
  90: string
  80: string
  70: string
  60: string
  50: string
  40: string
  30: string
  20: string
  10: string
}

export type AppColors = {
  primary: string
}

export type SingletonsColors = {
  white: string
  black: string
}

export type CommonColors = {
  primary: string
}

export interface Colors extends CommonColors {
  background: string
  textPrimary: string
  pressable: string
  gray: ColorVariants
  singletons: SingletonsColors
}

export type AppThemes = Record<ThemeVariants, DefaultTheme>

type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${'' extends P ? '' : '.'}${P}` | `${K}:${OpacityKeys}`
    : never
  : never

type Leaves<T> = T extends object ? {[K in keyof T]-?: Join<K, Leaves<T[K]>>}[keyof T] : ''

export type PropTheme = Leaves<Colors> | 'transparent'
