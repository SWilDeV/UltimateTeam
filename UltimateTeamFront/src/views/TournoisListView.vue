<script setup>
  import { getTournaments } from "../apiVue";
  getTournaments().then((response) => {
    this.tournaments = response.data;
  });

  // onMounted(() => {
  //   test();
  // });
  // function test() {
  //   console.log(import.meta.env.VITE_BASE_URL);
  // }
</script>

<template>
  <div>
    <h1>TournoiListViews</h1>
    <!-- <div>{{ tournaments[0].nomTournoi }}</div> -->
  </div>
</template>
