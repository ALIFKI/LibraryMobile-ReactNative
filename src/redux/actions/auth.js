import axios from 'axios'
import { API_URL } from '@env'
export const login = data => {
    return {
        type : 'LOGIN',
        payload :
        axios({
            method: 'POST',
            url : `http://192.168.43.124:3000/api/users/login`,
            data : {
                email : data.username,
                password : data.password
            }
        }),
    }
}

export const logout = () => {
    return {
        type : "LOGOUT"
    }
}

export const register = data =>{
    return {
        type : 'REGISTER',
        payload : 
        axios({
            method: 'POST',
            url : `http://192.168.43.124:3000/api/users/registers`,
            data : {
                name : data.name,
                email : data.email,
                password : data.password,
                role : 2
            }
        })
    }
}