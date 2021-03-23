import axios from 'axios';

const HOSPITAL_API_LOGINAUTH_URL = 'http://localhost:8080/hospital/AuthentHsplogin';

const headers = { 'Content-Type': 'application/json' };

class HospitalLoginService {

    hospAuth(Auth1) {
        return axios.post(HOSPITAL_API_LOGINAUTH_URL, Auth1, { headers: headers });
    }
}

export default new HospitalLoginService();