import axios from 'axios';

const GETPINPIN_API_POSTING_URL = 'http://localhost:8080/hospital/nearBy';

const headers = { 'Content-Type': 'application/json' };

class SendPin {

    
    send(pin) {
       
       
   
        return axios.post(GETPINPIN_API_POSTING_URL, pin , { headers: headers });
    }
   
    
}

export default new SendPin();