import React from 'react'
import styled from "styled-components"
import Search from './Search'
import Popular from './Popular'
import {graphql,useStaticQuery} from 'gatsby'

const SideBarStyle = styled.div`
@media screen and (max-width: 992px) {
  display:none
}

padding:20px 5px;
`

export default function SideBar() {
    const Items = useStaticQuery(getPopularItems)
    // console.log("popularItems",Items)
    return (
        <SideBarStyle>
            <Search/>
            <Popular latest={true} latestItems={Items.latest.edges}/>
            <Popular popular={true} popularItem={Items.popular.edges}/>
        </SideBarStyle>
    )
}



const getPopularItems = graphql`
query popular{
    popular:allContentfulFreeSimples(filter:{popular:{eq:true}}){
        totalCount,
      edges{
        node{
          name,
          slug,
          type,
          image{
            fixed(width:110,height:68){...GatsbyContentfulFixed_tracedSVG}
          }
        
        }
      }
    }
    latest:allContentfulFreeSimples(sort:{fields:createdAt,order:DESC}){
        totalCount,
      edges{
        node{
          name,
          slug,
          type,
          lien,
          createdAt,
          image{
            fixed(width:110,height:68){...GatsbyContentfulFixed_tracedSVG}
          }
        
        }
      }
    }
  },
 
`


