import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from './Header/Header';

export default function MainContainer({ children }) {

  return (
    <div className={styles.container}>
      <Head>
        <meta keywords={`Melty web-dev, web site development`} />
      </Head>
      
      <Header />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}></footer>
    </div>
  )
}