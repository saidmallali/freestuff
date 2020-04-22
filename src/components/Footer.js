import React from 'react'
import styled from 'styled-components'
import links from '../constants/links'
import social from '../constants/social'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import {useStaticQuery,graphql} from "gatsby"

const FooterStyle = styled.footer`
    background: #292929;
    text-align:center;
    color: #a5a5a5;
    font-size: 14px;
    margin-top:auto;

    .links{
        padding: 10px 10px;
         a{
            text-transform: uppercase;
            margin:0 5px;
            transition:var(--mainTransition);
            &:hover{
                color:#fff;
            }
        }
    }

    .social {
        font-size:20px;
        a{
            margin:0 5px;
            &:hover{
                color:#fff;
            }
        }
    }

    .copyright{
        padding:10px 20px 20px 20px;

    }

`
const Footer = () => {

    const siteData = useStaticQuery(graphql`
        {
            site{
                data:siteMetadata{
                title,
                author
                    }
                }
        }
    `)
      console.log(siteData)
    return (
        <FooterStyle>
            <div className='links'>
                {links.map((item,index) => {
                    return <AniLink fade key={index} to={item.path}>{item.text}</AniLink>
                })}
            </div>
            <div className='social'>
                {
                    social.map((item,index) => {
                    return <a  key={index} to={item.url} target='_blank'>{item.icon}</a>
                    })
                }
            </div>
            <div className='copyright'>
                copyright &copy; {siteData.site.data.title} company {new Date().getFullYear()} all rights reserved designed by {siteData.site.data.author}
                {/* copyright &copy; {siteName} company {new Date().getFullYear()} all rights reserved */}
            </div>
        </FooterStyle>
    )

}

export default Footer;
