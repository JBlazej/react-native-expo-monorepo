import isNil from 'lodash/isNil'
import {DefaultTheme} from 'styled-components'

import {getColor, opacity, radii, spacing, zIndex} from '~/core.themes'

import {aliases, colorAliases, transforms, unitlessAliases} from '../const'
import {
  Breakpoint,
  OpacitySize,
  RadiiSize,
  ResponsiveProps,
  SizeAlias,
  SpaceSize,
  StylesByBreakpoint,
  Value,
  ZIndexSize,
} from '../types'

type AliasesValues = (typeof aliases)[keyof typeof aliases]

const toCss = (aliasValue: AliasesValues, value: Value, theme: DefaultTheme) => {
  const spacingValue = spacing?.[value as SpaceSize]

  if (Array.isArray(aliasValue)) {
    return aliasValue.reduce((acc, name) => `${acc}${name}: ${spacingValue ?? value}px;`, '')
  }

  if (typeof aliasValue === 'string' && isNil(spacingValue)) {
    if (typeof value === 'string' && colorAliases.includes(aliasValue)) {
      return `${aliasValue}: ${getColor(theme, value)};`
    } else if (typeof radii[value as RadiiSize] !== 'undefined') {
      return `${aliasValue}: ${radii[value as RadiiSize]}px;`
    } else if (typeof opacity[value as OpacitySize] !== 'undefined') {
      return `${aliasValue}: ${opacity[value as OpacitySize]};`
    } else if (typeof zIndex[value as ZIndexSize] !== 'undefined') {
      return `${aliasValue}: ${zIndex[value as ZIndexSize]};`
    } else if (typeof value === 'number' && !unitlessAliases.includes(aliasValue)) {
      return `${aliasValue}: ${value}px;`
    } else {
      return `${aliasValue}: ${value};`
    }
  }

  return `${aliasValue}: ${spacingValue}px;`
}

export const createResponsiveStyles = (props: ResponsiveProps, theme: DefaultTheme) =>
  Object.entries(props).reduce((acc, [alias, value]) => {
    const aliasValue = aliases[alias as SizeAlias]

    if (!aliasValue || value === undefined) {
      return acc
    }

    if (typeof value === 'string' || typeof value === 'boolean' || typeof value === 'number') {
      const currentValue = acc['sm'] ?? ''
      const transformedValue = transforms?.[alias as keyof ResponsiveProps]?.(value)

      acc['sm'] = `${currentValue}${toCss(aliasValue, transformedValue ?? value, theme)}`

      return acc
    }

    return Object.entries(value).reduce((acc, [breakpoint, value]) => {
      if ([undefined, null].includes(value)) {
        return acc
      }

      const currentValue = acc[breakpoint as Breakpoint] ?? ''
      const transformedValue = transforms?.[alias as keyof ResponsiveProps]?.(value)

      acc[breakpoint as Breakpoint] = `${currentValue}${toCss(aliasValue, transformedValue ?? value, theme)}`

      return acc
    }, acc)
  }, {} as StylesByBreakpoint)
