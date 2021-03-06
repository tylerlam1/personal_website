import '@fortawesome/fontawesome-svg-core/styles.css'
import { About } from '../components/about'
import Head from 'next/head'
import { Identify } from '../components/identify'
import styles from '../styles/Home.module.css'

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tyler Lam</title>
        <meta
          name="description"
          content="View University of Calgary student Tyler Lam's portfolio website"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.tylerlam.com" />
      </Head>
      <main className={styles.main}>
        <Identify />
        <About />
      </main>
    </div>
  )
}
