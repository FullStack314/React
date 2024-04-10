import { useState } from 'react'
import './assets/App.css'
import { Hello1, Hello2 } from './hello.jsx';

function App(props) {
  const name = "Peter"
  const age = 25
  const {counter} = props

  return (
    <>
      <Hello1 />
      <h1>Vite + React</h1>
      {counter}
      <Hello2 name={name} age = {age} />
    </>
  )
}


const App2=() => {
  const [ counter, setCounter ] = useState(0)

  setTimeout(() => setCounter(counter + 1),1000)

  return (
    <div>
      <Hello1 />
      {counter}
    </div>
  )
}

export default App2
