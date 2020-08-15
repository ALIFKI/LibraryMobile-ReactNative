import axios from 'axios'
import {API_URL} from '@env'


export const getGenre =(data)=>{
    return {
        type : "GET_GENRE",
        payload :       
        axios({
            method : 'GET',
            url : `${API_URL}api/genres?search=&page=1&limit=10&sort=0&by=genre`,
            headers : {
              Authorization : data.token
          },
        })
    }
}

export const deleteGenre =(data)=>{
    return {
        type : "DELETE",
        payload :       
        axios({
            method : 'DELETE',
            url : `${API_URL}api/genres/${data.id}`,
            headers : {
              Authorization : data.token
          },
        }),
        meta : data.id
    }
}

export const addGenre = (data) =>{
    return {
        type : "ADD",
        payload : axios({
            method : "POST",
            url : `${API_URL}api/genres`,
            headers : {
                Authorization : data.token
            },
            data : {
                genre : data.genre
            }
        }) 
    }
}

export const editGenre = (data) =>{
    return {
        type : "EDIT",
        payload : axios({
            method : "PUT",
            url : `${API_URL}api/genres/${data.id_genre}`,
            headers : {
                Authorization : data.token
            },
            data : {
                genre : data.genre
            }
        }),
        meta : data 
    }
}