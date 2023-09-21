import './App.css'
import CustomHookForm from './Components/CustomHookForm/CustomHookForm'
import RefForm from './Components/RefForm/RefForm'
import ReuseableForm from './Components/ReuseableForm/ReuseableForm'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import StatefulForm from './Components/StatefulForm/StatefulForm'

function App() {
  const handleSignUpSubmit= data =>{
    console.log('Sign Up Data: ', data);
  }
  const handleUpdateSubmit= data =>{
    console.log('Profile Update Data: ', data);
  }
  return (
  <div>
    <h1 style={{textAlign:'center', color:'orange'}}><span style={{borderBottom:'5px dashed yellow'}}>Different types of React Form</span></h1>
    <div style={{display:'flex', flexDirection:'column', justifyContent:'between', border:'5px solid orange', borderRadius:'10px', padding:'10px', marginTop:'50px', marginBottom:'30px'}}>
        <div style={{marginBottom:'auto'}}>
         <h1>Reuseable Form</h1>
          <p><small>{`Reusable forms enhance code maintainability by encapsulating form logic and presentation, ensuring consistency across your application. They facilitate code sharing, minimize redundancy, and simplify development, resulting in a more organized and efficient codebase. `}</small></p>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', justifyContent:'center', padding:'10px', gap:'20px'}}>
        <ReuseableForm formtitle={'Sign Up'} submitBtnText={'Sign Up'} handleSubmit={handleSignUpSubmit}
        >
          <h2>Sign Up</h2>
          <p>Please sign up</p>
        </ReuseableForm>
        <ReuseableForm formtitle={'Profile Update'} submitBtnText={'Update'} handleSubmit={handleUpdateSubmit}>
          <h2>Update Profile</h2>
          <p>Update your profile</p>
        </ReuseableForm>
        </div>
      </div>
    <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:'30px'}}>
      <div style={{display:'flex', flexDirection:'column', justifyContent:'between', border:'5px solid orange', borderRadius:'10px', padding:'10px'}} >
        <div style={{marginBottom:'auto'}}>
          <h1>Simple Form</h1>
          <p><small>{`Use form tag and onSubmit handler with event(e) and access value by : e.target.[name of the input field].value\n`}</small></p>
        </div>
        <div>
        <SimpleForm></SimpleForm>
        </div>
      </div>
      
      <div style={{display:'flex', flexDirection:'column', justifyContent:'between', border:'5px solid orange', borderRadius:'10px', padding:'10px'}}>
        <div style={{marginBottom:'auto'}}>
          <h1>Stateful Form</h1>
          <p><small>{`Controlled element: Use individual field state for each input field.\nOne object in a field holding all the input field value`}</small></p>
        </div>
        <div>
        <StatefulForm></StatefulForm>
        </div>
      </div>

      <div style={{display:'flex', flexDirection:'column', justifyContent:'between', border:'5px solid orange', borderRadius:'10px', padding:'10px'}}>
        <div style={{marginBottom:'auto'}}>
         <h1>Reference Form</h1>
          <p><small>{`Uncontrolled element: It uses 'useRef()' to create reference to the element and access value like: 'nameRef.current.value'`}</small></p>
        </div>
        <div>
        <RefForm></RefForm>
        </div>
      </div>

      <div style={{display:'flex', flexDirection:'column', justifyContent:'between', border:'5px solid orange', borderRadius:'10px', padding:'10px'}}>
        <div style={{marginBottom:'auto'}}>
         <h1>Custom Hook Form</h1>
          <p><small>{`Custom hooks in React are used for encapsulating and sharing logic across multiple components.Custom hooks promote code reusability and maintainability by separating concerns and making your code more organized. `}</small></p>
        </div>
        <div>
        <CustomHookForm></CustomHookForm>
        </div>
      </div>
    </div>
  </div>
  )
}

export default App
