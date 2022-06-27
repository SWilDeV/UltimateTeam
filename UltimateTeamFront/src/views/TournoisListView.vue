<script>
  import { getTournaments } from "../apiVue";
  import { ref, defineComponent } from "vue";
  export default {
    setup() {
      const Tournaments = ref({});
      try {
        Tournaments.value = getTournaments().then((response) => {
          Tournaments.value = response.data;
        });
      } catch (e) {
        console.log(e);
      }

      return { Tournaments };
    },
  };
</script>

<template>
  <div>
    <h1>TournoiListViews</h1>
    <div>{{ Tournaments }}</div>
  </div>
</template>
