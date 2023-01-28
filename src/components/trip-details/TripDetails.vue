<template>
    <div v-if="distance" class="trip-container">
        <div class="trip-item">
            <div class="icon">
                <img src="@/assets/road.svg"
                    alt="distancia">
            </div>
            <div class="info">
                <p>{{ distance }} <span>Kms</span></p>
            </div>
        </div>
        <div class="trip-item">
            <div class="icon">
                <img src="@/assets/clock.svg"
                    alt="duration">
            </div>
            <div class="info">
                <p>{{ duration }} <span>Minutos</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { useMapStore } from '@/composables';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TripDetail',
    setup() {

        const { distance, duration, to } = useMapStore();

        return {
            distance,
            duration,
            to
        }
    }
});
</script>

<style scoped>
p {
    font-weight: bold;
    margin: 0;
}

span {
    font-size: 12px;
    color: #00FF83;
}

.info {
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
}

.trip-container {
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    top: 30px;
    right: 30px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
    font-size: 20px;
    color: white;
    position: fixed;
    width: 240px;
    display: grid;
}

.trip-item {
    width: 100%;
    display: grid;
    grid-template-columns: 50px 1fr;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.2);
    border: 1px solid white;
}

.trip-item:first-child {
    margin-bottom: 10px;
}

.icon {
    background-color: #fff;
    display: grid;
    place-content: center;
    height: 100%;
}

.to {
    grid-column: 1 / 3;
    text-align: center;
    font-weight: bold;
    height: 55px;
    background-color: #fff;
    color: black;
    font-size: 12px;
    text-align: left;
    display: grid;
    grid-template-columns: 50px 1fr;
}

.icon {
    place-content: center;
    height: 100%;
    width: 100%;
}

.icon img {
    width: 30px;
    height: 30px;
    display: grid;
}
</style>