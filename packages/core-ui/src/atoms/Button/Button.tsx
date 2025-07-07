import {FC, useCallback, useMemo} from 'react'
import {Pressable, StyleSheet} from 'react-native'
import {interpolateColor, useAnimatedStyle, useSharedValue, withTiming} from 'react-native-reanimated'

import {duration, getColor, useTheme} from '~/core.themes'

import {ActivityIndicator} from '../ActivityIndicator'
import {AVStack, HStack} from '../Layout'
import {AText} from '../Text'
import {buttonColorSchemes} from './const'
import {StyledButton} from './styled'
import {ButtonProps} from './types'

export const Button: FC<ButtonProps> = ({
  children,
  onPress,
  isDisabled,
  size,
  isLoading,
  variant = 'solid',
  color = 'primary',
  textTransform = 'uppercase',
  fullWidth = true,
  accessoryLeft,
  accessoryRight,
}) => {
  const theme = useTheme()
  const colorScheme = buttonColorSchemes(theme)
  const pressed = useSharedValue<0 | 1>(0)

  const {
    color: textColor,
    _disabled,
    _pressable,
    borderColor,
    background,
  } = useMemo(() => colorScheme[variant][color], [color, colorScheme, variant])

  const rStyleBackground = useAnimatedStyle(
    () => ({
      backgroundColor: interpolateColor(
        pressed.value,
        [0, 1],
        [!isDisabled ? background : _disabled.background, _pressable.underlayColor]
      ),
    }),
    [isDisabled, background, _disabled.background, _pressable.underlayColor]
  )

  const rStyleBorder = useAnimatedStyle(
    () => ({
      borderColor: interpolateColor(
        pressed.value,
        [0, 1],
        [!isDisabled ? borderColor : _disabled.borderColor, _pressable.borderColor]
      ),
    }),
    [isDisabled, borderColor, _disabled.borderColor, _pressable.borderColor]
  )

  const rStyleTextColor = useAnimatedStyle(
    () => ({
      color: interpolateColor(pressed.value, [0, 1], [!isDisabled ? textColor : _disabled.color, _pressable.color]),
    }),
    [isDisabled, _pressable.color, textColor, _disabled.color]
  )

  const onPressIn = useCallback(() => {
    pressed.value = withTiming(1, {duration: duration.d350})
  }, [pressed])

  const onPressOut = useCallback(() => {
    pressed.value = withTiming(0, {duration: duration.d350})
  }, [pressed])

  return (
    <Pressable
      onPressOut={onPressOut}
      onPressIn={onPressIn}
      disabled={isDisabled || isLoading}
      onPress={onPress}
      cancelable={false}
      style={{overflow: 'hidden'}}
    >
      <StyledButton
        size={size}
        variant={variant}
        color={color}
        colorScheme={colorScheme}
        isDisabled={isDisabled}
        style={[rStyleBorder, {overflow: 'hidden'}]}
      >
        <AVStack style={[StyleSheet.absoluteFill, rStyleBackground]} />
        <HStack wide={fullWidth} justify="center" align="center">
          {isLoading && (
            <HStack wide position="absolute" top={0} bottom={0} left={0} right={0} justify="center">
              <ActivityIndicator color={getColor(theme, !isDisabled ? textColor : _disabled.color)} />
            </HStack>
          )}
          {!isLoading && accessoryLeft && accessoryLeft}
          <AText fontSize="xs" textAlign="center" textTransform={textTransform} style={[rStyleTextColor]}>
            {!isLoading ? children : ' '}
          </AText>
          {!isLoading && accessoryRight && accessoryRight}
        </HStack>
      </StyledButton>
    </Pressable>
  )
}
