import axios from 'axios';

const DELETE_ID_API_BASE_URL = 'http://localhost:8080/patient';



class Delete {

    deletePatient(patientId) {
        
        return axios.delete(DELETE_ID_API_BASE_URL + '/' + patientId)
    }
}

export default new Delete();
