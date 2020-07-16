import axios from 'axios';


export const getBook = (token) =>{
    return {
        type : "GET_BOOK",
        payload : axios({
            method: 'GET',
            headers : {
                Authorization : token
            },
            url : `${process.env.REACT_APP_URL_API}api/books?search=&page=1&limit=100&sort=0&by=title&order=created_at`
        })
    }
}

export const deleteBook = (data)=>{
    return {
        type : "DELETE_BOOK",
        payload :         
        axios({
            method : 'DELETE',
            url : `${process.env.REACT_APP_URL_API}api/books/`+data.id,
            headers : {
                Authorization : data.token
            }
        }),
        meta : data.index
    }
}

export const addBooks = (data,token)=>{
    return {
        type : "ADD_BOOK",
        payload : 
        axios({
            method : 'POST',
            url : `${process.env.REACT_APP_URL_API}api/books`,
            data : data,
            headers : {
              'Content-Type' : 'multipart/form-data',
              Authorization : token
            }
          })
    }

}

export const editBook = (data)=>{
    return {
        type : "EDIT_BOOK",
        payload :       
        axios({
              method : 'PUT',
              url : `${process.env.REACT_APP_URL_API}api/books/${data.id}`,
              data : data.formData,
              headers : {
                'Content-Type' : 'multipart/form-data',
                Authorization : data.token
              }
            })
    }
}