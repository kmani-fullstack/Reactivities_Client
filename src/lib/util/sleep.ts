import { AxiosResponse } from "axios";

const sleep = (delay: number) => {
    return new Promise(resolve => setTimeout(resolve, delay))
}

const sleepInterceptor = async (response: AxiosResponse) => {
    try {
        await sleep(1000)
        return response
    } catch (error) {
        console.log(error);
        return Promise.reject(error)
    }
}

export default sleepInterceptor