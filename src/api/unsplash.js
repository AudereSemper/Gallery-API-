import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 190dadb72657f630596b3b6daea32055c05c3326948586d20bb2a9654ece5d36'
    }
});
