import React from 'react'
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import HeroImage from '../components/HeroImage'
import {Row,Col} from 'react-flexbox-grid'

const ItemTemplateStyle = styled.div`

    .article{
        margin-top: 30px;
        background-color: #fff;
        padding: 20px 15px;
        border-radius: 5px;
        .image{
            margin-top: 18px;
        }
        .content {
            padding: 10px;
            .title{
                font-size:30px;
            }

            .description{
                margin-bottom: 29px;
                text-indent: 22px;
                line-height: 30px;
                color: #333;
            }

            a{
                display: block;
                width: 200px;
                text-align: center;
                opacity: .9;
                margin-left: 50%;
                transform: translateX(-50%);
            }
        }

    }

`

function itemTemplate(props) {

    console.log('single item',props.data)
    const{name,lien,description,image} = props.data.item

    return (
        <ItemTemplateStyle>
            <Layout>
                <article className='article'>
                    <Row>
                        <Col xs={12} sm={12} md={4} lg={4}>

                            <div className='image'>
                                <HeroImage img={image.fluid}></HeroImage>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={8} lg={8}>
                            <div className='content'>
                                <h1 className='title'>{name}</h1>
                                <p className='description'>{ description.description}</p>
                                <a className='btn btn-primary' href={lien} target='_blank'>Claim Now</a>
                                
                            </div>
                        </Col>
                    </Row>


                    
                    
                </article>
            </Layout>
        </ItemTemplateStyle>
        
    )
}

export default itemTemplate



export const query = graphql`
query($slug: String!){
    item:contentfulFreeSimples(slug:{eq:$slug}){
        slug,
      name,
      lien,
      type,
      image{
        fluid{...GatsbyContentfulFluid_tracedSVG}
      },
      description{description}
      
    }
  }
`