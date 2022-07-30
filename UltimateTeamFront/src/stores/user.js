import { defineStore } from "pinia";
import { registerUser, loginUser } from "../apiVue";
export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: {},
    authToken: {},
  }),

  actions: {
    async register(form) {
      try {
        await registerUser(form).then((response) => {
          //this.user = response.data;
          //localStorage.setItem("user", JSON.stringify(response.data));
          this.$router.push({ name: "login" });
        });
      } catch (e) {
        console.log(e);
        this.user = { e };
      }
    },
    async login(form) {
      try {
        await loginUser(form).then((response) => {
          console.log(response);
          this.user = response.data;
          this.authToken = response.token;
          localStorage.setItem("user", JSON.stringify(response.data));
          localStorage.setItem("id_token", JSON.stringify(response.token));
          // this.$router.push({ name: "home" });
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
  getters: {},
});
