import Layout from '@/Components/Layout'
import { Poppins } from 'next/font/google'
import { ChakraProvider } from '@chakra-ui/react'
import '@/styles/globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <main className={poppins.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </ChakraProvider>
  )
}
