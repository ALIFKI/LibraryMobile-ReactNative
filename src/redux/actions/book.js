import axios from 'axios';
import {API_URL} from '@env'

export const getBookbyId = (data)=>{
    return {
        type : "GET_BOOK_ID",
        payload : 
        axios({
            method : 'GET',
            url : `${API_URL}api/books/${data.id}`,
            headers : {
                Authorization : data.token
            }
        })
    }
}

export const borrow = (data)=>{
    return {
        type : "BORROW",
        payload :
        axios({
            method : 'POST',
            headers : {
                Authorization : data.token
            },
            url : `${API_URL}api/books/borrow/${data.id}`,
            data : {
                periode_of_time : 2
            }
        })
    }
}

export const search = (data)=>{
    return {
        type : "SEARCH",
        payload : 
        axios({
            method : 'GET',
            headers : {
                Authorization : data.token
            },
            url : `${API_URL}api/books?search=${data.search}&page=${data.page}&limit=4&sort=${data.sort}&by=${data.by}&order=${data.by}`,
        })
    }
}
