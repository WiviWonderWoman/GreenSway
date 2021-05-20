import axios from 'axios';

const Caller = axios.create({
    baseURL: 'https://retoolapi.dev/NId9jR/greenswayfractions'
});
export default Caller;