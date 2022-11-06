import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Universo Actis | Home</title>
        <meta name="keywords" content="actis"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>lorem ipsumloremlorem ipsumloremlorem ipsumloremlorem ipsumloremlorem ipsumloremlorem ipsumloremlorem ipsumlorem</p>
        <p className={styles.text}>lorem ipsumloremlorem ipsumloremlorem ipsumloremlorem ipsumloremlorem ipsumloremlorem ipsumloremlorem ipsumlorem</p>
        <Link className={styles.btn} href="/ninjas/ninja">Ninja Listing</Link>
      </div>
    </>
    )
}

// https://www.youtube.com/watch?v=zueyEdRZQlk&list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw&index=10&ab_channel=TheNetNinja