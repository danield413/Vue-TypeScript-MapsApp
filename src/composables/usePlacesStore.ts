import { computed, onMounted } from "vue";
import { useStore } from "vuex"
import { StateInterface } from '@/store/index';

export const usePlacesStore = () => {

    const store = useStore<StateInterface>();

    
    onMounted(() => {
        if( !store.getters['places/isUserLocationReady'] ) {
            store.dispatch('places/getInitialLocation');
        }
    });


    return {       
        //STATE 
        isLoading: computed(() => store.state.places.isLoading),
        userLocation: computed(() => store.state.places.userLocation),
        places: computed(() => store.state.places.places),
        isLoadingPlaces: computed(() => store.state.places.isLoadingPlaces),

        //GETTERS
        isUserLocationReady: computed(() => store.getters['places/isUserLocationReady']),

        //MUTATIONS
        searchPlacesByTerm: (query: string) => store.dispatch('places/searchPlacesByTerm', query),
        

        //ACTIONS
    }
}