import {useState} from "react";
import './css/App.css'

const Hello = (props) => {
    console.log(props)
    const bornYear = () => {
        const yearNow = new Date().getFullYear();
        return yearNow - props.age;
    }
    return (
        <div>
            <p>Hello {props.name}, you are {props.age}</p>
            <p>you are born in {bornYear()}</p>
        </div>
    )
}

const App = () => {
    const now = new Date()
    const a = 10
    const b = 101

    console.log('hello world from log\n', now,'\n', a+b)
    return (
          <div>
              <p>
                  {a} plus {b} is {a+b}
              </p>
              <Hello name ='girl' age={b-a}/>
          </div>
    )
}

export default App
