<template>

    <div v-if="isLoadingPlaces"
        class="loader">
        <div class="sk-chase">
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
        </div>
    </div>

    <ul v-else-if="places.length > 0" class="list-group">
        <li v-for="place in places" :key="place.id"
            class="mycard"
            :class="{ 'active': place.id === activePlace }"
            @click="onPlaceClicked(place)">
            <h5 :class="{ 'txt-dark': place.id === activePlace }">{{ place.text }}</h5>
            <p :class="{ 'txt-dark': place.id === activePlace }">{{ place.place_name }}</p>
            <div class="button-container">
                <button
                    :class="place.id === activePlace ? 'btn-light' : 'btn-dark'"
                    @click.self="getRouteDirections(place)">
                    Ir al destino
                    <img src="@/assets/arrow.svg" alt="">
                    <!-- <i class="pi pi-chevron-right"></i> -->
                </button>
            </div>
        </li>

    </ul>
</template>

<script lang="ts" src="./SearchResults.ts"/>

<style scoped>

.loader {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.mycard {
    width: 100%;
    margin-bottom: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid #505050;
    padding: 10px;
}

.active {
    border: 2px solid #00FF83;
}

.txt-dark {
    color: #00FF83 !important;
}

.mycard h5 {
    color: white;
    font-weight: bold;
    text-align: left;
}

.mycard p {
    color: white;
    text-align: left;
}

.mycard .button-container {
    display: flex;
    justify-content: flex-end;
}

button {
    outline: none;
    background-color: transparent;
    border: none;
    color: black;
    background-color: #00FF83;
    font-weight: bold;
    padding: 6px 10px;
    font-size: 13px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    transition: .3s ease-in-out;
}

button img {
    width: 15px;
    margin-left: 5px;
}

button:hover {
    background-color: white;
}

li {
    cursor: pointer;
}

h5 {
    font-size: 15px !important;
}

p {
    font-size: 10px !important;
}

.sk-chase {
  width: 40px;
  height: 40px;
  position: relative;
  animation: sk-chase 2.5s infinite linear both;
}

.sk-chase-dot {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0; 
  animation: sk-chase-dot 2.0s infinite ease-in-out both; 
}

.sk-chase-dot:before {
  content: '';
  display: block;
  width: 25%;
  height: 25%;
  background-color: #00FF83;
  border-radius: 100%;
  animation: sk-chase-dot-before 2.0s infinite ease-in-out both; 
}

.sk-chase-dot:nth-child(1) { animation-delay: -1.1s; }
.sk-chase-dot:nth-child(2) { animation-delay: -1.0s; }
.sk-chase-dot:nth-child(3) { animation-delay: -0.9s; }
.sk-chase-dot:nth-child(4) { animation-delay: -0.8s; }
.sk-chase-dot:nth-child(5) { animation-delay: -0.7s; }
.sk-chase-dot:nth-child(6) { animation-delay: -0.6s; }
.sk-chase-dot:nth-child(1):before { animation-delay: -1.1s; }
.sk-chase-dot:nth-child(2):before { animation-delay: -1.0s; }
.sk-chase-dot:nth-child(3):before { animation-delay: -0.9s; }
.sk-chase-dot:nth-child(4):before { animation-delay: -0.8s; }
.sk-chase-dot:nth-child(5):before { animation-delay: -0.7s; }
.sk-chase-dot:nth-child(6):before { animation-delay: -0.6s; }

@keyframes sk-chase {
  100% { transform: rotate(360deg); } 
}

@keyframes sk-chase-dot {
  80%, 100% { transform: rotate(360deg); } 
}

@keyframes sk-chase-dot-before {
  50% {
    transform: scale(0.4); 
  } 100%, 0% {
    transform: scale(1.0); 
  } 
}
</style>