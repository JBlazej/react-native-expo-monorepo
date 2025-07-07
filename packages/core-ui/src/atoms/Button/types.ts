import {CSSProperties, ReactNode} from 'react'

import {TextTransform} from '../Text'

export const buttonColor = {
  primary: 'primary',
} as const

export const buttonVariant = {
  solid: 'solid',
} as const

export const buttonSize = {
  lg: 'lg',
  md: 'md',
  xl: 'xl',
} as const

export const buttonSizes: Record<ButtonSize, number> = {
  lg: 40,
  md: 36,
  xl: 48,
} as const

export type ButtonSize = keyof typeof buttonSize

export type ButtonColor = keyof typeof buttonColor

export type ButtonVariant = keyof typeof buttonVariant

export type ButtonColors = {
  background: string
  borderColor: string
  color: string
}

export type ButtonStyle = {
  borderStyle: CSSProperties['borderStyle']
}

export type ButtonBehavior = {
  _disabled: ButtonColors
  _pressable: {
    underlayColor: string
    borderColor: string
    color: string
  }
}

export type ButtonScheme = ButtonColors & ButtonBehavior & ButtonStyle

export interface ButtonProps {
  size?: ButtonSize
  color?: ButtonColor
  variant?: ButtonVariant
  onPress?: () => void
  isDisabled?: boolean
  isLoading?: boolean
  children: ReactNode
  textTransform?: TextTransform
  fullWidth?: boolean
  accessoryLeft?: ReactNode
  accessoryRight?: ReactNode
  testID?: string
}

export type ButtonColorSchemes = {
  [variant in ButtonVariant]: {
    [color in ButtonColor]: ButtonScheme
  }
}
