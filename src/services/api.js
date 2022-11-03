import axios from "axios";

export const api = axios.create({
    baseURL: 'https://hack2030-backend.herokuapp.com/'
})

export const getUsers = async () => {
    let url = '/users'

    return await api.get(url)
}

export const createUsers = async (name, email, password, address) => {
    let url = '/users'

    return await api.post(url, {name, email, password, address})
}

export const getIniciatives = async () => {
    let url = '/iniciatives'

    return await api.get(url)
}

export const createIniciative = async (name, owner, address, emailOwner, actingArea, impact, type, points, mainOds) => {
    let url = '/iniciatives'

    return await api.post(url, {name, owner, address, emailOwner, actingArea, impact, type, points, mainOds})
}

export const createSession = async (email, password) => {
    return await api.post('/session', {email, password})
}