import axios from 'axios'
import {API_URL} from '@env'

export const getAuthor =(data)=>{
    return {
        type : "GET_AUTHOR",
        payload :       
        axios({
            method : 'GET',
            url : `${API_URL}api/authors?search=&page=1&limit=10&sort=0&by=author`,
            headers : {
              Authorization : data.token
          },
        })
    }
}

export const deleteAuthor =(data)=>{
    return {
        type : "DELETE",
        payload :       
        axios({
            method : 'DELETE',
            url : `${API_URL}api/authors/${data.id}`,
            headers : {
              Authorization : data.token
          },
        }),
        meta : data.id
    }
}

export const addAuthor = (data) =>{
    return {
        type : "ADD",
        payload : axios({
            method : "POST",
            url : `${API_URL}api/authors`,
            headers : {
                Authorization : data.token
            },
            data : {
                author : data.author
            }
        }) 
    }
}

export const editAuthor = (data) =>{
    return {
        type : "EDIT",
        payload : axios({
            method : "PUT",
            url : `${API_URL}api/authors/${data.id_author}`,
            headers : {
                Authorization : data.token
            },
            data : {
                author : data.author
            }
        }),
        meta : data 
    }
}