import React from 'react'
import styled from "styled-components"
import PropTypes from "prop-types";
import AniLink from "gatsby-plugin-transition-link/AniLink"


const PaginationStyle = styled.div`

width: 100%;
  display: flex;
  align-items: center;
  margin-top:20px;

.pagination {
  margin: 0 auto;
  display: flex;
  align-items: center;

  li {
    background-color: #f18282;
    width: 37px;
    height: 37px;
    margin: 0 4px;
    border-radius: 19px;
    color: #fff;
    text-align: center;
    transition: var(--mainTransition);
    font-size: 15px;
    line-height: 35px;
    &:hover,
    &.active{
        background-color:#ff6a6a;
    /* border: 1px solid #333; */
    }

    

  a {
    width: 100%;
  height: 100%;
  /* font-size: 15px;
  line-height: 30px; */
  display: inline-block;
  }
}
}

.hidden{
        display:none;
    }
    .show{
        display:block
    }


`

 function Pagination(props) {
     const {currentPage,numPages,path} = props

     const prevPage = currentPage - 1 === 1 ? '/all/' : `/all/${currentPage - 1}`  
     const nextPage = `/all/${currentPage + 1}`
     
    return (
            <PaginationStyle>
                        
                        <ul className='pagination'>
                            <li className={(currentPage - 1) === 0 ? 'hidden' : 'show'}>
                               <AniLink to={prevPage}>prev</AniLink>
                            </li>
                            {
                                Array.from({length:numPages}, (_,i) => {
                                    return (
                                        <li className={ (i + 1) === currentPage ? 'pagination-item active' : 'pagination-item'} key={i}>
                                            <AniLink fade to={`${path}${i === 0 ? "" : i+1}`}>{i + 1}</AniLink>
                                        </li>
                                    )
                                })
                            }
                            <li className={currentPage === numPages ? 'hidden' : 'show'}>
                               <AniLink  to={nextPage}>next</AniLink> 
                            </li>
                        </ul>
                </PaginationStyle>
    )
}
Pagination.defaultProps = {
    currentPage: 0,
    numPages:0,
    path:'/all/'
}


Pagination.propTypes = {
    currentPage:PropTypes.number,
    numPages:PropTypes.number,
    path:PropTypes.string
  }; 


export default Pagination;