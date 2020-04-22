import React from "react"
import Layout from '../components/Layout'
import {Col,Row} from 'react-flexbox-grid'
import Card from '../components/Card'
import {graphql} from 'gatsby'


export default function Home(props) {
    const {data:{items:{edges}}} = props
    // console.log('home data',totalCount,edges)
    return (
        <>
            <Layout>
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
    items:allContentfulFreeSimples{
      totalCount,
      edges{ 
          node{ 
            id,
          name,
          slug,
          lien,
          type,
          image{
            fluid{...GatsbyContentfulFluid_withWebp}
          },
          description{description}
            
        }
      }
    }
  }

`



