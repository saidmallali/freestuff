import React from 'react'
import styled from 'styled-components'
import HeroImage from '../components/HeroImage'
import PropTypes from "prop-types";
import AniLink from "gatsby-plugin-transition-link/AniLink"


const CardRelatedStyle = styled.div`

    .card{
        position:relative;
        border: 1px solid #cac7c74d;
        padding: 6px 7px;
        .card-header{}
        .content{
            .badge{
                padding: 5px 5px;
                background-color: #ff8989;
                color: #fff;
                font-size: 14px;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 3;
                border-radius: 3px;
                letter-spacing: 1px;
            }
            .title{  
                    margin-top: 8px;
                    font-size: 15px;
                    font-weight: 600;
                    color:#333;

                    @media screen and (max-width: 576px) {
                        font-size:13px
                    }
                }
        }
    }

`

function CardRelated(props) {
    const {type,item} = props
    const {name,image,slug} = item.node
    console.log('related data',props)
    return (
        <CardRelatedStyle>
            <article className='card'>
                <header className='card-header'>
                    <HeroImage img={image.fluid}></HeroImage>
                </header>
                <div className='content'>
                    <span className='badge'>{type === 'free' ? 'Free stuff' : 'Win stuff'}</span>
                    <h4 className='title'>
                        <AniLink fade to={type === 'free' ? `/free-stuff/${slug}` : `/win-stuff/${slug}`}>
                            {name}
                        </AniLink>
                    </h4>
                </div>
            </article>
        </CardRelatedStyle>
    )
}

CardRelated.defaultProps = {
    data:null,
    type:'free'
}


CardRelated.propTypes = {
    data: PropTypes.object,
    type:PropTypes.string
  }; 
  export default CardRelated;