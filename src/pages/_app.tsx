import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'; // Importar Head
import WhatsAppButton from '@/components/WhatsAppButton';
 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <WhatsAppButton />
    </>
  );
}