// import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'
import App from './App.jsx'
import './css/index.css'

const promise = axios.get('http://localhost:3001/notes')
console.log(promise)
promise.then(response=> {
    console.log(response)
})
ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
