import React from 'react'
import styled from 'styled-components'
// import {useStaticQuery, graphql} from 'gatsby'
import HeroImage from './HeroImage'
import PropTypes from "prop-types";
import AniLink from "gatsby-plugin-transition-link/AniLink"
// import {Link} from 'gatsby'




function Card(props) {
    const {name,lien,description,image,type,slug} = props.item
    
    return (
        <CardStyle>
            <article className='card'>
                {/* <header className='card-header' style={{backgroundImage:`url(${offer})`}} > */}
                <header className='card-header'>
                <HeroImage img={image.fluid}></HeroImage>
                    {/* <Img fluid={data.file.childImageSharp.fluid} /> */}
                </header>
                <div className='content'>
                    <h4 className='title'>{name}</h4>
                    <p className='descirption'>
                        
                        {description.description.length > 250 ? `${description.description.slice(0,250)}...` : description.description}</p>
                    <p className='read-more'>
                       <AniLink fade  to={type === 'win' ? `/win-stuff/${slug}` : `/free-stuff/${slug}` }>read more</AniLink> </p>
                </div>
                <footer className='card-footer'>
                    <a className='btn btn-primary' href={lien} target='_blank'>Claim Now</a>
                </footer>
            </article>
        </CardStyle>
    )
}



const CardStyle = styled.div`
    margin: 0 0px 25px;
    background: #FFF;
    border-radius: 9px;
    box-shadow: var(--Shadow);
    overflow:hidden;
    border: 1px solid #f1ecec;
   
    .card {
        .card-header{
            width:100%;
            /* height:200px; */
            /* background-origin:center;
            background-repeat:no-repeat;
            background-size:cover; */
            @media screen and (max-width: 576px) {
                width:100%;
                overflow:hidden;
            }

        }
        .content{
            padding:13px 15px 10px 16px;;

            .title{}
            .descirption{
                font-size:14px;
                line-height: 21px;
            }

        }
        .card-footer{
            text-align:center;
            padding:15px 10px 20px 10px;
        }
    }

    .read-more{
        font-size:14px;
        font-size: 14px;
        color: #F44336;
        margin-top: 5px;
        margin-left: 6px;
        &:hover{
            cursor: pointer;
        }
    }

`


// const getImage = graphql`
// query Image {
//     file(relativePath:{eq:"offer.png"}){
//       childImageSharp{
//         fluid(maxWidth:500){
//             ...GatsbyImageSharpFluid_tracedSVG

//         }
//       }
//     }
//   }

// `

Card.defaultProps = {
    item:null
}


Card.propTypes = {
    item:PropTypes.shape({
        name: PropTypes.string.isRequired,
        lien:PropTypes.string.isRequired,
        description:PropTypes.object,
        image:PropTypes.object,
        type:PropTypes.string,
        slug:PropTypes.string
    })
  }; 
  export default Card;

  // node:
//     id: "378582de-cf32-56d4-8510-3632a44d80d0"
//     name: "Win £50 Cash Every Day"
//     slug: "win-£50-cash-every-day"
//     lien: "https://2020movies.online/"
//     type: "win"
//     image:
    //     fluid:
    //         src: "//images.ctfassets.net/qktw664en2kj/w7Pwe7xCWoeL2t7bbFHJz/27bc1ecc9b99d2da3e576dc53da68e70/25930-400xa.jpg?w=800&q=50"
    //         __proto__: Object
    //         __proto__: Object
//     description:
//         description: "Mobile Millionaires is a fantastic new site that gives away £50 every single day. All you need to do is register with your mobile number and each day they pick a number at random and that person wins. It's as simple as that!"
//         __proto__: Object