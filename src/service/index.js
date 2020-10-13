//Direccion de la api del backend
export const ENDPOINT = process.env.api_mercadolibre_backend || 'https://www.testmercadolibre.tk/api' 

//Encabezados de la peticiones
const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

//Metodos generales para utilizar
export const httpClient = {
  get: path => fetch(`${ENDPOINT}/${path}`, { headers }),
  post: (path, data) => fetch(`${ENDPOINT}/${path}`, { method: 'POST', headers, body: data }),
  put: (path, data) => fetch(`${ENDPOINT}/${path}`, { method: 'PUT', headers, body: data }),
  delete: (path, data) => fetch(`${ENDPOINT}/${path}`, { method: 'DELETE', headers }),
}
