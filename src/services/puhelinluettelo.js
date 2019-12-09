import axios from 'axios';

const URL = process.env.NODE_ENV !== 'development' ? 'http://fullstackopen-osa3-backend.eu-north-1.elasticbeanstalk.com/' : 'http://localhost:3001/api/persons';

console.log(`Current system set to ${process.env.NODE_ENV}`);

async function fetchPersons() {
    const response = await axios.get(URL);
    return response.data;
}

const storePerson = async (person) => {
    return await axios.post(URL, person);
};

const deletePerson = async (id) => {
    return await axios.delete(`${URL}/${id}`);
};

const updatePerson = async (person) => {
    return await axios.put(`${URL}/${person.id}`, person);
};

export default {
    fetchPersons,
    storePerson,
    deletePerson,
    updatePerson,
};
