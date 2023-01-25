import axios from 'axios'

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false, 
        geometries: 'geojson',
        steps: false,
        overview: 'simplified',
        access_token: 'pk.eyJ1IjoiZGFuZDEzIiwiYSI6ImNsZDNsZmtjNjBqa3Izd2pyejg5YzRhY28ifQ.gx9adiQddOHKTeT7695P_A'
    }
})


export default directionsApi