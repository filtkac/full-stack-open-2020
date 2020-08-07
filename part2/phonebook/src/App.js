import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import PersonList from './components/PersonList'
import personService from './services/persons'
import Message from './components/Message'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchedString, setSearchedString] = useState('')
  const [message, setMessage] = useState()

  const handleNameInputChange = (event) => setNewName(event.target.value);
  const handleNumberInputChange = (event) => setNewNumber(event.target.value);
  const handleSearchInputChange = (event) => setSearchedString(event.target.value);

  const messageTimeout = () => setTimeout(() => { setMessage() }, 5000)

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPerson = { name: newName, number: newNumber };
    if (persons.map(person => person.name).includes(newName)) {
      if (window.confirm(`${newName} is already in the phonebook, replace the old number with a new one?`)) {
        const person = persons.find(p => p.name === newName);
        const updatedPerson = { ...person, number: newNumber }
        personService.update(updatedPerson)
          .then(updatedPerson => setPersons(persons.map(p => p.name === newName ? updatedPerson : p)));
        setMessage({
          message: `${updatedPerson.name}'s number successfully updated.`,
          status: 'success'
        })
        setNewName('');
        setNewNumber('');
        setSearchedString('');
        messageTimeout();
      }
      return;
    }
    setNewName('');
    setNewNumber('');
    setSearchedString('');

    personService.create(newPerson).then(newPerson => setPersons(persons.concat(newPerson)))
    setMessage({
      message: `${newPerson.name} added.`,
      status: 'success'
    });
    messageTimeout();
  }

  const handleDelete = (id, name) => {
    window.confirm(`Delete ${name}?`)
      && personService.deletePerson(id).then(person => setPersons(persons.filter(p => p.id !== id)))
        .catch(error => {
          setPersons(persons.filter(n => n.id !== id));
          setMessage({
            message: `Information of ${name} has already been removed from the server.`,
            status: 'error'
          })
        })
  }

  useEffect(() => {
    personService.getAll().then(persons => setPersons(persons))
  }, [])

  return (
    <div>
      <h1>Phonebook</h1>
      <Message message={message} />
      <Filter value={searchedString} onChange={handleSearchInputChange} />
      <h2>Add new</h2>
      <Form
        handleSubmit={handleSubmit}
        newName={newName}
        handleNameInputChange={handleNameInputChange}
        newNumber={newNumber}
        handleNumberInputChange={handleNumberInputChange}
      />
      <h2>Numbers</h2>
      <PersonList persons={persons} searchedString={searchedString} handleDelete={handleDelete} />
    </div>
  )
}

export default App