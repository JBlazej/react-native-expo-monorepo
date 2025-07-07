import {CSSProperties} from 'react'

import {breakpoints, opacity, PropTheme, radii, spacing, zIndex} from '~/core.themes'

export type BreakpointSpaces<Prop> = Partial<Record<Breakpoint, Prop> | undefined>
export type ResponsiveSizeProps = Record<SizeAlias, ResponsiveProp<SpaceSize> | undefined | number>
export type DimensionProps = ResponsiveProp<SpaceSize | `${number}%` | number | `${number}px`>
export type SpaceSize = keyof typeof spacing
export type RadiiSize = keyof typeof radii
export type OpacitySize = keyof typeof opacity
export type ZIndexSize = keyof typeof zIndex
export type ResponsiveProp<Prop> = Prop | BreakpointSpaces<Prop>
export type Value = string | boolean | number

export type ResponsiveFlexProps = {
  align: ResponsiveProp<CSSProperties['alignItems']>
  flexDirection: ResponsiveProp<'row' | 'column' | 'row-reverse' | 'column-reverse'>
  flex: ResponsiveProp<SpaceSize | number>
  gap: ResponsiveProp<SpaceSize | number>
  rowGap: ResponsiveProp<SpaceSize | number>
  columnGap: ResponsiveProp<SpaceSize | number>
  grow: ResponsiveProp<CSSProperties['flexGrow']>
  justify: ResponsiveProp<CSSProperties['justifyContent']>
  shrink: ResponsiveProp<CSSProperties['flexShrink']>
  textAlign: ResponsiveProp<CSSProperties['textAlign']>
  tall: ResponsiveProp<boolean>
  wrap: ResponsiveProp<CSSProperties['flexWrap']>
  wide: ResponsiveProp<boolean>
  zIndex: ResponsiveProp<ZIndexSize | number>
}

export type ResponsivePositionProps = {
  top: DimensionProps
  left: DimensionProps
  right: DimensionProps
  bottom: DimensionProps
  position: ResponsiveProp<'absolute' | 'relative'>
}

export type ResponsiveLayoutProps = {
  aspectRatio: ResponsiveProp<number>
  display: ResponsiveProp<'flex' | 'none' | undefined>
  w: DimensionProps
  h: DimensionProps
  maxH: DimensionProps
  maxW: DimensionProps
  minH: DimensionProps
  minW: DimensionProps
  overflow: ResponsiveProp<CSSProperties['overflow']>
  overflowX: ResponsiveProp<CSSProperties['overflowX']>
  overflowY: ResponsiveProp<CSSProperties['overflowY']>
}

export type ResponsiveBackgroundProps = {
  bg?: ResponsiveProp<PropTheme | string>
  opacity?: ResponsiveProp<OpacitySize | number>
}

export type ResponsiveBorderProps = {
  borderRadius: ResponsiveProp<RadiiSize | number>
  borderWidth: ResponsiveProp<SpaceSize | number>
  borderColor: ResponsiveProp<PropTheme>
  borderBottomColor: ResponsiveProp<PropTheme>
  borderBottomLeftRadius: ResponsiveProp<RadiiSize | number>
  borderBottomRightRadius: ResponsiveProp<RadiiSize | number>
  borderBottomWidth: ResponsiveProp<SpaceSize | number>
  borderLeft: ResponsiveProp<CSSProperties['borderLeft']>
  borderLeftColor: ResponsiveProp<PropTheme>
  borderLeftWidth: ResponsiveProp<SpaceSize | number>
  borderRight: ResponsiveProp<CSSProperties['borderRight']>
  borderRightColor: ResponsiveProp<PropTheme>
  borderRightWidth: ResponsiveProp<SpaceSize | number>
  borderTop: ResponsiveProp<CSSProperties['borderTop']>
  borderTopColor: ResponsiveProp<PropTheme>
  borderTopLeftRadius: ResponsiveProp<RadiiSize | number>
  borderTopRightRadius: ResponsiveProp<RadiiSize | number>
  borderTopWidth: ResponsiveProp<SpaceSize | number>
}

export const sizeAliases = {
  m: 'margin',
  mb: 'margin-bottom',
  ml: 'margin-left',
  mr: 'margin-right',
  mt: 'margin-top',
  mx: ['margin-left', 'margin-right'],
  my: ['margin-top', 'margin-bottom'],
  p: 'padding',
  pb: 'padding-bottom',
  pl: 'padding-left',
  pr: 'padding-right',
  pt: 'padding-top',
  px: ['padding-left', 'padding-right'],
  py: ['padding-top', 'padding-bottom'],
} as const

export type Breakpoint = keyof typeof breakpoints
export type SizeAlias = keyof typeof sizeAliases
export type PositionAlias = keyof ResponsivePositionProps
export type LayoutAlias = keyof ResponsiveLayoutProps
export type BackgroundAlias = keyof ResponsiveBackgroundProps
export type FlexAlias = keyof ResponsiveFlexProps
export type BorderAlias = keyof ResponsiveBorderProps

export type ResponsiveProps = ResponsiveSizeProps &
  ResponsiveFlexProps &
  ResponsivePositionProps &
  ResponsiveLayoutProps &
  ResponsiveBackgroundProps &
  ResponsiveBorderProps

export type StylesByBreakpoint = Record<Breakpoint, string>
