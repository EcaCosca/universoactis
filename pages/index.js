import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>lorem ipsumloremlorem ipsumloremlorem ipsumloremlorem ipsumloremlorem ipsumloremlorem ipsumloremlorem ipsumlorem</p>
      <p>lorem ipsumloremlorem ipsumloremlorem ipsumloremlorem ipsumloremlorem ipsumloremlorem ipsumloremlorem ipsumlorem</p>
      <Footer />
    </div>
    )
}

// https://www.youtube.com/watch?v=MJT_WXdSPjE&list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw&index=3&ab_channel=TheNetNinja