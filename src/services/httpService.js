import axios from "axios";
import {toast} from 'react-toastify';

axios.interceptors.response.use(null, error => {
    const expectedError = error.response && error.response.starus>=400 && error.response.starus<500;

    if(!expectedError){

        console.log('Logging  the error',error);
        toast.error('An unecpected error occcured');
    }
    
     return Promise.reject(error);

});

export default {
    get : axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
};
