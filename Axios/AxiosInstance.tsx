import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "", //192.168.1.100  10.10.52.51 
  timeout: 10000
  // ,
  // headers: {
  //   "Content-Type": "multipart/form-data",
  // },
});

export default AxiosInstance;