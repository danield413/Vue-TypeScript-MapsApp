import { defineComponent, ref, watch } from 'vue';
import { usePlacesStore } from '@/composables';
import { Feature } from '../../interfaces/places';
import { useMapStore } from '../../composables/useMapStore';

export default defineComponent({
    name: 'SearchResults',
    setup() {
        
        const { isLoadingPlaces, places, userLocation } = usePlacesStore();
        const { map, setPlaceMarkers, getRouteBetweenPoints, setTo } = useMapStore();

        const activePlace = ref('');

        watch( places, (newPlaces) => {
            setPlaceMarkers(newPlaces);
        })

        return {
            isLoadingPlaces,
            places,
            activePlace,

            onPlaceClicked: async (place: Feature) => {

                const [ lng, lat ] = place.center;
                activePlace.value = place.id;

                map.value?.flyTo({
                    zoom: 14,
                    center: [ lng, lat ]
                });
            },

            getRouteDirections : async (place: Feature) => {
                const [ lng, lat ] = place.center;

                if( !userLocation.value ) return;

                const [startLng, startLat] = userLocation.value;

                const start: [number, number] = [ startLng, startLat ];
                const end: [number, number] = [ lng, lat ];

                setTo( place.place_name );
                
                await getRouteBetweenPoints( start, end );
            }
        }
    }
});