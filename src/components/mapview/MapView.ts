import { defineComponent, ref, onMounted, watch } from 'vue';
import Mapboxgl from 'mapbox-gl';

import { usePlacesStore } from '../../composables/usePlacesStore';
import { useMapStore } from '../../composables/useMapStore';

export default defineComponent({
    name: 'MapView',
    setup() {

        const mapElement = ref<HTMLDivElement>()
        const { userLocation, isUserLocationReady } = usePlacesStore();
        const { setMap } = useMapStore();

        const initMap = async () => {
            if (!mapElement.value || !userLocation.value) {
                throw new Error('No se puede inicializar el mapa');
            }

            await Promise.resolve();

            const map = new Mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/dark-v8', // style URL
                // style: 'mapbox://styles/mapbox/satellite-v9', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15, // starting zoom
            });

            const myLocationPopup = new Mapboxgl.Popup({ offset: [ 0,-55 ]}).setLngLat(userLocation.value).setHTML('<h1>Estás aquí</h1>')

            const myLocationMarker = new Mapboxgl.Marker({
                color: '#00FF83',
                draggable: false
                
            }).setLngLat(userLocation.value).addTo(map).setPopup(myLocationPopup)
            
            //todo establecer map vuex
            setMap(map);
        }

        onMounted(() => {
            if( isUserLocationReady.value ) return initMap();
        })

        watch(isUserLocationReady, (isReady) => {
            if(isReady) initMap();
        })

        return {
            isUserLocationReady,
            mapElement
        }
    }
});