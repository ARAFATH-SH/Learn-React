import Batsman from './Batsman'
import './App.css'

function App() {

  function handleClick(){
    alert("Button Clicked 1")
  }
  const handleClick3 = () => {
    alert("clicked 3");
  }
  return (
    <>
      <h3>React Core Concepts</h3>
      <Batsman></Batsman>
    </>
  )
}

export default App
