<template>
  <div>
    <!-- <NavBar id="app" /> -->
    <NavBar2 />
    <RouterView class="app min-h-screen bg-gray-700" />
  </div>
</template>

<script setup>
  import { RouterView } from "vue-router";
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
