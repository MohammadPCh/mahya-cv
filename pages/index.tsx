import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mahya Azadi</title>
        <meta name="description" content="Mahya Azadi Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Mahya Azadi Personal Website
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://mpch.ir"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' Cherik'}
        </a>
      </footer>
    </div>
  )
}
