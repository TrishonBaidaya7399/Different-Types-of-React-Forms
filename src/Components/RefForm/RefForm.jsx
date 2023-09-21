// import React from 'react';
// import PropTypes from 'prop-types';

import { useEffect, useRef } from "react";

const RefForm = () => {
    const nameRef= useRef('');
    const emailRef= useRef('');
    const passwordRef= useRef('');
    const handleSubmit=e=>{
        e.preventDefault();
        console.log(`***Reference Form Data***\n\nName: ${nameRef}\nEmail: ${emailRef}\nPassword: ${passwordRef}\n\n`);
    }
    useEffect(()=>{
        nameRef.current.focus
    },[])

    return (
        <div style={{border:'2px solid yellow', borderRadius:'10px', padding:'20px'}}>
            
            <form style={{ display: 'flex',flexDirection:'column', justifyContent:'start', alignItems:'start', gap:'0px'}} onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input ref={nameRef} style={{width:'100%'}} type="text" name="name" id="name" required/>
                <br />
                <label htmlFor="email">Email:</label>
                <input ref={emailRef} style={{width:'100%'}} type="email" name="email" id="email" required/>
                <br />
                <label htmlFor="password">Password:</label>
                <input ref={passwordRef} style={{width:'100%'}} type="password" name="password" id="password" required/>
                <br />
                <input style={{width:'100%', padding:'10px'}} type="submit" value='Submit'/>

            </form>
        </div>
    );
};

RefForm.propTypes = {
    
};

export default RefForm;