import {
  BackgroundAlias,
  BorderAlias,
  FlexAlias,
  LayoutAlias,
  PositionAlias,
  ResponsiveProps,
  sizeAliases,
} from './types'

export const positionAliases: Record<PositionAlias, string> = {
  bottom: 'bottom',
  left: 'left',
  position: 'position',
  right: 'right',
  top: 'top',
} as const

export const layoutAliases: Record<LayoutAlias, string> = {
  aspectRatio: 'aspect-ratio',
  display: 'display',
  h: 'height',
  maxH: 'max-height',
  maxW: 'max-width',
  minH: 'min-height',
  minW: 'min-width',
  overflow: 'overflow',
  overflowX: 'overflow-x',
  overflowY: 'overflow-y',
  w: 'width',
} as const

export const flexAliases: Record<FlexAlias, string> = {
  align: 'align-items',
  columnGap: 'column-gap',
  flex: 'flex',
  flexDirection: 'flex-direction',
  gap: 'gap',
  grow: 'flex-grow',
  justify: 'justify-content',
  rowGap: 'row-gap',
  shrink: 'flex-shrink',
  tall: 'height',
  textAlign: 'text-align',
  wide: 'width',
  wrap: 'flex-wrap',
  zIndex: 'z-index',
} as const

export const borderAliases: Record<BorderAlias, string> = {
  borderBottomColor: 'border-bottom-color',
  borderBottomLeftRadius: 'border-bottom-left-radius',
  borderBottomRightRadius: 'border-bottom-right-radius',
  borderBottomWidth: 'border-bottom-width',
  borderColor: 'border-color',
  borderLeft: 'border-left',
  borderLeftColor: 'border-left-color',
  borderLeftWidth: 'border-left-width',
  borderRadius: 'border-radius',
  borderRight: 'border-right',
  borderRightColor: 'border-right-color',
  borderRightWidth: 'border-right-width',
  borderTop: 'border-top',
  borderTopColor: 'border-top-color',
  borderTopLeftRadius: 'border-top-left-radius',
  borderTopRightRadius: 'border-top-right-radius',
  borderTopWidth: 'border-top-width',
  borderWidth: 'border-width',
} as const

export const backgroundAliases: Record<BackgroundAlias, string> = {
  bg: 'background-color',
  opacity: 'opacity',
} as const

export const transforms: Partial<Record<keyof ResponsiveProps, (value: any) => string>> = {
  tall: (isTall: boolean) => (isTall ? '100%' : 'auto'),
  wide: (isWide: boolean) => (isWide ? '100%' : 'auto'),
} as const

export const aliases = {
  ...sizeAliases,
  ...flexAliases,
  ...positionAliases,
  ...borderAliases,
  ...layoutAliases,
  ...backgroundAliases,
} as const

export const unitlessAliases = [
  flexAliases.flex,
  flexAliases.grow,
  flexAliases.shrink,
  flexAliases.zIndex,
  layoutAliases.aspectRatio,
  backgroundAliases.opacity,
] as const

export const colorAliases = [
  backgroundAliases.bg,
  borderAliases.borderColor,
  borderAliases.borderBottomColor,
  borderAliases.borderLeftColor,
  borderAliases.borderRightColor,
  borderAliases.borderTopColor,
] as const
