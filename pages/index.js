
import Layout from '../components/layout'
import Head from 'next/head'
import Header from '../components/header'
import Link from 'next/link'
import HomeHeader from '../components/homeHeager'
import Home from '../components/home'
import Count from '../components/count'
import Testi from '../components/testi'
import Footer from '../components/footer'
  export default function HomePage(){
    return (
      <Layout home>
        <Head>
        <title>Sebo</title>
        </Head>
        <Header />
        <HomeHeader />
        <Home />
        <Count />
        <Testi />
        <Footer/>
      </Layout>
    )
  }
