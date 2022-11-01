import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export const getUsers = async () => {
    let url = '/users'

    return await api.get(url)
}

export const createUsers = async (name, email, password, address) => {
    let url = '/users'

    return await api.post(url, {name, email, password, address})
}

export const createSession = async (email, password) => {
    return await api.post('/session', {email, password})
}