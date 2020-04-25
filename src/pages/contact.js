import React from 'react'
import Layout from "../components/Layout"
import ContactForm from '../components/contact/ContactForm'
import Seo from '../components/Seo'

export default function Contact() {
    return (
        <Layout>
            <Seo title='Contact us'/>
            <ContactForm/>
        </Layout>
    )
}


