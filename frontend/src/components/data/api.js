import axios from 'axios'

const URL = 'http://localhost:4000/api'

export const getGoals = async () => {
    const res = await axios.get(`${URL}/goals`)
    return res
}

export const createGoal = async (goal) => {
    const res = await axios.post(`${URL}/goals`, goal)
    return res
}

export const getGoal = async (id) => {
    const res = await axios.get(`${URL}/goals/${id}`) 
    return res
}

export const updateGoal = async (id, goal) => {
    const res = await axios.put(`${URL}/goals/${id}`, goal) 
    return res
}

export const deleteGoal = async (id) => {
    const res = await axios.delete(`${URL}/goals/${id}`)  
    return res
}

export const registerUser = async (userData) => {
    const res = await axios.post(`${URL}/users`, userData)  
    return res
}

export const loginUser = async (userData) => {
    const res = await axios.post(`${URL}/users/login`, userData)  
    return res
}
