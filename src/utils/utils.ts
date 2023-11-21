export const detectColorTheme = (): string => {
  const theme = window.localStorage.getItem('theme')

  if (theme === null) {
    return window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark'
  } else {
    return theme
  }
}