import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProfileView from "../views/ProfileView.vue";
import TournoisListView from "../views/TournoisListView.vue";
import TournamentView from "../views/TournamentView.vue";
import TeamsListView from "../views/TeamsListView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import MatchsListView from "../views/MatchsListView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },

    {
      path: "/tournament/:IdTournoi",
      name: "tournament",
      component: TournamentView,
    },
    {
      path: "/tournaments",
      name: "tournaments",
      component: TournoisListView,
    },
    {
      path: "/teams",
      name: "teams",
      component: TeamsListView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/matchs",
      name: "matchs",
      component: MatchsListView,
    },
  ],
});

export default router;
