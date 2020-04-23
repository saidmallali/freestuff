import React from 'react'
import styled from 'styled-components'
import CardRelated from './CardRelated'
import PropTypes from 'prop-types'
import {Col,Row} from 'react-flexbox-grid'

const RelatedStyle = styled.div`



`

function Related(props) {
    const {type,data} = props
    return (
        <RelatedStyle>
            <h2>{type === "free" ? "related free stuff" : "related win stuff"}</h2>
            <Row>
                {
                data.map((el,index) => {
                    return <Col xs={6} sm={4} md={3} lg={3}>
                                <CardRelated
                                    key={index}
                                    item={el}
                                    type={type}
                                />
                            </Col> 
                })
            }
            </Row>
           
            

        </RelatedStyle>
    )
}



Related.defaultProps = {
    data:null,
    type:'free'
}


Related.propTypes = {
    data: PropTypes.array,
    type:PropTypes.string
  }; 

export default Related;


