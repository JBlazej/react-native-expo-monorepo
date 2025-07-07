import {TextProps as RNTextProps} from 'react-native'

import {PropTheme, spacing, typography} from '~/core.themes'

import {textAlignments, textAlignmentsVertical, textDecorationLines, textTransformations} from './const'

export type FontSize = keyof typeof typography.fontSizes
export type FontWeight = keyof typeof typography.fontWeights
export type FontFamily = keyof typeof typography.fontFamily

export type TextAlign = keyof typeof textAlignments
export type TextDecoration = keyof typeof textDecorationLines
export type TextTransform = keyof typeof textTransformations
export type TextAlignVertical = keyof typeof textAlignmentsVertical
export type TextLineHeight = keyof typeof spacing

type Props = {
  fontSize?: FontSize
  fontWeight?: FontWeight
  textAlign?: TextAlign
  textDecoration?: TextDecoration
  textTransform?: TextTransform
  textAlignVertical?: TextAlignVertical
  color?: PropTheme | string
  fontFamily?: FontFamily
  lineHeight?: TextLineHeight
}

export type TextProps = Props & RNTextProps
