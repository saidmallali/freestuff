import React from 'react'
import Layout from '../components/Layout'
import {Col,Row} from 'react-flexbox-grid'
import Card from '../components/Card'
import {graphql} from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Seo from '../components/Seo'

 function WinStuff(props) {
    const {data:{winstuffs:{edges}}} = props

    return (
        <>
            <Layout>
              <Seo title='Win Stuff' description='get latest win stuff like gift card '/>
                <div  className='navigate'>
                  <span><AniLink fade to='/'>Home</AniLink> > <span>Free stuff</span></span>
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

export default WinStuff;

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
              fluid{...GatsbyContentfulFluid_withWebp}
            },
            description{description}
              
          }
        }
      }
  }

`