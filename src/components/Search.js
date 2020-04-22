import React,{useState} from 'react'
import styled from 'styled-components'
import {FaSistrix} from "react-icons/fa"



const SearchStyle = styled.div`

    form{
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

    button{
        background: #ffb6b6;
    border: none;
    font-size: 20px;
    line-height: 18px;
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

        const handelSubmit = (e) => {
            e.preventDefault();
            if( text !== ''){
                //do somting
                console.log(state.text)
                // setstate({...state, text:''})
            }
        }

    return (
        <SearchStyle>
            <form onSubmit={handelSubmit}>
                <input onChange={handelChange} type='text' name='text' placeholder='search' value={state.text}/>
                <button>
                    <FaSistrix/>
                </button>
            </form>
        </SearchStyle>
    )
}
