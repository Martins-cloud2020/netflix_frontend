import axios from 'axios';

export default axios.create({
    baseURL:'http://18.222.3.104:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
