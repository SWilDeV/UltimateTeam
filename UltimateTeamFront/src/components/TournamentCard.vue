<template>
  <div class="">
    <div class="bg-gray-100 max-w-sm mb-1 rounded overflow-hidden shadow-lg">
      <img v-bind:src="Logo" class="w-full" alt="..." />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ NomTournoi }}</div>
        <p class="text-gray-700 text-base">{{ DateDebut }}</p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >#photography</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >#travel</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >#winter</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
  //----------------Props-------------------------------
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
</script>
