import axios from 'axios';

const CONFIRM_APP_API_BASE_URL = 'http://localhost:8080/appointment-confirmation';



class Confirm {

    confirmation(email) {
        console.log(email);
        return axios.post(CONFIRM_APP_API_BASE_URL + '/' + email);
    }
}

export default new Confirm();
