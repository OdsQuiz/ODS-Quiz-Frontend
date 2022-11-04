import axios from "axios";

export const api = axios.create({
    baseURL: 'https://hack2030-backend.herokuapp.com/'
})

export const getUsers = async () => {
    let url = '/users'

    return await api.get(url)
}

export const createUsers = async (name, email, password, address, lat, lon) => {
    let url = '/users'

    return await api.post(url, {name, email, password, address, lat, lon})
}

export const getIniciatives = async () => {
    let url = '/iniciatives'

    return await api.get(url)
}

export const createIniciative = async (name, owner, address, emailOwner, actingArea, impact, type, points, mainOds, lat, lon) => {
    let url = '/iniciatives'

    return await api.post(url, {name, owner, address, emailOwner, actingArea, impact, type, points, mainOds, lat, lon})
}

export const createSession = async (email, password) => {
    return await api.post('/session', {email, password})
}