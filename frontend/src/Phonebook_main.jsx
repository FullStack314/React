import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Phonebook_APP.jsx'
import './assets/index.css'

const notes = [
    {id: 1,  content: 'html is good', importance: true},
    {id: 2,  content: 'Browser executes Javascript', importance: true},
    {id: 3,  content: 'GET/POST are HTTP protocol.', importance: false},
]

ReactDOM.createRoot(document.getElementById('root_notes')).render(
    <App notes = {notes} />
)
