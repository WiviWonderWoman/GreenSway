import axios from 'axios';

const caller = axios.create({
    baseURL: 'https://retoolapi.dev/BOnmI8/greenswayusers'
});

export default caller;