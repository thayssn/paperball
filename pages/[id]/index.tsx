import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { getThingById} from '@services/api'

export default function Home({thing}) {
  return (
    <div className="container">
      <Head>
        <title>Paperball</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <Header title={thing.id} />
      </main>
      <Footer />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({query}) => {
  const {thing} = await getThingById(query.id)
  
  return {
    props: {
      thing
    }
  }
}