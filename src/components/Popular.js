import React from 'react'
import styled from 'styled-components'
import SmallCard from './SmallCard'
import  PropTypes from 'prop-types'
import {Link} from 'gatsby' 
// import {FaAngleDoubleRight} from 'react-icons/fa'

const PopularStyle = styled.div`
    h2{
        margin:10px 0 10px 5px;
    }

    .seeAll{
        display: block;
    margin-left: 100%;
    width: 70px;
    margin-top:11px;
    font-size: 15px;
    color: #2196F3;
    transform: translateX(-178%);

    &:hover{
        color:var(--primaryColor)
    }
    }
`

function Popular(props) {
const {latest,popularItem,popular,latestItems} = props
    return (
        <PopularStyle>
            <h2>{latest ? "Latest" : "popular"}</h2>
            {popular && popularItem.slice(0,4).map((el,index) => {
                return <SmallCard key={index} item={el.node}/>
            })}
            {latest && latestItems.slice(0,6).map((el,index) => {
                return <SmallCard key={index} item={el.node}/>
            })}
           <Link className='seeAll' to={latest ? '/latest' : '/popular'}>
                see all >>
            </Link>
        </PopularStyle>
    )
}


Popular.defaultProps = {
    item:null,
    latest:false,
    popular:false
}


Popular.propTypes = {
  
    latest: PropTypes.bool,
    popular:PropTypes.bool,
    popularItem:PropTypes.array,
    latestItems:PropTypes.array
  };

  export default  Popular;