import React from "react"
import Layout from '../components/Layout'
import {Col,Row} from 'react-flexbox-grid'
import Card from '../components/Card'
import {graphql} from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Seo from '../components/Seo'


export default function Home(props) {
    const {data:{items:{edges}}} = props
    // console.log('home data',totalCount,edges)
    return (
        <>
            <Layout>
              <Seo  title='Home' description='get latest free stuff and stuff like gift card' />
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
                    <Row>
                      <AniLink className='btn viewAll' fade to='/all'>View All</AniLink>
                    </Row>
            </Layout>
        </>
    )
}




export const query = graphql`
{
    items:allContentfulFreeSimples(limit:20,sort:{fields:createdAt,order:DESC}){
      totalCount,
      edges{ 
          node{ 
            id,
          name,
          slug,
          lien,
          type,
          createdAt,
          image{
            fluid{...GatsbyContentfulFluid_withWebp}
          },
          description{description}
            
        }
      }
    }
  }

`



