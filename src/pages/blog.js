import React from 'react'
import Layout from '../components/Layout'
import {graphql} from "gatsby"
import Seo from '../components/Seo'

export default function Blog(props) {
const {data: {site:{siteMetadata}}} =props
    // console.log(props)
    return (
        <Layout>
          <Seo titel='Blog' />
           <h1>blog </h1>
            <h3>title: {siteMetadata.title}</h3>
    <h3>author: {siteMetadata.author}</h3>
        </Layout>
    )
}

export const query = graphql`
{
    site{
      siteMetadata{
        title,
        author
      }
    }
  }

`