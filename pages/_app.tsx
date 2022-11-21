import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [onWindow, setOnWindow] = useState(false);

  useEffect(() => {
    setOnWindow(true);
  },[])

  return (
    <ChakraProvider>
      {onWindow && < Component {...pageProps} />}
    </ChakraProvider>
  )
}
