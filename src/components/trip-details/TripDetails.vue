<template>
    <div v-if="distance" class="trip-container column">
        <div class="col">Distancia: <strong>{{ distance }} kms</strong>
        </div>
        <div class="col">Duración: <strong>{{ duration }} minutos</strong>
        </div>
    </div>
</template>

<script lang="ts">
import { useMapStore } from '@/composables';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TripDetail',
    setup() {

        const { distance, duration } = useMapStore();

        return {
            distance,
            duration
        }
    }
});
</script>

<style scoped>
.trip-container {
    background-color: black;
    border-radius: 10px;
    bottom: 40px;
    box-shadow: 0px 10px 10px rgba(0,0,0,0.2);
    border: 2px solid #00FF83;
    font-size: 20px;
    color: white;
    padding: 10px;
    left: 20px;
    position: fixed;
    width: 300px;
}

strong {
    color: #00FF83;
}
</style>