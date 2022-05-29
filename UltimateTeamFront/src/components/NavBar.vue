<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <!-- Home-->
        <b-nav-item
          ><RouterLink to="/" class="nav-link"> Mada </RouterLink></b-nav-item
        >
      </b-navbar-nav>

      <!-- Tournois-->
      <b-navbar-nav>
        <b-nav-item-dropdown
          text="Tournois"
          class="nav-link ml-auto"
          right
          v-if="isSignedIn"
        >
          <b-dropdown-item
            ><RouterLink
              to="listTournaments"
              class="text-decoration-none text-reset"
            >
              Voir les tournois</RouterLink
            ></b-dropdown-item
          >
          <b-dropdown-item
            ><RouterLink
              to="/creerTournois"
              class="text-decoration-none text-reset"
            >
              Creer un tournoi</RouterLink
            ></b-dropdown-item
          >
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <!-- Equipes-->
      <b-navbar-nav>
        <b-nav-item-dropdown
          text="Equipes"
          class="nav-link"
          right
          v-if="isSignedIn"
        >
          <b-dropdown-item
            ><RouterLink to="equipes" class="text-decoration-none text-reset">
              Voir les equipes</RouterLink
            ></b-dropdown-item
          >
          <b-dropdown-item
            ><RouterLink
              to="/createTeam"
              class="text-decoration-none text-reset"
            >
              Creer une equipe</RouterLink
            ></b-dropdown-item
          >
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <!-- User-->
      <b-navbar-nav>
        <b-nav-item
          ><a
            ><RouterLink to="/profile" class="nav-link" v-if="isSignedIn">
              {{ user }}
            </RouterLink></a
          ></b-nav-item
        >
      </b-navbar-nav>

      <!-- register-->
      <b-navbar-nav class="ms-auto">
        <b-nav-item
          ><a
            ><RouterLink to="/register" class="nav-link" v-if="!isSignedIn">
              Register
            </RouterLink></a
          ></b-nav-item
        >
      </b-navbar-nav>

      <!-- login-->
      <b-navbar-nav class="">
        <b-nav-item
          ><RouterLink class="nav-link" to="/login" v-if="!isSignedIn">
            Sign in
          </RouterLink></b-nav-item
        >
      </b-navbar-nav>

      <!-- logout-->
      <b-navbar-nav class="">
        <b-nav-item
          class="nav-link"
          v-if="isSignedIn"
          v-on:click="onLogoutClick"
          ><a>Sign out</a></b-nav-item
        >
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<script>
// export default {
//   name: "NavBar",
//   data() {
//     return {
//       user: "Mon Profil",
//     };
//   },
//   props: {
//     isSignedIn: Boolean,
//     usr: String,
//   },
//   methods: {
//     onLogoutClick() {
//       localStorage.clear();
//       console.log("you are logged out");
//       this.$store.dispatch("changeToFalse");
//       this.$router.push({ name: "home" });
//     },
//   },
// };

//
</script>

<style></style>
