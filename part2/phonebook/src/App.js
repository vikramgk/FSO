import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filterTerm, setfilterTerm] = useState('')

  const handleNameInput = (event) => setNewName(event.target.value);
  const handleNumberInput = (event) => setNewPhone(event.target.value);
  const handleFilter = (event) => setfilterTerm(event.target.value);

  useEffect(() => {
    console.log("effect")
    personService
      .getAll()
      .then(response => {
        console.log(response)
        setPersons(response.data)
      })
  }, [])

  var filteredArray = filterTerm ?
    persons.filter(person => person.name.toLowerCase().includes(filterTerm)) :
    [];

  const checkIfExists = () => persons.some(person => person.name === newName);

  const addPerson = () => {
    const newPerson = {
      name: newName,
      number: newPhone
    }

    personService
      .addPerson(newPerson)
      .then(response => {
        // add the created object to the state
        setPersons([
          ...persons,
          response.data
        ]);
      })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!checkIfExists()) {
      addPerson();
      setNewName('');
      setNewPhone('');
    } else {
      alert(`${newName} already exists in the phonebook.`);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterTerm={filterTerm} handleFilter={handleFilter} />
      <h2>Add a new number</h2>
      <PersonForm
        handleSubmit={handleSubmit}
        newName={newName}
        newPhone={newPhone}
        handleNameInput={handleNameInput}
        handleNumberInput={handleNumberInput}
      />
      <h2>Numbers</h2>
      <Persons filteredArray={filteredArray} />
    </div>
  )
}

export default App