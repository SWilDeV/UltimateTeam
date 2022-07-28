<template>
  <div>
    <br />

    <div class="max-w-screen-md mx-auto p-5">
      <div class="text-center mb-16">
        <h3
          class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900"
        >
          Register
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
              type="password"
              :value="Password"
              @input="updatePassword"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Password"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              First Name
            </label>
            <input
              id="FirstName"
              :value="FirstName"
              @input="updateFirstName"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="Jane"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2"
            >
              Last Name
            </label>
            <input
              id="LastName"
              :value="LastName"
              @input="updateLastName"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2"
            >
              City
            </label>
            <input
              id="City"
              :value="City"
              @input="updateCity"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="New York"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2"
            >
              Country
            </label>

            <Listbox v-model="selectedCountry">
              <ListboxButton
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200 text-left"
                >{{ selectedCountry.text }}</ListboxButton
              >
              <ListboxOptions
                class="mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-200 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              >
                <ListboxOption
                  v-slot="{ active, selected }"
                  v-for="option in options"
                  :key="option.value"
                  :value="option"
                  ><li
                    :class="[
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                      'relative cursor-default select-none py-2 pl-10 pr-4',
                    ]"
                  >
                    <span
                      :class="[
                        selected ? 'font-medium' : 'font-normal',
                        'block truncate',
                      ]"
                    >
                      {{ option.text }}
                    </span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </Listbox>
            <!-- <input
              id="Country"
              :value="Country"
              @input="updateCountry"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Japan"
            /> -->
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2"
            >
              Email Address
            </label>
            <input
              id="Email"
              :value="Email"
              @input="updateEmail"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="email"
              placeholder="********@*****.**"
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2"
            >
              Presentation
            </label>
            <textarea
              id="Presentation"
              :value="Presentation"
              @input="updatePresentation"
              rows="10"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
            </textarea>
          </div>
        </div>
      </div>
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
  //import { registerUser } from "../apiVue";

  import { useUserStore } from "@/stores/user";
  import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  } from "@headlessui/vue";

  const Username = ref("");
  const Password = ref("");
  const Email = ref("");
  const FirstName = ref("");
  const LastName = ref("");
  const City = ref("");
  const Presentation = ref("");
  const options = [
    { value: null, text: "Please select an option" },
    { value: 5, text: "Canada" },
    { value: "8", text: "China" },
    { value: "1", text: "France" },
    { value: "6", text: "Germany" },
    { value: "4", text: "Italy" },
    { value: "2", text: "Japan" },
    { value: "9", text: "Korea" },
    { value: "7", text: "Russia" },
    { value: "3", text: "Spain" },
  ];
  const selectedCountry = ref(options[0]);

  const updateUsername = (event) => {
    Username.value = event.target.value;
  };
  const updatePassword = (event) => {
    Password.value = event.target.value;
  };
  const updateFirstName = (event) => {
    FirstName.value = event.target.value;
  };
  const updateLastName = (event) => {
    LastName.value = event.target.value;
  };
  const updateEmail = (event) => {
    Email.value = event.target.value;
  };
  const updateCity = (event) => {
    City.value = event.target.value;
  };

  const updatePresentation = (event) => {
    Presentation.value = event.target.value;
  };
  const submit = async () => {
    const userStore = useUserStore();
    let form = {
      Username: Username.value,
      Password: Password.value,
      Email: Email.value,
      FirstName: FirstName.value,
      LastName: LastName.value,
      City: City.value,
      Country: selectedCountry.value.text,
      Presentation: Presentation.value,
      Avatar: null,
      IdPays: selectedCountry.value.value,
    };

    try {
      await userStore.register(form);
      //await registerUser(form).then((response) => {
      // console.log(response.data);
      // });
    } catch (e) {
      console.log(e);
    }

    return {
      updateUsername,
      updatePassword,
      updateFirstName,
      updateLastName,
      updateCity,
      updateEmail,
      updatePresentation,
      submit,
    };
  };
</script>
