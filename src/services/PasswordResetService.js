import axios from 'axios';

const PASSWORD_RESET_API_POSTING_URL = 'http://localhost:8080/patient/resetRequest';

const headers = { 'Content-Type': 'application/json' };

class ResetService {

    reset(mail) {
        return axios.post(PASSWORD_RESET_API_POSTING_URL, mail, { headers: headers });
    }
}

export default new ResetService();