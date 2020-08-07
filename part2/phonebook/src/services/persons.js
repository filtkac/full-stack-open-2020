import Axios from 'axios'

const url = 'http://localhost:3001/persons';

const getAll = () =>  Axios.get(url).then(response => response.data)
const create = newPerson =>  Axios.post(url, newPerson).then(response => response.data)
const deletePerson = id => Axios.delete(`${url}/${id}`).then(response => response.data)
const update = updatedPerson => Axios.put(`${url}/${updatedPerson.id}`, updatedPerson).then(response => response.data)

export default {
  getAll,
  create,
  deletePerson,
  update
}