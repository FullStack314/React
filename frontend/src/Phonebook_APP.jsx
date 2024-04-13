import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]) 
  const [newName, setNewName] = useState('')

  const addPB = (event) => {
    event.preventDefault()
    const pbObject = {
      content: newNote,
      important: Math.random() > 0.5,
      id: notes.length + 1,
    }
  
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input />
        </div>
        
        <div>
          <button type="submit">addPB</button>
        </div>
      
      </form>
      <h2>Numbers</h2>
      ...
    </div>
  )
}

export default App