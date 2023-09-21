// import React from 'react';
import PropTypes from 'prop-types';

const ReuseableForm = ({handleSubmit, submitBtnText='Submit', children}) => {
    const handleLocalSubmit = e =>{
        e.preventDefault();
        const data={
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }
        handleSubmit(data);
    }
    return (
        <div style={{border:'2px solid yellow', borderRadius:'10px', padding:'20px'}}>
        {/* <h2>{formtitle}</h2> */}
        {/* Use children react props  */}
        {children}
        <form style={{ display: 'flex',flexDirection:'column', justifyContent:'start', alignItems:'start', gap:'0px'}} onSubmit={handleLocalSubmit}>
            <label htmlFor="name">Name:</label>
            <input style={{width:'100%'}} type="text" name="name" id="name" required/>
            <br />
            <label htmlFor="email">Email:</label>
            <input style={{width:'100%'}} type="email" name="email" id="email" required/>
            <br />
            <label htmlFor="password">Password:</label>
            <input style={{width:'100%'}} type="password" name="password" id="password" required/>
            <br />
            <input style={{width:'100%', padding:'10px'}} type="submit" value={submitBtnText}/>

        </form>
    </div>
    );
};

ReuseableForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired, // It should be a function
    submitBtnText: PropTypes.string.isRequired, // It should be a string
    children: PropTypes.node, // Children can be any valid React node
  };
  

export default ReuseableForm;