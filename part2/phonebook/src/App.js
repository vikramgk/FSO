import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const handleInput = (event) => setNewName(event.target.value);
  // take newName state, put in object and concat to state
  const handleSubmit = (event) => {
    event.preventDefault()
    // you are assigning a new object so it has to be an array too
    setPersons([
      ...persons,
      {name: newName}
    ]);
    setNewName('');
  };

  return (
    <div>
      {/*<div>debug: {newName}</div>*/}
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleInput} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(person => <p>{person.name}</p>)}
    </div>
  )
}

export default App