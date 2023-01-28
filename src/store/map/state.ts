import Mapboxgl from 'mapbox-gl';
export interface MapState {
    map?: Mapboxgl.Map;
    markers: Mapboxgl.Marker[];
    distance?: number;
    duration?: number;
    to: string;
}

function state(): MapState {
    return {
        map: undefined,
        markers: [],
        distance: undefined,
        duration: undefined,
        to: ''
    }
}

export default state;