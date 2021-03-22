import axios from "axios";

const instance = axios.create({
    baseURL_local: 'http://localhost:5001/clone-4f7db/us-central1/api', // THE API (cloud function) URL
    baseURL: 'https://us-central1-clone-4f7db.cloudfunctions.net/api'
});

export default instance;