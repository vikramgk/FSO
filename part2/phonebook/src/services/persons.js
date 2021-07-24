import axios from 'axios'
const baseUrl  = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const addPerson = person => {
    return axios.post(baseUrl, person)
}

const deletePerson = id => {
    return axios.delete(baseUrl + '/' + id)
}

export default {
    getAll,
    addPerson,
    deletePerson
};