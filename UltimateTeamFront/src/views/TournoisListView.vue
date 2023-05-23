<template>
  <div>
    <div class="container mx-auto px-4 md:px-12">
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <TournamentCard
          v-for="tournament in Tournaments"
          :key="tournament.IdTournoi"
          :IdTournoi="tournament.IdTournoi"
          :DateDebut="tournament.dateDebut"
          :IdGame="tournament.IdGame"
          :NomGame="tournament.nomJeu"
          :MaxEquipe="tournament.maxEquipe"
          :MaxJoueur="tournament.maxJoueur"
          :MinEquipe="tournament.minEquipe"
          :MinJoueur="tournament.minJoueur"
          :NomTournoi="tournament.nomTournoi"
          :Logo="tournament.Logo"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { getTournaments } from "../apiVue";
  import { ref } from "vue";
  import TournamentCard from "@/components/TournamentCard.vue";

  //----------------Get Tournaments--------------------
  const Tournaments = ref({});
  try {
    Tournaments.value = getTournaments().then((response) => {
      Tournaments.value = response.data;
    });
  } catch (e) {
    console.log(e);
  }
</script>
