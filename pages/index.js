import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>isborisjohnsonstillprimeminister.co.uk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Is Boris Johnson still Prime Minister?" />
        <p className="yesno">
          YES
        </p>
        <p className="description">
          Unfortunately, the lying liar persists.
        </p>
      </main>

      <Footer />
    </div>
  )
}
