import './App.css'
import Todo from './Todo'

function App() {

  return (
    <>
      <h1>React Core Concepts</h1>
      <Todo></Todo>
      {/* <Student></Student>
      <Developer name="Arafath" Tech="JavaScript"></Developer>
      <Developer name="Shihab" Tech="React"></Developer>
      <Developer name="John" ></Developer>
      */}
    </>
  )
}

function Person(){
  const name = "Arafath"
  return(
    <>
      <h2>Person Component</h2>
      <p>Hello {name}</p>
    </>
  )
}
function Student(){
  return(
    <div>
      <p>Name: </p>
      <p>Dept: </p>
    </div>
  )
}

function Developer({name, Tech}){
  return(
    <div style={{border: "2px solid green", borderRadius: "10px", marginTop: "10px"}}>
      <h1>Name: {name}</h1>
      <p>Tech: {Tech}</p>
    </div>
  )
}

export default App
