import { defineStore } from "pinia";
import { registerUser, loginUser } from "../apiVue";
export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: JSON.parse(localStorage.getItem("user")),
    authToken: {},
    isSignedIn: JSON.parse(localStorage.getItem("isSignedIn")),
  }),

  actions: {
    async register(form) {
      try {
        await registerUser(form).then((response) => {
          this.subscribeData(response);
          this.$router.push({ name: "profile" });
        });
      } catch (e) {
        console.log(e);
        this.user = { e };
      }
    },
    async login(form) {
      try {
        loginUser(form).then((response) => {
          if (response.success) {
            //this.subscribeData(response);
            this.user = response.data;
            this.authToken = response.token;
            this.isSignedIn = true;
            localStorage.setItem("user", JSON.stringify(response.data));
            localStorage.setItem("id_token", JSON.stringify(response.token));
            localStorage.setItem("isSignedIn", true);
            this.$router.push({ name: "profile" });
          } else {
            console.log(response.msg);
            this.$router.push({ name: "login" });
          }
        });
      } catch (e) {
        console.log(e);
      }
    },
    logout() {
      this.authToken = null;
      this.user = null;
      this.isSignedIn = false;
      localStorage.clear();
      this.$router.push({ name: "home" });
    },

    loadToken() {
      const token = localStorage.getItem("id_token");
      this.authToken = token;
    },

    checkSignedIn() {
      if (localStorage.getItem("user")) {
        localStorage.setItem("isSignedIn", true);
      } else {
        localStorage.setItem("isSignedIn", false);
      }
    },

    async subscribeData(response) {
      this.user = await response.data;
      this.authToken = await response.token;
      this.isSignedIn = true;
      localStorage.setItem("user", JSON.stringify(response.data));
      localStorage.setItem("id_token", JSON.stringify(response.token));
    },
  },
  getters: {},
});
