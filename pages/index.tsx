import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { getThings } from '@services/api'

export default function Home({things}) {
  return (
    <div className="container">
      <Head>
        <title>Paperball</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <Header title="Boilerplate for NextJs/GraphCMS/Netlify" />
      </main>
        {things.map(thing => <p>{thing.id}</p>)}
      <Footer />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const {things} = await getThings();

  return {
    props: {
      things
    }
  }
}