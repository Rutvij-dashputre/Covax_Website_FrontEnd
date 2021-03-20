import axios from 'axios';

const AUTH_API_POSTING_URL = 'http://localhost:8080/patient/authPtlogin';

const headers = { 'Content-Type': 'application/json' };

class AuthService {

    checkAuth(patient) {
        return axios.post(AUTH_API_POSTING_URL, patient, { headers: headers });
    }
}

export default new AuthService();