import axios from "axios";
let request = axios.create({
  baseUrl: "https://semghh.xyz:10086/content1-2.0/",
  timeout: 3000,
});
// //请求拦截器
request.interceptors.request.use((config) => {
  return config;
});
// 响应拦截器
request.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    //响应失败
    return Promise.reject(new Error("faile"));
  }
);
export default request;
