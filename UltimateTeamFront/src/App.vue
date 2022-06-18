<template>
  <div>
    <!-- <NavBar id="app" /> -->
    <NavBar2 />
    <RouterView class="app bg-gray-700 w-100 h-100" />
  </div>
  <!-- <header>
    
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
</template>

<script setup>
  import { RouterView } from "vue-router";
  // import { RouterLink, RouterView } from "vue-router";
  import NavBar2 from "@/components/NavBar2.vue";
</script>

<style>
  /* #app {
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
  width: 100%;
  height: 100%;
  color: rgb(40, 98, 153);
} */
</style>
