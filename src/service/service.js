import { httpClient } from "./index";

//Funcion para consultar los productos7
export const listItems = (search) => {
    return new Promise(async (resolve,reject) => {
        httpClient.get(`items?q=${search}`)
        .then(response => response.json())
        .then(data => {
            resolve({ok:true,data})
        })
        .catch((error) => {
            reject({ok:false,error})
        });
    })
}

//Funcion para consultar un item por medio de su id
export const getItem = (id) => {
    return new Promise(async (resolve,reject) => {
        httpClient.get(`items/${id}`)
        .then(response => response.json())
        .then(data => {
            resolve({ok:true,data})
        })
        .catch((error) => {
            reject({ok:false,error})
        });
    })
}