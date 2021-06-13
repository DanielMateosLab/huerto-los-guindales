import type { AppProps } from "next/app"
import Head from "next/head"
import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Huerto Los Guindales</title>
        <meta
          name="description"
          content="Aplicación para la gestión de los cultivos de Los Guindales"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </div>
  )
}
export default MyApp
