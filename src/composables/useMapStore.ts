import { computed } from 'vue';
import { useStore } from 'vuex';
import Mapboxgl from 'mapbox-gl';

import { StateInterface } from '../store/index';
import { Feature } from '../interfaces/places';
import { LngLat } from '../store/map/actions';


export const useMapStore = () => {

    const store = useStore<StateInterface>();


    return {
        map: computed(() => store.state.map.map),
        distance: computed(() => store.state.map.distance),
        duration: computed(() => store.state.map.duration),
        to: computed(() => store.state.map.to),

        //GETTERS:
        isMapReady: computed(() => store.getters['map/isMapReady']),

        //MUTATIONS
        setMap: (map: Mapboxgl.Map) => store.commit('map/setMap', map),
        setPlaceMarkers: (places: Feature[]) => store.commit('map/setPlaceMarkers', places),
        setTo: ( to: string )  => store.commit('map/setTo', to),
            

        //ACTIONS
        getRouteBetweenPoints: (start: LngLat, end: LngLat) => store.dispatch('map/getRouteBetweenPoints', { start, end }),

    }
}