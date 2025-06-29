import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Buffalucas - Las alitas más deliciosas de la ciudad. Menú, promociones y sucursales." />
        <meta name="keywords" content="alitas, boneless, hamburguesas, promociones, sucursales, comida, restaurante, Buffalucas" />
        <meta name="author" content="Buffalucas" />

        {/* Open Graph / Facebook */} 
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.buffalucas.com/" />
        <meta property="og:title" content="Buffalucas - Las Alitas Más Deliciosas" />
        <meta property="og:description" content="Descubre el menú, las promociones y las sucursales de Buffalucas. ¡Sabor inigualable!" />
        <meta property="og:image" content="https://www.buffalucas.com/logo.svg" />

        {/* Twitter */} 
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.buffalucas.com/" />
        <meta property="twitter:title" content="Buffalucas - Las Alitas Más Deliciosas" />
        <meta property="twitter:description" content="Descubre el menú, las promociones y las sucursales de Buffalucas. ¡Sabor inigualable!" />
        <meta property="twitter:image" content="https://www.buffalucas.com/logo.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
