import axios from 'axios';

const CONFIRM_APP_API_POSTING_URL = 'http://localhost:8080/appointment-confirmation';

const headers = { 'Content-Type': 'application/json' };

class HospSession {

    reset(hspId) {
        console.log(hspId);
        const HOSP_SESSION_API_POSTING_URL = 'http://localhost:8080/hospital/' + hspId.hspId;
        return axios.get(HOSP_SESSION_API_POSTING_URL, hspId, { headers: headers });
    }

}

export default new HospSession();