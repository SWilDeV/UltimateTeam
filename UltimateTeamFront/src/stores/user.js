import { defineStore } from "pinia";
import { registerUser } from "../apiVue";
// import { router } from "@/router";
// import { useRouter } from "vue-router";
// import { router } from "vue-router";

// const router = useRouter();
export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: {},
  }),

  actions: {
    async register(form) {
      try {
        await registerUser(form).then((response) => {
          //const router = useRouter();
          this.user = response.data;
          localStorage.setItem("user", JSON.stringify(response.data));
          // router.push({ name: "login" });
        });
      } catch (e) {
        console.log(e);
        this.user = { e };
      }
    },
  },
  getters: {},
});
