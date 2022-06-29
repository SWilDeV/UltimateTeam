<template>
  <div>
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
