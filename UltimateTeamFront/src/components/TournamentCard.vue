<template>
  <div
    class="bg-gray-100 max-w-sm m-4 rounded overflow-hidden shadow-2xl border border-gray-600 hover:border-gray-300 hover:scale-105"
  >
    <img v-bind:src="Logo" class="object-cover w-96" alt="..." />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ NomTournoi }}</div>
      <p class="text-gray-700 text-base">{{ DateDebut }}</p>
    </div>
    <div class="px-6 object-cover">
      <div></div>
      <button
        class="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2"
      >
        <router-link
          :to="{ name: 'tournament', params: { IdTournoi: this.IdTournoi } }"
          >See more</router-link
        >
      </button>
    </div>
  </div>
</template>

<script setup>
  //----------------Props----------------------
  const props = defineProps({
    IdTournoi: Number,
    DateDebut: String,
    IdGame: Number,
    NomGame: String,
    MaxEquipe: Number,
    MaxJoueur: Number,
    MinEquipe: Number,
    MinJoueur: Number,
    NomTournoi: String,
    Logo: String,
  });

  // const router = useRouter();
  // const personId = router.currentRoute.value.params.id;
</script>
