import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';
 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <WhatsAppButton />
    </>
  );
}