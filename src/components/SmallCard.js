import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
// import {Link} from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import PropTypes from 'prop-types'



// const getsmallImage = graphql`
// query smallImage {
//     file(relativePath:{eq:"offer.png"}){
//       childImageSharp{
//         fixed(width:110,height:68){
//             ...GatsbyImageSharpFixed

//         }
//       }
//     }
//   }

// `

function SmallCard(props) {
    const {name,type,slug,image} = props.item
    // const data = useStaticQuery(getsmallImage)
    // console.log("item",props.item)
    return (
        <SmallCardStyle>
            <div className='smallCard'>
                <div className='img'> 
                    <Img fixed={image.fixed} />
                </div>
                <div className='content'>
                    <AniLink fade className='title' to={type === 'free' ? `/free-stuff/${slug}` : `/win-stuff/${slug}`}>
                         {name.length > 40 ?   `${name.slice(0,40)}...` : name }
                    </AniLink>
                    <AniLink className='readMore' to={type === 'free' ? `/free-stuff/${slug}` : `/win-stuff/${slug}`} >
                        read more
                    </AniLink>
                </div>
                
            </div>
            
        </SmallCardStyle>
    )
}



SmallCard.defaultProps = {
    item:null,
    type:'free'
}


SmallCard.propTypes = {
    type:PropTypes.string,
    item: PropTypes.object,
    
  };

  export default  SmallCard;



const SmallCardStyle = styled.div`
        margin-top: 14px;
    width: 92%;
    border: 1px solid #f3f3f32e;
    box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.04);

    .smallCard{
        padding-right:5px;
        width:100%;
        display:flex;
        align-items:center;
        .img{
            width: 110px;
            height: 68px;
        }
       
    }


    .content{
        display:flex;
        flex-direction:column;
        align-items:center;
        height: 68px;
        justify-content: space-between;
        .title{
            margin-left:5px;
            align-self: start;
            margin-top: 4px;
            font-size: 14px;
            /* color:#00BCD4 */
        
        }

        .readMore{
            font-size:12px;
            margin-right: auto;
            margin-left: 10px;
            margin-bottom: 3px;
            color: #00BCD4;
            text-decoration: underline;
        }
    }
    

`