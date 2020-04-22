import React from 'react'
import Layout from '../components/Layout'
import {Col,Row} from 'react-flexbox-grid'
import Card from '../components/Card'
import {graphql} from 'gatsby'

 function winStuff(props) {
    const {data:{winstuffs:{edges}}} = props

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

export default winStuff;

export const query = graphql`
{
    winstuffs:allContentfulFreeSimples(filter:{type:{eq:"win"}}){
        totalCount,
        edges{ 
            node{ 
              id,
            name,
            slug,
            lien,
            type,
            image{
              fluid{src}
            },
            description{description}
              
          }
        }
      }
  }

`