import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>PRINCESS BLEACH</title>
        <meta name="description" content="PRINCESS BLEACH" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          PRINCESS BLEACH
        </h1>
      </main>
    </div>
  )
}

export default Home
