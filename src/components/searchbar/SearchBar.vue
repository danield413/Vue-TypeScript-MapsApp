

<template>
  <div class="container-input">
    <input type="text" placeholder="Buscar un lugar"
  v-model="searchTerm">
  </div>
  
  <div class="searchbar-container">
    <SearchResults />
    
  </div>
</template>

<script lang="ts" src="./SearchBar.ts" />

<style scoped>
/* .searchbar-container {
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
} */

.searchbar-container {
  position: fixed;
  top: 90px;
  left: 30px;
  width: 300px;
  z-index: 99999;
  /* border: 2px solid #272727; */
  max-height: 55vh;
  overflow: auto;
  padding: 10px;
}

input {
  position: fixed;
  top: 30px;
  left: 30px;
  width: 300px;
  padding: 10px;
  border: none;
  outline: none;
  font-size: 16px;
  box-sizing: border-box;
  transition: all 0.5s ease;
  background-color: transparent;
  backdrop-filter: blur(10px);
  border: 3px solid #ffffff;
  color: #fefefe;
  font-weight: bold;
}

input:focus {
  border: 3px solid #00FF83;
}

input::placeholder {
  color: white;
  font-weight: light;
}

@media screen and (max-width: 768px) {
  .container-input {
    background-color: red;
    display: flex;
    justify-content: center;
  }

  input {
    top: 10px;
    left: 10px;
  }
  
}

</style>