import React from 'react'

const Form = ({ handleSubmit, newName, handleNameInputChange, newNumber, handleNumberInputChange}) =>
  <form onSubmit={handleSubmit}>
    <div>
      name: <input value={newName} onChange={handleNameInputChange} />
    </div>
    <div>
      number: <input value={newNumber} onChange={handleNumberInputChange} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>

export default Form;