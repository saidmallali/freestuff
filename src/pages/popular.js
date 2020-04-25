import React from "react"
import Layout from '../components/Layout'
import {Col,Row} from 'react-flexbox-grid'
import Card from '../components/Card'
import {graphql} from 'gatsby'
import Seo from '../components/Seo'


export default function PopularPage(props) {
    const {data:{items:{edges}}} = props
    // console.log('home data',totalCount,edges)
    return (
        <>
            <Layout>
                    <Seo/>
                    <Row>
                        {
                            edges.map((el,index) => {
                                return <Col xs={12} sm={6} md={4} lg={4} key={index}>
                                            <Card item={el.node}/>
                                            {/* {console.log(el.node)} */}
                                        </Col>
                            })
                        }

                    </Row>
            </Layout>
        </>
    )
}




export const query = graphql`
{
    items:allContentfulFreeSimples(filter:{popular:{eq:true}}){
        totalCount,
      edges{
        node{
          name,
          slug,
          type,
          lien,
          image{
            fluid{...GatsbyContentfulFluid_withWebp}
          },
          description{description}
        
        }
      }
    }
  }

`