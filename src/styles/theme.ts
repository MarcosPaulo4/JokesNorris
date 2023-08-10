import { extendTheme } from '@chakra-ui/react'

// const breakpoints: Record<string, string> = {
//   xs: '320px',
//   sm: '425px',
//   md: '768px',
//   lg: '1024px',
//   lg1: '1025px',
//   xl: '1440px',
// }

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

export const theme = extendTheme({
  config,
  // breakpoints,
  styles: {
    global: () => ({
      body: {
        fontFamily: 'Lobster, sans-serif',
        bg: 'orange.700'
      },
      html: {
        scrollBehavior: 'smooth',
      },
    }),
  },
})
