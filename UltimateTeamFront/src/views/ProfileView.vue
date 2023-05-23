<template>
  <div class="dashboard p-4">
    <div class="mt-5 w-full">
      <h1 class="text-2xl text-gray-200 font-medium">Profile Page</h1>
    </div>
    <!-- User Presentation -->
    <div class="mt-2 lg:flex block lg:gap-2">
      <div class="object-center">
        <div
          class="bg-gray-800 p-5 lg:w-96 lg:mt-0 mt-4 shadow rounded-md w-full text-center"
        >
          <div class="object-center">
            <img
              src="../assets/avatar7.png"
              alt=""
              width="100"
              height="100"
              class="rounded-full block object-center"
            />
            <div></div>
          </div>
          <h2 class="text-gray-300 text-xl font-bold">{{ user.Username }}</h2>
          <p class="font-medium font-lg mt-2 text-gray-200">
            {{ user.City }}, {{ user.Country }}
          </p>
          <div class="mt-4 grid grid-cols-1 gap-4">
            <p class="text-gray-300">
              {{ user.Presentation }}
            </p>
          </div>
        </div>
      </div>
      <!-- User Info -->
      <div class="lg:flex block w-full mt-2">
        <div class="bg-gray-800 p-5 w-full rounded-md box-border shadow">
          <div class="flex justify-between w-full">
            <h2 class="font-bold text-gray-300">Username</h2>
            <h2 class="text-gray-300 font-bold pr-5">{{ user.Username }}</h2>
            <!-- <h2 class="text-gray-300 font-bold pr-5">M3lanSh'On</h2> -->
          </div>
          <hr />
          <div class="flex justify-between w-full mt-5">
            <h2 class="font-bold text-gray-300">Email</h2>
            <h2 class="text-gray-300 font-bold pr-5">{{ user.Email }}</h2>
          </div>
          <hr />
          <div class="flex justify-between w-full mt-5">
            <h2 class="font-bold text-gray-300">Name</h2>
            <h2 class="text-gray-300 font-bold pr-5">
              {{ user.FirstName }} {{ user.LastName }}
            </h2>
          </div>
          <hr />
          <div class="flex justify-between w-full mt-5">
            <h2 class="font-bold text-gray-300">Country</h2>
            <h2 class="text-gray-300 font-bold pr-5">{{ user.Country }}</h2>
          </div>
          <hr />
          <div class="flex justify-between w-full mt-5">
            <h2 class="font-bold text-gray-300">Registered since:</h2>
            <h2 class="text-gray-300 font-bold pr-5">{{ user.DateJoined }}</h2>
          </div>
          <hr />
        </div>
      </div>
    </div>
    <!-- Tournament info-->
    <div class="mt-2 lg:flex block lg:gap-2">
      <div class="mt-2 bg-gray-800 p-5 w-full rounded-md box-border shadow">
        <h2 class="font-bold text-lg text-gray-200">Tournaments</h2>
        <p class="text-gray-400 font-lexend font-normal">
          New products this week
        </p>
      </div>
      <div class="mt-2 bg-gray-800 p-5 w-full rounded-md box-border shadow">
        <h2 class="font-bold text-lg text-gray-300 dark:text-gray-200">
          Teams
        </h2>
        <p class="text-gray-400 font-lexend font-normal">Visitor this week</p>
      </div>
      <div class="mt-2 bg-gray-800 p-5 w-full rounded-md box-border shadow">
        <h2 class="font-bold text-lg text-gray-200">Matchs</h2>
        <p class="text-gray-400 font-lexend font-normal">
          User signups this week
        </p>
      </div>
    </div>
    <!-- grid wrapper card -->
  </div>
</template>

<script setup>
  import { useUserStore } from "@/stores/user";
  const userStore = useUserStore();
  const user = JSON.parse(localStorage.getItem("user"));
</script>
