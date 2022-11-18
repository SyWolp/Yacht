import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const isServer = typeof window !== 'undefined';
  return (
    <ChakraProvider>
      {isServer && < Component {...pageProps} />}
    </ChakraProvider>
  )
}
