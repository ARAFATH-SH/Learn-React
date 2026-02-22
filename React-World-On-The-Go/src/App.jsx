import './App.css'
import Countries from './components/countries/Countries'

const CountriesPromise = fetch("https://countriesnow.space/api/v0.1/countries/flag/images")
.then(res => res.json());

function App() {
  return (
    <>
        <Countries CountriesPromise={CountriesPromise}></Countries>
    </>
  )
}

export default App
