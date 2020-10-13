import { httpClient } from "./index";
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