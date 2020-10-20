import Layout from '../components/layout'
import Head from 'next/head'
import Header from '../components/header'
import AboutHeader from '../components/about_components/aboutHeader'
import Mission from '../components/about_components/mission'
import Count from '../components/count'
import Testi from '../components/testi'
import Footer from '../components/footer'

export default function About() {
    return(
        <Layout>
            <Head>
                <title>A propos</title>
            </Head>
            <Header/>
            <AboutHeader/>
            <Mission/>
            <Count />
            <Testi />
            <Footer />
        </Layout>
    )
}