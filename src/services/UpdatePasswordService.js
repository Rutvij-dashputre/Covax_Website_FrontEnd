import axios from 'axios';

const UPDATE_PASSWORD_API_POSTING_URL = 'http://localhost:8080/patient/reset/passd';

const headers = { 'Content-Type': 'application/json' };

class UpdateService {

    updatePassd(newpassd) {
        return axios.post(UPDATE_PASSWORD_API_POSTING_URL, newpassd, { headers: headers });
    }
}

export default new UpdateService();