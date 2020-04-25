import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Card from '../components/Card'
import {Row,Col} from 'react-flexbox-grid'
import {graphql} from 'gatsby'
import Pagination from '../components/Pagination'


const AllItemsStyle = styled.div`



`

// pageContext:
// currentPage: 1
// limit: 10
// numPages: 1
// skip: 0

export default function allItemsTemplate(props) {
    const {data} = props
    const {currentPage,numPages} = props.pageContext

    console.log('currentPage',currentPage)
    return (
        <AllItemsStyle>
            <Layout>
            <Row>
                {
                    data.items.edges.map((el,index) => {
                        return <Col xs={12} sm={6} md={4} lg={4} key={index}>
                                    <Card item={el.node}/>
                                </Col>
                            })
                }
                    </Row>
                    <Row>
                        <Pagination 
                            numPages={numPages} 
                            currentPage={currentPage}
                            path="/all/"
                            />
                    </Row>   
            </Layout>
                    
        </AllItemsStyle>
    )
}
export const query = graphql`
query getAllitems($skip:Int!,$limit:Int!){ 
    items:allContentfulFreeSimples
      (skip:$skip, limit:$limit,sort:{fields:createdAt,order:DESC}){ 
              totalCount,
              edges{ 
                node{ 
                    id,
                  name,
                  slug,
                  lien,
                  type,
                  createdAt
                  image{
                    fluid{...GatsbyContentfulFluid_withWebp}
                  },
                  description{description}
                    
                }
          }
       }
    }

`