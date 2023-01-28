<template>
  <button 
  v-if="isBtnReady"
    @click="onMyLocationClicked"
    >
    <img src="@/assets/location.svg" alt="my location" />
  </button>
</template>

<script lang="ts">
import { useMapStore, usePlacesStore } from '@/composables';
import { computed, defineComponent } from 'vue';

export default defineComponent({
    name: 'MyLocationBtn',
    setup() {

        const { userLocation, isUserLocationReady } = usePlacesStore();
        const { map } = useMapStore();

        return {
            isBtnReady: computed<boolean>(() => {
                return isUserLocationReady.value && map.value;
            }),

            onMyLocationClicked: () => {
               map.value?.flyTo({
                    center: userLocation.value,
                    zoom: 14
               });  
            }
        }
    }
});
</script>

<style scoped>
button {
    position: fixed;
    bottom: 30px;
    right: 30px;
    border: none;
    outline: none;
    background-color: white;
    transition: 0.3s ease-in-out;
    border: 3px solid transparent;
    display: grid;
    place-content: center;
    padding: 10px;
    border-radius: 20px;
}

button img {
    width: 40px;
    height: 40px;

}

button:hover {
    border: 3px solid gray;
}
</style>