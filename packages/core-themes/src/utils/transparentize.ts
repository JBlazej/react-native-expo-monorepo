import get from 'lodash/get'
import isNil from 'lodash/isNil'
import {DefaultTheme} from 'styled-components'
import Color from 'tinycolor2'

import {opacity} from '../primitives/opacity'

const getColorFromTheme = (theme: DefaultTheme, color: string, fallback?: string) => {
  const hex = get(theme.colors, color, color)
  const isValid = Color(hex).isValid()
  return isValid ? hex : fallback
}

const transparentize = (color: string, opacity: number) => (theme: DefaultTheme) => {
  const raw = getColorFromTheme(theme, color)
  return Color(raw).setAlpha(opacity).toRgbString()
}

const FALLBACK_COLOR = '#FFFFFF'

export const getColor = (theme: DefaultTheme, value: string) => {
  const alphaValue = value.match(/o\d\d?\d?/)

  if (alphaValue) {
    const colorMatched = value?.match(/^.*?(?=:o)/)
    const color = colorMatched ? colorMatched?.[0] : colorMatched
    const alphaFromToken = get(opacity, alphaValue, alphaValue)

    const alpha = !isNil(alphaFromToken) ? parseFloat(alphaFromToken) : 1

    return transparentize(color ?? FALLBACK_COLOR, alpha)(theme)
  }

  return getColorFromTheme(theme, value, FALLBACK_COLOR)
}
