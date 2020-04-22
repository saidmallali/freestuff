import React,{useState} from 'react'
import styled from 'styled-components'
// import {Link} from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import links from "../constants/links"
import social from "../constants/social"
import {FaBars} from "react-icons/fa"
// import HeroImage from "./HeroImage"
import {graphql,useStaticQuery} from 'gatsby'
import background2 from '../images/background2.jpg'

const HeaderStyle = styled.div`
    background: #f8fdffcc;
.nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem .8rem;
  
}

.logo-icon {
  color: var(--BleuDark);
  font-size: 1.8rem;
}
.logo-btn {
  background: transparent;
  border: none;
  outline: none;
}
.logo-btn:hover {
  cursor: pointer;
}

.nav-links {
  list-style-type: none;
  transition: var(--mainTransition);
  height: 0;
  overflow: hidden;
}

.show-nav {
    height: 242px;
    height:auto;
}

.nav-links a {
  display: block;
  padding: 1rem .8rem;
  text-decoration: none;
  text-transform: capitalize;
  color: var(--mainBlack);
  transition: var(--mainTransition);
  font-weight: normal;
  letter-spacing: 1px;
  
}
.nav-links a:hover {
  /* color: var(--primaryColor); */
  color:rgb(0, 139, 249);
}

@media screen and (min-width: 576px) {
  .navbar {
    padding: 0 2rem;
  }
}

@media screen and (min-width: 992px) {
  .logo-btn {
    display: none;
  }

  .nav-center {
    max-width: 1258px;
    max-width:calc(100% - 30px);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-links {
    height: auto;
    display: flex;
  }

  .nav-links a {
    padding: 1rem .8rem;
  }

}

.banner{
    width:100vw;
    overflow:hidden;
    height: 200px;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    background-position: center;
    background-repeat: repeat-y;
    background-size: cover;

    .social{
        display:flex;
        align-items:center;
        align-self:flex-start;
        margin-right:40px;
        background-color: #fff;
        margin-top: 8px;
        border-radius: 5px;
        li{
            margin: 0px 7px;
            margin-top: 6px;
            
            transition:var(mainTransition);
            &:hover{
               cursor: pointer;
               transform:translateY(2px)
             }

             a svg{
            font-size:30px;
             }

        }
    }
}


`
const getBackgroundImage = graphql`
query backImage {
  image: file(relativePath:{eq:"PRI_90099206.jpg"}){
    childImageSharp{
      fluid(maxWidth:2000, quality:90){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}

`

export default function Header() {

    const [isOpen, setstate] = useState(false);
    const backImg = useStaticQuery(getBackgroundImage)
    const togolNav = () => {
        setstate(isOpen => !isOpen)
    }

    return (
        <HeaderStyle>
                
                <nav className='nav-center'>
                    <div className='nav-header'>
                        <span className='logo'>
                            <strong>free stuff</strong>
                        </span>
                        <button type='button' className='logo-btn' onClick={togolNav}>
                            <FaBars className='logo-icon'/>
                        </button>
                    </div>
                    <ul className={isOpen ? `nav-links show-nav` : `nav-links`}>
                        {
                            links.map((item, index)=> {
                                return (
                                <li key={index}><AniLink  
                                  fade
                                  duration={1}  to={item.path} activeStyle={{color:"rgb(0, 139, 249)"}}  >{item.text}</AniLink></li>
                                )
                            })
                        }
                    </ul>
                </nav>
                <div className='banner' style={{backgroundImage:`url(${background2})`}}> 
                    {/* <HeroImage img={backImg.image.childImageSharp.fluid}> */}
                    <ul className='social'>
                    {
                         social.map((item,index) => {
                         return <li key={index}><a   to={item.url} target='_blank' style={{color:item.color}}>{item.icon}</a> </li>
                         })   
                        }
                    </ul>
                    {/* </HeroImage> */}
                    
                </div>
        </HeaderStyle>
    )
}
