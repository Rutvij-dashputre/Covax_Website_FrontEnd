import axios from 'axios';

const PATIENT_API_BASE_URL = 'http://localhost:8080/patient/show';
const PATIENT_API_POSTING_URL= 'http://localhost:8080/patient/register';

const headers = {'Content-Type' : 'application/json'};

class PatientService {

    getPatients() {
        return axios.get(PATIENT_API_BASE_URL);
    }

    createPatient(patient) {
        return axios.post(PATIENT_API_POSTING_URL, patient,{headers: headers});
    }

}

export default new PatientService();
