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
          Yes
        </p>
        <p className="description">
          But it's pretty tenuous
        </p>
      </main>

      <Footer />
    </div>
  )
}
