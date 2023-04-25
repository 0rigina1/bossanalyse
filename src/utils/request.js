import axios from "axios"
import store from "@/store"


const service = axios.create({
    baseURL: '/api',
    timeout: 5000
})

const auth = ['/data/jobs']

service.interceptors.request.use(
    config => {
        if (store.state.auth) {
            if(config.url in auth) {
                config.headers['auth'] = store.state.auth
            }
        }

        return config
    },
    error => {
        this.$message.error({
            content: '请求失败，' + error.request.errorMessage
        })
    }
)

service.interceptors.response.use(
    response => {

        return response.data
    },

    error => {
        return Promise.reject(error)
    }
)

export default service