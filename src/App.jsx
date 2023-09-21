import './App.css'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import StatefulForm from './Components/StatefulForm/StatefulForm'

function App() {
  return (
    <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:'30px'}}>
      
      <div>
        <h1>Simple Form</h1>
        <SimpleForm></SimpleForm>
      </div>
      
      <div>
        <h1>Stateful Form</h1>
        <StatefulForm></StatefulForm>
      </div>

    </div>
  )
}

export default App
