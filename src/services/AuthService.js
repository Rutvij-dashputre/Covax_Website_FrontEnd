import axios from 'axios';

const AUTH_API_POSTING_URL = 'http://localhost:8080/patient/authPtlogin';
const AUTH1_API_POSTING_URL = 'http://localhost:8080/admin/login';
const headers = { 'Content-Type': 'application/json' };

class AuthService {

    checkAuth(Auth) {
        return axios.post(AUTH_API_POSTING_URL, Auth, { headers: headers });
    }


    checkAuth1(Auth1) {
        console.log('auth is' + Auth1.username);
        return axios.post(AUTH1_API_POSTING_URL, Auth1, { headers: headers });
    }
}

export default new AuthService();