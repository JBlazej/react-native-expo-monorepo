// * Source - https://react.i18next.com/latest/typescript
import 'react-i18next'

import ns1 from './languages/en.json'

declare module 'react-i18next' {
  interface Resources {
    ns1: typeof ns1
  }
}

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: {
      ns1: typeof ns1
    }
  }
}
