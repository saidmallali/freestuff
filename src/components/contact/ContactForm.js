import React,{useState} from 'react'
import styled from 'styled-components'




export default function ContactForm(props) {
    const [state, setstate] = useState({
        name:'',
        message:'',
        email:'',
        status:''
    })
    const {email,message,name} = state;

    // console.log(props)

    const handelChange = (e) => {
        setstate({...state, [e.target.name]: e.target.value})
    }


    

    const submitForm = (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            setstate({status: "SUCCESS" });
          } else {
            setstate({...state, status: "ERROR" });
          }
        };
        xhr.send(data);
      }



    return (
        <CantactFormStyle>
            <div className='form-card'>
            <h2 className='form-title'>Get in touch</h2>  
            {/* onSubmit={submitForm}  */}
             { state.status !== "SUCCESS" && <form onSubmit={submitForm} action="https://formspree.io/meqlbeya" method="POST">
                    <div className='form-group'>
                        <label htmlFor="name">name</label>
                            <input
                                id="name"
                                className="form-input"
                                type='text'
                                name='name'
                                value={name} 
                                required 
                                onChange={handelChange}
                                placeholder='name'
                            />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                className="form-input"
                                autoComplete="off"
                                type='email'
                                name='email'
                                value={email} 
                                required 
                                onChange={handelChange}
                                placeholder='email'
                            />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="message">Meassage</label>
                        <textarea
                            id="message"
                            className="form-input"
                            name='message'
                            value={message}
                            onChange={handelChange}
                            placeholder='message'
                            >

                        </textarea>
                    </div>
                    <div className="form-actions">
                        <button type="submit " className="btn submit">Submit</button>
                    </div>
                    </form> }
                {state.status === "SUCCESS" && <div style={{textAlign: "center"}}>
                <h2>Thank you for your message </h2>
                </div>}
            </div>

        </CantactFormStyle>
                )
}



const CantactFormStyle = styled.div`
    width: 100%;
    height: auto;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:16px;
    margin:50px 0;
    .form-card{
        background: #efefef;
        padding: 10px 30px;
        width: 80%;
        border-radius: 6px;
        box-shadow: 0px 2px 2px #ffb6b6;
        @media screen and (max-width: 600px) {
            width: 100%;
            padding: 7px 8px;
            }
         @media screen and (max-width: 400px) {
            
            padding: 10px 8px;
            }

            button.submit {
                border: none;
                background-color: #ffb6b6;
                margin-left: 50%;
                transform: translateX(-50%);
                padding: 9px 44px;
            }

        .form-title{
            display: block;
            font-size: 30px;
            color: #505050;
            line-height: 1.2;
            text-align: center;
            padding-bottom: 34px;

            @media screen and (max-width: 500px) {
                font-size: 23px;
                padding-bottom: 14px;
            }

            
            }

        .form-group{
            position: relative;
            width: 100%;
            z-index: 1;
            margin-bottom: 20px;
            label{
                font-size: 17px;
                margin: 11px;
                color: #3a3535;
                line-height: 33px;
                font-weight: 600;
            }
            .form-input {
                display: block;
                width: 100%;
                font-size: 15px;
                line-height: 1.5;
                color: #333333;
                outline: none;
                border:none;
                box-shadow: 1px 1px 3px #1d1d1d94;
            }

            input.form-input{
                height: 50px;
                border-radius: 25px;
                padding: 0 30px;
            }
            textarea.form-input {
                min-height: 150px;
                border-radius: 25px;
                padding: 12px 30px;
            }


            
        }
    }

`