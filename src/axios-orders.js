import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-ff580-default-rtdb.europe-west1.firebasedatabase.app/',
})

export default instance;