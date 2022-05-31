<script setup>
  import { getUsers } from "../apiVue";
  // import { ref } from "vue";
  // let result = ref(null);
  getUsers().then((response) => {
    const rresult = response;
    console.log(rresult.data);
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
  </div>
</template>
