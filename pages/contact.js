import Layout from '../components/layout'
import Header from '../components/header'
import ContactHeader from '../components/contact_components/contactHeader'
import ContactSection from '../components/contact_components/contactSection'
import Footer from '../components/footer'

export default function Contact(){
    return(
        <Layout>
            <Header/>
            <ContactHeader/>
            <ContactSection/>
            <Footer />
        </Layout>
    )
}