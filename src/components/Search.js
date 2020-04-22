import React,{useState} from 'react'
import styled from 'styled-components'
import {FaSistrix} from "react-icons/fa"
import { Link } from 'gatsby'



const SearchStyle = styled.div`

    .form{
        display:flex;
        align-items:center;
        width:100%;
    }

    input[type='text']{
        background-color: #fff;
    border: 2px solid #ffb6b6;
    padding: 7px 4px;
    font-size: 14px;
    width:80%;

        &:focus{
            outline:none
        }
    }

    .button{
        background: #ffb6b6;
    border: none;
    font-size: 19px;
    line-height: 17px;
    padding: 6px 5px;
    color: #fff;
        cursor: pointer;
    &:focus{
        outline:none;
    }
    }

`

export default function Search() {

    const [state, setstate] = useState({
        text:''
    })
    const {text} = state;

    const handelChange = (e) => {
        setstate({...state, [e.target.name]: e.target.value})
        }

        // const handelSubmit = (e) => {
        //     // e.preventDefault();
        //     if( text !== ''){
                
        //     }
        // }

    return (
        <SearchStyle>
            <div className='form' >
                <input onChange={handelChange} type='text' name='text' placeholder='search' value={state.text}/>
                <Link className='button' to='/search' state={{ searchItem : text}}>
                    <FaSistrix/>
                </Link>
            </div>
        </SearchStyle>
    )
}
