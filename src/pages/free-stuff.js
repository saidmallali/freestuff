import React from 'react'
import Layout from '../components/Layout'
import {Col,Row} from 'react-flexbox-grid'
import Card from '../components/Card'
import {graphql} from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"


 function FreeStuff(props) {
    const {data:{freestuffs:{edges}}} = props

    return (
        <>
            <Layout>
                <div className='navigate'>
                  <span><AniLink fade to='/'>Home</AniLink> > <span>Win stuff</span></span>
                </div>
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


export default FreeStuff;


export const query = graphql`
{
    freestuffs:allContentfulFreeSimples(filter:{type:{eq:"free"}}){
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