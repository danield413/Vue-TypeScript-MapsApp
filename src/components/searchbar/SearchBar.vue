

<template>
  <div class="searchbar-container">
    <input type="text" class="form-control" placeholder="Buscar lugares..."
      v-model="searchTerm">
      
    <SearchResults />
    
  </div>
</template>

<script lang="ts" src="./SearchBar.ts" />

<style scoped>
.searchbar-container {
  position: fixed;
  top: 30px;
  left: 30px;
  width: 300px;
  z-index: 99999;
  background-color: #fff;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px !important;
  overflow: auto;
  padding: 5px;
  max-height: 60vh;
}

</style>