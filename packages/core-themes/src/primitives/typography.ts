const fontFamily = {
  system: 'System',
} as const

interface CreateTextSize {
  fontSize: number
  lineHeight: number
  letterSpacing: number
  marginCorrection: {android: number; ios: number}
}

export interface TextSize {
  fontSize: number
  letterSpacing: number
  lineHeight: number
  marginBottom: number
  marginTop: number
}

const createTextSize =
  ({fontSize, lineHeight, letterSpacing}: CreateTextSize) =>
  (_: keyof typeof fontFamily): TextSize => ({
    fontSize,
    letterSpacing,
    lineHeight,
    marginBottom: 0,
    marginTop: 0,
  })

const fontSizes = {
  '2xl': createTextSize({
    fontSize: 28,
    letterSpacing: 0.3,
    lineHeight: 36,
    marginCorrection: {
      android: 0.0,
      ios: 0.0,
    },
  }),
  '2xs': createTextSize({
    fontSize: 12,
    letterSpacing: 0.3,
    lineHeight: 18,
    marginCorrection: {
      android: 0.0,
      ios: 0.0,
    },
  }),
  '3xl': createTextSize({
    fontSize: 32,
    letterSpacing: 0.3,
    lineHeight: 38,
    marginCorrection: {
      android: 0.0,
      ios: 0.0,
    },
  }),
  '3xs': createTextSize({
    fontSize: 10,
    letterSpacing: 0.3,
    lineHeight: 16,
    marginCorrection: {
      android: 0.0,
      ios: 0.0,
    },
  }),
  '4xl': createTextSize({
    fontSize: 48,
    letterSpacing: 0.3,
    lineHeight: 57.6,
    marginCorrection: {
      android: 0.0,
      ios: 0,
    },
  }),
  '4xs': createTextSize({
    fontSize: 9,
    letterSpacing: 0.3,
    lineHeight: 15,
    marginCorrection: {
      android: 0.0,
      ios: 0.0,
    },
  }),
  lg: createTextSize({
    fontSize: 22,
    letterSpacing: 0.3,
    lineHeight: 28,
    marginCorrection: {
      android: 0.0,
      ios: 0.0,
    },
  }),
  md: createTextSize({
    fontSize: 18,
    letterSpacing: 0.4,
    lineHeight: 24,
    marginCorrection: {
      android: 0.0,
      ios: 0.0,
    },
  }),
  sm: createTextSize({
    fontSize: 16,
    letterSpacing: 0.3,
    lineHeight: 22,
    marginCorrection: {
      android: 0.0,
      ios: 0.0,
    },
  }),
  xl: createTextSize({
    fontSize: 24,
    letterSpacing: 0.3,
    lineHeight: 30,
    marginCorrection: {
      android: 0,
      ios: 0.0,
    },
  }),
  xs: createTextSize({
    fontSize: 14,
    letterSpacing: 0.3,
    lineHeight: 20,
    marginCorrection: {
      android: 0.0,
      ios: 0.0,
    },
  }),
} as const

export interface FontWeights {
  black: string
  bold: string
  extraBlack: string
  heavy: string
  light: string
  medium: string
  regular: string
  thin: string
  ultraThin: string
}

const createFontWeight = ({black, bold, extraBlack, heavy, light, medium, regular, thin, ultraThin}: FontWeights) => ({
  // * black - 800
  black,
  // * bold - 600
  bold,
  // * extraBlack - 900
  extraBlack,
  // * heavy - 700
  heavy,
  // * light - 300
  light,
  // * medium - 500
  medium,
  // * regular - 400
  regular,
  // * thin - 200
  thin,
  // * ultraThin - 100
  ultraThin,
})

const fontFamilyByWeights = {
  system: createFontWeight({
    black: 'System',
    bold: 'System',
    extraBlack: 'System',
    heavy: 'System',
    light: 'System',
    medium: 'System',
    regular: 'System',
    thin: 'System',
    ultraThin: 'System',
  }),
} as const

const fontWeights = {
  black: 800, // black - 800
  bold: 600, // bold - 600
  extraBlack: 900, // extraBlack - 900
  heavy: 700, // heavy - 700
  light: 300, // light - 300
  medium: 500, // medium - 500
  regular: 400, // regular - 400
  thin: 200, // thin - 200
  ultraThin: 100, // ultraThin - 100
} as const

export const typography = {
  fontFamily,
  fontFamilyByWeights,
  fontSizes,
  fontWeights,
} as const
