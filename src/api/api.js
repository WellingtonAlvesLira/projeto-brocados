const axios = require('axios');

const axiosInstance = axios.create({
   baseURL: ' http://localhost:3000/ingredientes'
})

export default {
    name: 'api',
    methods: {
        get(url){
          return axiosInstance.get(url);

        },
        post(url, data){
            return axiosInstance.post(url, data);
        },
        put(url, data){
            return axiosInstance.put(url, data);
        },
        delete(url, data){
            return axiosInstance.put(url, data);
        }
        
    }
}