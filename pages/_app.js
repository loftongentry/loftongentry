import Layout from '@/Components/Layout'
import { Poppins } from 'next/font/google'
import AppWrapper from '@/Components/AppWrapper'
import '@/styles/globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function App({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <AppWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppWrapper>
    </main>
  )
}
