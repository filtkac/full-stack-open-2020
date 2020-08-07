import React from 'react'

const PersonList = ({ persons, searchedString, handleDelete }) =>
  <div>
    {persons.filter(person => searchedString === ''
      || person.name.toLowerCase().includes(searchedString.toLowerCase()))
      .map(person => <div key={person.id}>
        {person.name} {person.number} <button onClick={() => handleDelete(person.id, person.name)}>delete</button>
      </div>)}
  </div>

export default PersonList