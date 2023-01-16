import { defineStore } from "pinia";
import { get, post } from "@/api/request";

// 這種作法，我是不是可以在一隻檔案裡掛超多 store 方法
export const userStore = defineStore("user", {
  // other options...
  state: () => ({
    counter: 3,
    info: null,
  }),
  actions: {
    async setToken(payload) {
      localStorage.setItem(
        `${import.meta.env.VITE_TOKEN_ID}`,
        payload.access_token
      );
      localStorage.setItem(
        `${import.meta.env.VITE_TOKEN_ID}_refresh`,
        payload.refresh_token
      );
      console.log("set token:", payload);
    },
    removeToken() {
      localStorage.removeItem(`${import.meta.env.VITE_TOKEN_ID}`);
      localStorage.removeItem(`${import.meta.env.VITE_TOKEN_ID}_refresh`);
    },

    async getMe() {
      try {
        const data = await get({ type: "users", collection: "me" });
        if (!data) throw Error();
        this.info = data;
        console.log("user", data);
        return true;
      } catch (error) {
        console.log("cant get me");
        return false;
      }
    },

    async authenticated() {
      const token = localStorage.getItem(`${import.meta.env.VITE_TOKEN_ID}`);
      if (!token) return false;
      const getMe = await this.getMe();
      if (!getMe) return false;
      return true;
    },

    async login({ email, password }) {
      try {
        const res = await post({
          data: {
            email: email.value,
            password: password.value,
          },
          type: "auth",
          collection: "login",
        });
        if (!res) throw Error();
        await this.setToken(res);
        const setUserInfo = await this.getMe();
        if (!setUserInfo) throw Error();
        return true;
      } catch (error) {
        console.log("login fail");
        this.removeToken();
        return false;
      }
    },
    async logout() {
      try {
        this.removeToken();
        this.$reset();
        return true;
      } catch (error) {
        return false;
      }
    },
  },
});
