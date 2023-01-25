import axios from 'axios'

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5, 
        language: 'es',
        access_token: 'pk.eyJ1IjoiZGFuZDEzIiwiYSI6ImNsZDNsZmtjNjBqa3Izd2pyejg5YzRhY28ifQ.gx9adiQddOHKTeT7695P_A'
    }
})


export default searchApi