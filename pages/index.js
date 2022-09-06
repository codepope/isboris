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
          No, FINALLY
        </p>
        <p className="description">
          ... he took long enough and now we have the human version of a comatose eraser in his place.</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/lKrLBPmRsrM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <br/>Look, next time, just don't vote Tory. It's not that hard.
      </main>

      <Footer />
    </div>
  )
}
