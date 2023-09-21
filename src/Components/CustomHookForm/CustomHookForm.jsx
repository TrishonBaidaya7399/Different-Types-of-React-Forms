import useInputState from "../../Hooks/useInputState";

const CustomHookForm = () => {
    const nameState = useInputState();
    const emailState = useInputState();
    const passwordState = useInputState();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`***Custom Hook Form Data***\n\nName: ${nameState.value}\nEmail: ${emailState.value}\nPassword: ${passwordState.value}\n\n`);
    }
    
    return (
        <div>
            <div style={{ border: '2px solid yellow', borderRadius: '10px', padding: '20px' }}>
                <form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', gap: '0px' }} onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input {...nameState} style={{ width: '100%' }} type="text" name="name" id="" required />
                    <br />
                    <label htmlFor="email">Email:</label>
                    <input {...emailState} style={{ width: '100%' }} type="email" name="email" id="" required />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input {...passwordState} style={{ width: '100%' }} type="password" name="password" id="" required />
                    <br />
                    <input style={{ width: '100%', padding: '10px' }} type="submit" value='Submit' />
                </form>
            </div>
        </div>
    );
};

CustomHookForm.propTypes = {};

export default CustomHookForm;
