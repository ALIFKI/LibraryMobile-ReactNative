import axios from 'axios';
import {API_URL} from '@env'

export const getTransaction = (data)=>{
    return {
        type : "GET",
        payload : axios({
            method : 'GET',
            url : `${API_URL}api/transactions/user?search=&limit=10&page=1&sort=0&by=name&order=name`,
            headers : {
              Authorization : data.token
            },
            data : {
                id : data.id
            }
        })
    }
}
export const returnBook = (data) =>{
    return {
        type : "POST",
        payload : axios({
            method : 'POST',
            url : `${API_URL}api/books/return/${data.id}`,
            headers : {
                Authorization : data.token
              },
        })
    }
}