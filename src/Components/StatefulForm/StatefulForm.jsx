import { useState } from "react";

const StatefulForm = () => {
    const [name, setName]=useState(null)
    const [email, setEmail]=useState(null)
    const [password, setPassword]=useState(null)
    const [error, setError]= useState('')
    const [submit, setSubmit]= useState('')
    const handleSubmit= e =>{
        e.preventDefault();
        // password validation
        if(password.length<=6) 
        {
            setError(`Password must be greater than 6 characters or more`)
        }else{
            setError('')
            console.log('***Data get from Stateful Form***\n\nName: ', name ,`\nEmail: `, email, '\nPassword: ',password);
            setSubmit('submited')
        }
    }
    const handleNameChange=e=>{
        setName(e.target.value);
        console.log(name);
    }
    const handleEmailChange = e =>{
        setEmail(e.target.value);
        console.log(email);
    }
    const handlePasswordChange=e=>{
        setPassword(e.target.value)
        console.log(password);
    }
    return (
        <div style={{border:'2px solid yellow', borderRadius:'10px', padding:'20px'}}>
        <form style={{ display: 'flex',flexDirection:'column', justifyContent:'start', alignItems:'start', gap:'0px'}} onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input onChange={handleNameChange} style={{width:'100%'}} type="text" name="name" id="name" required/>
            <br />
            <label htmlFor="email">Email:</label>
            <input onChange={handleEmailChange} style={{width:'100%'}} type="email" name="email" id="email" required/>
            <br />
            <label htmlFor="password">Password:</label>
            <input onChange={handlePasswordChange} style={{width:'100%'}} type="password" name="password" id="password" required/>
            <br />
            <input style={{width:'100%', padding:'10px'}} type="submit" value={`${submit==='submited'?'Submited':'Submit'}`} disabled={submit==='submited'}/>
            {error && <p style={{color:'red', marginBottom:'0px'}}>{error}</p>}

        </form>
    </div>
    );
};

StatefulForm.propTypes = {
    
};

export default StatefulForm;