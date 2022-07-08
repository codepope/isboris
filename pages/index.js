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
          Yes but...
        </p>
        <p className="description">
          ...he's resigned as Tory party leader.</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/lKrLBPmRsrM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </main>

      <Footer />
    </div>
  )
}
