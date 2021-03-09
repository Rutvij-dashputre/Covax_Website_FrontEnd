import axios from 'axios';

const PATIENT_API_BASE_URL = 'http://localhost:8080/patient/show';
//const PATIENT_API_POSTING_URL= 'http://localhost:8080/patient/';

class PatientService {

    getPatients() {
        return axios.get(PATIENT_API_BASE_URL);
    }

    createPatient(patient) {
        return axios.post(PATIENT_API_BASE_URL, patient);
    }
}

export default new PatientService();