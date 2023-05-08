import axios from 'axios';

// axios.config
const BASE_URL = 'http://localhost:8080';

axios.defaults.baseURL = BASE_URL;
axios.defaults.withCredentials = true;

const authApi = axios.create({
  baseURL: BASE_URL,
});

authApi.interceptors.request.use(
  request => {
    const ACCESS_TOKEN = localStorage.getItem('token');
    request.headers.Authorization = ACCESS_TOKEN || null;
    return request;
  },
  error => {
    return Promise.reject(error);
  },
);

// apis
const getTokenApi = () => {
  return axios
    .post('/token')
    .then(res => {
      console.log('토큰 받기 성공', res);
      localStorage.setItem('token', res.data.token);
      return res.data;
    })
    .catch(err => {
      console.log('토큰 받기 실패', err);
      return false;
    });
};

const makeRoomApi = payload => {
  console.log(payload, 'makeRoomPayload');
  return authApi
    .post('/game', payload)
    .then(res => {
      console.log('방 만들기 성공', res);
      return res.data;
    })
    .catch(err => {
      console.log('방 만들기 실패', err);
      return false;
    });
};

export { getTokenApi, makeRoomApi };
