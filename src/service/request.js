import axios from 'axios';
import { BASE_URL, TIMEOUT} from './config';

const api = axios.create({
  baseURL:BASE_URL,
  timeout:TIMEOUT
})

/**
 * http request 拦截器
 */
 api.interceptors.request.use(
  (config) => {
    config.data = JSON.stringify(config.data);
    config.headers = {
      "Content-Type": "application/json",
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * http response 拦截器
 */
api.interceptors.response.use(
  (response) => {
    // if (response.data.errCode === 2) {
    //   console.log("过期");
    // }
    // return response;
    return Promise.resolve(response);
  },
  (error) => {
    console.log("请求出错：", error);
    return Promise.reject(error);
  }
);

export default api;
