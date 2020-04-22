import React from 'react'
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import HeroImage from '../components/HeroImage'
import {Row,Col} from 'react-flexbox-grid'
import AniLink from "gatsby-plugin-transition-link/AniLink"


const ItemTemplateStyle = styled.div`

    .article{
        margin-top: 20px;
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

function ItemTemplate(props) {

    console.log('single item',props.data)
    const{name,lien,description,image,type} = props.data.item

    return (
        <ItemTemplateStyle>
            
            <Layout>
            <div className='navigate'>
                  <span><AniLink fade to='/'>Home</AniLink> > <AniLink fade to={type === "win" ? '/win-stuff' : '/free-stuff'}>{type === 'win' ? "Win stuff" : "Free stuff"}</AniLink> > <span>{name}</span>
                    </span>
                </div>
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
                                <a className='btn btn-primary'  rel="noopener noreferrer"  href={lien} target='_blank'>Claim Now</a>
                                
                            </div>
                        </Col>
                    </Row>


                    
                    
                </article>
            </Layout>
        </ItemTemplateStyle>
        
    )
}

export default ItemTemplate



export const query = graphql`
query($slug: String!){
    item:contentfulFreeSimples(slug:{eq:$slug}){
        slug,
      name,
      lien,
      type,
      image{
        fluid{...GatsbyContentfulFluid_withWebp} 

      },
      description{description}
      
    }
  }
`