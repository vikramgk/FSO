import axios from 'axios'
const baseUrl  = 'http://localhost:3001/api/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const addPerson = person => {
    return axios.post(baseUrl, person)
}

const deletePerson = id => {
    return axios.delete(baseUrl + '/' + id)
}

const updatePerson = person => {
    return axios.put(baseUrl + '/' + person.id, person)
}

const personService = {
    getAll,
    addPerson,
    deletePerson,
    updatePerson
};

export default personService;