import {View} from 'react-native'
import styled, {css} from 'styled-components'

import {breakpoints} from '~/core.themes'

import {ResponsiveFlexProps, StylesByBreakpoint} from '../types'

type GetStylesFromDeviceWidth = {
  sm?: string
  md?: string
  lg?: string
  xl?: string
}

const getStylesFromDeviceWidth = (width: number, {sm, md, lg, xl}: GetStylesFromDeviceWidth) => {
  if (width < breakpoints.sm) {
    return sm
  }
  if (width < breakpoints.md) {
    return md ?? sm
  }
  if (width < breakpoints.lg) {
    return lg ?? sm
  }

  return xl ?? sm
}

export const StyledBox = styled(View)<
  StylesByBreakpoint & {flexDirection?: ResponsiveFlexProps['flexDirection']; deviceWidth: number}
>`
  ${({sm, md, lg, xl, deviceWidth}) =>
    getStylesFromDeviceWidth(deviceWidth, {lg, md, sm, xl}) &&
    css`
      ${getStylesFromDeviceWidth(deviceWidth, {lg, md, sm, xl})};
    `}
`
