import { MutationTree } from 'vuex';
import { MapState } from './state';
import Mapboxgl from 'mapbox-gl';
import { Feature } from '../../interfaces/places';


const mutation: MutationTree<MapState> = {
    setMap(  state: MapState, map: Mapboxgl.Map ) {
        state.map = map;
    },

    setDistanceDuration( state, { distance, duration }: { distance: number, duration: number } ) {
        let kms = distance / 1000;
        kms = Math.round(kms * 100);
        kms /= 100;

        state.distance = kms;
        state.duration = Math.floor( duration / 60 );
    },

    setPlaceMarkers( state, places: Feature[] ) {

        state.markers.forEach( marker => marker.remove() );
        state.markers = [];

        if (!state.map) return;

        for (const place of places) {
            const [ lng, lat ] = place.center;

            const myLocationPopup = new Mapboxgl.Popup({ offset: [ 0,-55 ]})
            .setLngLat([lng, lat]).setHTML(`
            <h4>${place.text}</h4>
            <p>${place.place_name}</p>
            `)

            const marker = new Mapboxgl.Marker({
                color: '#00FF83',
                draggable: false
                
            }).setLngLat([lng,lat]).addTo(state.map)
            .setPopup(myLocationPopup)

            state.markers.push(marker);
        }

        //clear polyline
        if( state.map?.getLayer('RouteString') ) {
            state.map?.removeLayer('RouteString');
            state.map?.removeSource('RouteString');
            state.distance = undefined;
            state.duration = undefined;
        }

    },

    setRoutePolyline( state, coords: number[][] ) {
        const start = coords[0];
        const end = coords[coords.length - 1];

        // definir los bounds (puntos mapa)
        const bounds = new Mapboxgl.LngLatBounds(
            [start[0], start[1]],
            [end[0], end[1]]
        );


        //agregamos cada punto al bouds
        for( const coord of coords ) {
            const newCoord: [number, number] = [ coord[0], coord[1] ];
            bounds.extend(newCoord);
        }

        state.map?.fitBounds(bounds, {
            padding: 200,
        });

        //Polyline
        const sourceData: Mapboxgl.AnySourceData = {
            type: 'geojson',
            data: {
                type: 'Feature',
                properties: {},
                geometry: {
                    type: 'LineString',
                    coordinates: coords
                }
            }
        };

        if( state.map?.getLayer('RouteString') ) {
            state.map?.removeLayer('RouteString');
            state.map?.removeSource('RouteString');
        }

        state.map?.addSource('RouteString', sourceData);

        state.map?.addLayer({
            id: 'RouteString',
            type: 'line',
            source: 'RouteString',
            layout: {
                'line-join': 'round',
                'line-cap': 'round'
            },
            paint: {
                'line-color': '#00FF83',
                'line-width': 3
            }
        });
    },

    setTo( state, to: string ) {
        state.to = to;
    }
   
}


export default mutation;