<script>
  import { getTournaments } from "../apiVue";
  import { ref, defineComponent } from "vue";
  export default defineComponent({
    setup() {
      let tournament = ref(null);
      try {
        const tournament = getTournaments().then((response) => {
          const data = response.data;
          console.log(data);
          return data;
        });
      } catch (e) {
        console.log(e);
      }

      return { tournament };
    },
  });

  // const tournament = getTournaments().then((response) => {
  //   this.tournaments = response.data;
  //   return Promise.resolve(response.data);
  // });
  // console.log(tournament);

  // const tournament = ref(null);
  // async function tourn(){
  //   try{
  //     const tournament = await getTournaments()
  //   }
  //   catch (e) {
  //     console.log(e)
  //   }
  // }

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
    <!-- <div>{{ tournament }}</div> -->
  </div>
</template>
