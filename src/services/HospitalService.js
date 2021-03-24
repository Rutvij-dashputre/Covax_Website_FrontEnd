import axios from 'axios';

const HOSPITAL_API_POSTING_URL = 'http://localhost:8080/hospital/register';
const HOSPITAL_BYPIN_API_POSTING_URL= 'http://localhost:8080/hospital/nearBy'
const APPOINTMENT_BYPIN_API_POSTING_URL= 'http://localhost:8080/appointment-register'


const headers = { 'Content-Type': 'application/json' };
let list="";

class HospitalService {

    createHosp(patient) {
        return axios.post(HOSPITAL_API_POSTING_URL, patient, { headers: headers });
    }


    getHosp(hospital) {
        list= axios.post(HOSPITAL_BYPIN_API_POSTING_URL, hospital,{headers: headers});
        return list;
    }
    getApp(hospital) {
        return axios.post(APPOINTMENT_BYPIN_API_POSTING_URL, hospital,{headers: headers});
    }
  
}

export default new HospitalService();