# React Native Expo Monorepo Starter

A modern, scalable React Native monorepo starter project built with Expo, TypeScript, and Turborepo. This project provides a solid foundation for building cross-platform mobile applications with a well-organized architecture and shared components.

## 🚀 Features

- **Monorepo Architecture**: Organized with Turborepo for efficient development
- **Expo SDK 53**: Latest Expo with React Native 0.79.5
- **TypeScript**: Full TypeScript support across all packages
- **Shared UI Components**: Reusable design system with styled-components
- **State Management**: Zustand with auto-generated selectors
- **Internationalization**: i18next integration for multi-language support
- **Theme System**: Dark/light theme support with design tokens
- **Navigation**: React Navigation with Expo Router
- **Code Quality**: ESLint, Prettier, and TypeScript strict mode
- **Performance**: React Native Reanimated, MMKV storage, and optimized builds

## 📁 Project Structure

```
react-native-expo-monorepo/
├── apps/
│   └── expo-demo/                 # Main Expo application
├── packages/
│   ├── core-config/              # Configuration schemas and validation
│   ├── core-hooks/               # Custom React hooks
│   ├── core-i18n/                # Internationalization setup
│   ├── core-resources/           # Shared resources
│   ├── core-services/            # Core services (logging, etc.)
│   ├── core-store/               # State management (Zustand)
│   ├── core-themes/              # Design system and theming
│   ├── core-ui/                  # Reusable UI components
│   ├── core-utils/               # Utility functions
│   ├── expo-module-storage/      # Custom Expo module for storage
│   ├── feature-home/             # Home feature module
│   ├── feature-onboarding/       # Onboarding feature module
│   ├── feature-providers/        # React context providers
│   ├── feature-splash-screen/    # Splash screen feature
│   └── platform-secure-core/     # Platform-specific secure core
├── plugins/                      # Expo plugins
├── eslint.config.mjs            # ESLint configuration
├── package.json                 # Root package.json
├── tsconfig.json               # Root TypeScript config
├── turbo.json                  # Turborepo configuration
└── yarn.lock                   # Yarn lock file
```

## 🛠️ Tech Stack

### Core Technologies
- **React Native**: 0.79.5
- **Expo**: SDK 53
- **TypeScript**: 5.8.3
- **Turborepo**: 2.1.3

### State Management & Data
- **Zustand**: Lightweight state management
- **MMKV**: Fast key-value storage
- **Zod**: Schema validation

### UI & Styling
- **Styled Components**: CSS-in-JS styling
- **React Navigation**: Navigation library
- **Expo Router**: File-based routing
- **React Native Reanimated**: Animations

### Development Tools
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Yarn**: Package manager

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ 
- Yarn 1.22.19
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/JBlazej/react-native-expo-monorepo.git
   cd react-native-expo-monorepo
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   # Or run directly from the app directory
   cd apps/expo-demo
   yarn start
   ```

### Development Scripts

#### Root Level Commands
```bash
# Lint all packages
yarn lint
```

#### App Level Commands
```bash
# Development builds
yarn ios:development
yarn android:development

# Preview builds
yarn ios:preview
yarn android:preview

# EAS Builds
yarn build:development
yarn build:preview

```

## 📦 Package Overview

### Core Packages

#### `core-ui`
Reusable UI components built with styled-components and design tokens.

```typescript
import { Button, Text, VStack } from '~/core.ui'

export default function MyComponent() {
  return (
    <VStack p="s16">
      <Text fontSize="3xl">Hello World</Text>
      <Button variant="solid">Click me</Button>
    </VStack>
  )
}
```

#### `core-hooks`
Custom React hooks for common functionality.

```typescript
import { useTheme, useTranslation } from '~/core.hooks'

export default function MyComponent() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useTranslation()
  
  return (
    <Button onPress={toggleTheme}>
      {t('theme.toggle')}
    </Button>
  )
}
```

#### `core-store`
Zustand-based state management with auto-generated selectors.

```typescript
import { useDeviceStore } from '~/core.store'

export default function MyComponent() {
   const network = useDeviceStore.use.network()
  
  return (
    <Text>Status, {network}</Text>
  )
}
```

#### `core-themes`
Design system with theme tokens and utilities.

```typescript
import { useTheme } from '~/core.themes'

