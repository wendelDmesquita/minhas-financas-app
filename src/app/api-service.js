import axios from 'axios'

const httpClient = axios.create({
    baseURL: 'http://localhost:8080'
})

class ApiService{
    constructor(apiUrl){
        this.apiUrl = apiUrl
    }

    post(url, objeto){
        const requestUrl = `${this.apiUrl}${url}`
        return httpClient.post(requestUrl, objeto)
    }

    put(url, objeto){
        const requestUrl = `${this.apiUrl}${url}`
        return httpClient.put(requestUrl, objeto)
    }

    get(url){
        const requestUrl = `${this.apiUrl}${url}`
        return httpClient.get(requestUrl)
    }

    delete(url){
        const requestUrl = `${this.apiUrl}${url}`
        return httpClient(requestUrl)
    }
}

export default ApiService