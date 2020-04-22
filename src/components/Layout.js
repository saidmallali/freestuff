import React from 'react'
import Header from './Header'
import Footer from './Footer'
import SideBar from './SideBar'
import {Col,Row} from 'react-flexbox-grid'
import './layout.css'


    


export default function Layout(props) {
    return (
        <div className='layout'>
           <Header/> 
           <Row>
            <Col xs={12} sm={12} md={12} lg={9}>
                <main>
                        {
                            props.children
                        }
                </main>
            </Col>
            <Col xs={0} sm={0} md={0} lg={3}>
                <SideBar/>
            </Col>
           </Row>
           
            
           <Footer/>
        </div>
    )
}
