import axios from 'axios';
/**
 * AxiosInstance with baseURL for fractions API calls
 */
const Caller = axios.create({
    baseURL: 'https://retoolapi.dev/NId9jR/greenswayfractions'
});
export default Caller;