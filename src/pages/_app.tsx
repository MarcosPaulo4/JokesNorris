import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@contexts/emotion-cache.provider'
import { theme } from '@styles/theme'
import { Inter } from 'next/font/google'
import Head from 'next/head'

export const inter = Inter({
  subsets: ['latin'],
})

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <title>JokesNorries</title>
        <meta
          name="description"
          content="JokesNorris"
        />
      </Head>
      <main className={inter.className}>
        <CacheProvider>
          <ChakraProvider theme={theme}>
                <Component {...pageProps} />
          </ChakraProvider>
        </CacheProvider>
      </main>
    </>
  )
}

export default MyApp