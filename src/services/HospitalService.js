import axios from 'axios';

const HOSPITAL_API_POSTING_URL = 'http://localhost:8080/hospital/register';

const headers = { 'Content-Type': 'application/json' };

class HospitalService {

    createHosp(patient) {
        return axios.post(HOSPITAL_API_POSTING_URL, patient, { headers: headers });
    }
}

export default new HospitalService();