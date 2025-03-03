import axios from "axios";
//import sleepInterceptor from "../util/sleep";

const agent = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})

//agent.interceptors.response.use(sleepInterceptor);

export default agent