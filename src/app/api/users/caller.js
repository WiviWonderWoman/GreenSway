import axios from 'axios';

const Caller = axios.create({
    baseURL: 'https://retoolapi.dev/BOnmI8/greenswayusers'
});

export default Caller;