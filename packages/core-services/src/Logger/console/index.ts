export const consoleLog = {
  debug: (...args: any[]) => {
    if (!__DEV__) {
      return
    }
    // eslint-disable-next-line no-console
    console.debug(...args)
  },
  error: (...args: any[]) => {
    if (!__DEV__) {
      return
    }
    // eslint-disable-next-line no-console
    console.error(...args)
  },
  info: (...args: any[]) => {
    if (!__DEV__) {
      return
    }
    // eslint-disable-next-line no-console
    console.info(...args)
  },
  json: (...args: any[]) => {
    if (!__DEV__) {
      return
    }
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(args, null, 2))
  },
  log: (...args: any[]) => {
    if (!__DEV__) {
      return
    }
    // eslint-disable-next-line no-console
    console.log(...args)
  },
  tag:
    (tag: string) =>
    (...args: any[]) => {
      if (!__DEV__) {
        return
      }
      // eslint-disable-next-line no-console
      console.log(`[${tag}]:`, ...args)
    },
  warn: (...args: any[]) => {
    if (!__DEV__) {
      return
    }
    // eslint-disable-next-line no-console
    console.warn(...args)
  },
}
