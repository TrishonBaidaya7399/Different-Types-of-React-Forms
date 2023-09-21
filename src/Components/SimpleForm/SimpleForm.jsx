// import PropTypes from 'prop-types';

const SimpleForm = () => {
    const handleSubmit = e =>{
        e.preventDefault(); //it prevents default behavior of form tag, like reloading after submit
        console.log('***Data get from Simple Form***\n\nName: ', e.target.name.value,`\nEmail: `, e.target.email.value, '\nPassword: ',e.target.password.value,`\n\n`);
    }
    return (
        <div style={{border:'2px solid yellow', borderRadius:'10px', padding:'20px'}}>
            <form style={{ display: 'flex',flexDirection:'column', justifyContent:'start', alignItems:'start', gap:'0px'}} onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input style={{width:'100%'}} type="text" name="name" id="name" required/>
                <br />
                <label htmlFor="email">Email:</label>
                <input style={{width:'100%'}} type="email" name="email" id="email" required/>
                <br />
                <label htmlFor="password">Password:</label>
                <input style={{width:'100%'}} type="password" name="password" id="password" required/>
                <br />
                <input style={{width:'100%', padding:'10px'}} type="submit" value='Submit'/>

            </form>
        </div>
    );
};

SimpleForm.propTypes = {
    
};

export default SimpleForm;