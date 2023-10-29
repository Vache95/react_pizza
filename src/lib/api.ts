import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://63767cd7b5f0e1eb850d1867.mockapi.io/',
	headers: {},
});

// instance.interceptors.request.use();
// instance.interceptors.response.use();

export default instance;
