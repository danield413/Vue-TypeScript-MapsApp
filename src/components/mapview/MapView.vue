<script lang="ts" src="./MapView.ts"/>


<template>
    <div class="loading-map d-flex justify-content-center align-items-center" v-if="!isUserLocationReady">
        <div class="text-center">
            <h3>Espera por favor</h3>
            <span>Localizando...</span>
        </div>
    </div>

    <div v-show="isUserLocationReady" class="map-container" ref="mapElement"/>
</template>

<style scoped>
.loading-map {
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 9999999999;
}

.map-container {
    position: fixed;
    height: 100vh;
    width: 100vw;
}
</style>

