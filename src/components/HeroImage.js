import React from 'react'
import styled from 'styled-components'
import BackgroundImage from "gatsby-background-image"

const HeroImage = ({img, className,children}) => {
    return (
        <BackgroundImage className={className} fluid={img }>
            {children}
        </BackgroundImage>
    )
}


export default styled(HeroImage)`
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,0.0718662464985994) 0%, rgba(0,0,0,1) 100%);
    min-height:170px;
    opacity:1!important;
    background-position: center;
    background-repeat: repeat-y;
    background-size: cover;
    display:flex;
    z-index:3;
    align-items:center;
    justify-content:flex-end;
` 