import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/persons'
import Message from './components/Message'

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
  const [message, setMessage] = useState({message: '', type:''})

  const handleNameInput = (event) => setNewName(event.target.value);
  const handleNumberInput = (event) => setNewPhone(event.target.value);
  const handleFilter = (event) => setfilterTerm(event.target.value);

  useEffect(() => {
    console.log("effect")
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  var filteredArray = filterTerm ?
    persons.filter(person => person.name.toLowerCase().includes(filterTerm)) :
    [];

  const checkIfExists = () => persons.some(person => person.name === newName);
  const findPerson = personName => persons.find(person => person.name === personName);
  const findPersonIndex = personName => persons.findIndex(person => person.name === personName);

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
      .then(() => {
        setMessage({message: `${newPerson.name} added!`, type: 'success'})
        setTimeout(() => {
          setMessage({message: '', type:''})
        }, 5000)
      })
      
  }

  const updatePerson = () => {
    if (window.confirm(`${newName} already exists in the phonebook, would you like to update their number to ${newPhone}?`)) {
      const currentPersonDetails = findPerson(newName)
      const currentPersonDetailsIndex = findPersonIndex(newName)

      const newPersonDetails = {
        ...currentPersonDetails,
        number: newPhone
      }

      // update server
      personService
        .updatePerson(newPersonDetails)
        .then(response => {
          // update local state
          const personsTemp = [...persons]
          const updatedPerson = response.data

          personsTemp[currentPersonDetailsIndex] = updatedPerson
          setPersons(personsTemp)

          // reset input fields 
          setNewName('');
          setNewPhone('');
        })
        .then(() => {
          setMessage({message: `${newPersonDetails.name} updated!`, type: 'success'})
          setTimeout(() => {
            setMessage({message: '', type:''})
          }, 5000)
        })
        .catch(error => {
          setMessage({message: `Information on ${newPersonDetails.name}  has been deleted from the server.`, type: 'error'})
          setTimeout(() => {
            setMessage({message: '', type:''})
          }, 5000)
        })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!checkIfExists()) {
      addPerson();
      setNewName('');
      setNewPhone('');
    } else {
      updatePerson()
    }
  };

  const deletePerson = (id, person) => {
    if (window.confirm(`Are you sure you want to delete ${person}?`)) {
      personService
        .deletePerson(id)
        .then(() => setPersons(persons.filter(person => person.id !== id ? person : null)))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Message message={message.message} type={message.type}/>
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
      <Persons filteredArray={filteredArray} deletePerson={deletePerson} />
    </div>
  )
}

export default App