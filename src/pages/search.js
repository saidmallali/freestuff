import React from 'react'
import Layout from '../components/Layout'
import {Col,Row} from 'react-flexbox-grid'
import Card from '../components/Card'
import {graphql} from 'gatsby'
import Seo from '../components/Seo'


export default function Search(props) {
    const {data:{items:{edges}}} = props
    let term = ''
    if(props.location.state){
        term = props.location.state.searchItem
    } else {
        term = "win"
    }

   

    return (
        <Layout>
              <Seo title='Search'/>
                    <Row>
                        {
                            edges.filter(el => el.node.name.toLowerCase().includes(term.toLowerCase())).map((el,index) => {
                                return <Col xs={12} sm={6} md={4} lg={4} key={index}>
                                            <Card item={el.node}/>
                                            {/* {console.log(el.node)} */}
                                        </Col>
                            })
                        }

                    </Row>
        </Layout>
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