export default function MyComponent() {
  const { colors } = useTheme()
  
  return (
    <View style={{ backgroundColor: colors.background }}>
      <Text style={{ color: colors.text }}>Themed content</Text>
    </View>
  )
}
```

#### `core-i18n`
Internationalization setup with i18next.

```typescript
import { useTranslation } from '~/core.i18n'

export default function MyComponent() {
  const { t, i18n } = useTranslation()
  
  return (
    <Text>{t('welcome.message')}</Text>
  )
}
```

#### `core-config`
Configuration schemas and validation using Zod.

```typescript
import { Config } from '~/core.config'

export default function MyComponent() {
  return (
    <Text>API URL: {Config.API}</Text>
  )
}
```

#### `core-resources`
Shared resources like images and assets.

```typescript
export default function MyComponent() {
  return (
    <Image source={require('~/core.resources/png/image.png')} />
  )
}
```

#### `core-services`
Core services including logging and other utilities.

```typescript
import { Logger } from '~/core.services'

export default function MyComponent() {
  Logger.info('Component mounted')
  
  return (
    <Text>Check console for logs</Text>
  )
}
```

### Security Architecture

The project implements a **hybrid security approach** inspired by [Jacob Arvidsson's App.js 2025 talk](https://github.com/theurbancoder/secure-app-demo) on building secure React Native applications. This approach addresses the inherent security limitations of JavaScript-based React Native apps by leveraging native code for sensitive operations.

#### Why Native Security?

- **Code Protection**: Native Swift/Kotlin code is compiled to binary, making it significantly harder to reverse-engineer compared to JavaScript
- **Platform Integration**: Direct access to platform-specific security APIs (Keychain, Keystore, biometric authentication)
- **Runtime Security**: Reduced attack surface by minimizing JavaScript execution for sensitive operations
- **Hardware Security**: Leverage secure hardware-backed storage and encryption

#### Implementation

The `platform-secure-core` package contains:
- **Swift Secure Core**: iOS native library for secure operations
- **Kotlin Secure Core**: Android native library for secure operations

This architecture ensures that sensitive operations like encryption, secure storage, and biometric authentication are handled by native code rather than JavaScript, providing enterprise-grade security for applications with high security requirements.

## 🎨 Design System

The project includes a comprehensive design system inspired by **Tailwind CSS** and **Native Base**, providing a familiar and intuitive development experience:

- **Design Tokens**: Colors, spacing, typography, and more
- **Theme Support**: Dark and light themes
- **Component Variants**: Multiple variants for each component
- **Responsive Design**: Breakpoint-based responsive utilities
- **Utility-First Approach**: Similar to Tailwind's utility classes
- **Atomic Design**: Component-based architecture like Native Base

### Available Components

- **Button**: Multiple variants (primary, secondary, outline)
- **Text**: Typography variants with theme integration
- **Layout**: VStack, HStack, Box for layout management

## 🌍 Internationalization

The project supports multiple languages using i18next:

1. **Add new languages** in `packages/core-i18n/src/languages/`
2. **Use translations** with the `useTranslation` hook
3. **Switch languages** programmatically

```typescript
// Add new language
// packages/core-i18n/src/languages/es.json
{
  "general": {
    "yes": "Sí",
    "no": "No"
  }
}
```

## 📱 Building for Production

### EAS Build

The project is configured for EAS Build with multiple environments:

```bash
# Development builds
yarn build:development

# Preview builds  
yarn build:preview

# Platform-specific builds
yarn build:development:ios
yarn build:development:android
```

### Environment Configuration

The app supports multiple environments:
- `development`: Development builds
- `preview`: Preview/testing builds
- `production`: Production builds

## 🔧 Configuration

### ESLint Configuration
- Strict TypeScript rules
- React and React Native specific rules
- Import sorting and organization
- Unused imports detection

### TypeScript Configuration
- Strict mode enabled
- Path mapping for monorepo packages
- Shared configuration across packages

## 📄 License

This project is licensed under the MIT License.

---

**Happy coding! 🚀**
