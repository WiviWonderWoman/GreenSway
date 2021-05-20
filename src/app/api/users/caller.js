import axios from 'axios';
/**
 * AxiosInstance with baseURL for users API calls
 */
const Caller = axios.create({
    baseURL: 'https://retoolapi.dev/BOnmI8/greenswayusers'
});
export default Caller;