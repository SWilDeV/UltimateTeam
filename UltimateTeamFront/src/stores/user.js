import { defineStore } from "pinia";
import { registerUser } from "../apiVue";
export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: {},
  }),

  actions: {
    async register(form) {
      try {
        await registerUser(form).then((response) => {
          this.user = response.data;
          localStorage.setItem("user", JSON.stringify(response.data));
          this.$router.push({ name: "login" });
        });
      } catch (e) {
        console.log(e);
        this.user = { e };
      }
    },
  },
  getters: {},
});
