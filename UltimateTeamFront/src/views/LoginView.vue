<script setup></script>

<template>
  <div>
    <br />

    <div class="max-w-screen-md mx-auto p-5">
      <form>
        <div class="text-center mb-16">
          <h3
            class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900"
          >
            Login
          </h3>
        </div>
        <div class="w-full">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2"
              >
                Username
              </label>
              <input
                id="Username"
                :value="Username"
                @input="updateUsername"
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="text"
                placeholder="Username"
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2"
              >
                Password
              </label>
              <input
                id="Password"
                type="Password"
                :value="Password"
                @input="updatePassword"
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Password"
              />
            </div>
          </div>
        </div>
      </form>
      <div class="flex justify-between w-full">
        <button
          class="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
          type="submit"
          @click="submit"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  import { useUserStore } from "@/stores/user";

  const Username = ref("");
  const Password = ref("");
  const userStore = useUserStore();

  const updateUsername = (event) => {
    Username.value = event.target.value;
  };
  const updatePassword = (event) => {
    Password.value = event.target.value;
  };
  const submit = async () => {
    let form = {
      Username: Username.value,
      Password: Password.value,
    };

    try {
      await userStore.login(form);
    } catch (e) {
      console.log(e);
    }

    return {
      updateUsername,
      updatePassword,
      submit,
    };
  };
</script>
