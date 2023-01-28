import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './css/global.css'
import 'primeicons/primeicons.css';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuZDEzIiwiYSI6ImNsZDNsZmtjNjBqa3Izd2pyejg5YzRhY28ifQ.gx9adiQddOHKTeT7695P_A';

if(!navigator.geolocation) {
    throw new Error('Tu navegador no soporta geolocalización')
}

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
