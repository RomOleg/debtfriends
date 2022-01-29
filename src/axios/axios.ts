import axios from "axios";

const Axios = axios.create({
    baseURL: '',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'},
    withCredentials: true,
    maxContentLength: 2000,
  });

  export default Axios;