<script setup></script>

<!-- <template>
  <div class="container">
    <h1>ProfileView</h1>
    <div class="max-w-screen-md mx-auto p-5">
      <div>

      </div>
    </div>
  </div>
</template> -->

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
          <h2 class="text-gray-300 text-xl font-bold">Jean-Luc</h2>
          <p class="font-medium font-lg mt-2 text-gray-200">Osaka, Japon</p>
          <div class="mt-4 grid grid-cols-1 gap-4">
            <p class="text-gray-300">
              Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl
              Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed,
              nislMorbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed,
              nislMorbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed,
              nislMorbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed,
              nisl
            </p>
          </div>
        </div>
      </div>
      <!-- User Info -->
      <div class="lg:flex block w-full mt-2">
        <div class="bg-gray-800 p-5 w-full rounded-md box-border shadow">
          <div class="flex justify-between w-full">
            <h2 class="font-bold text-gray-300">Username</h2>
            <h2 class="text-gray-300 font-bold pr-5">M3lanSh'On</h2>
          </div>
          <hr />
          <div class="flex justify-between w-full mt-5">
            <h2 class="font-bold text-gray-300">Email</h2>
            <h2 class="text-gray-300 font-bold pr-5">aaa@aa.com</h2>
          </div>
          <hr />
          <div class="flex justify-between w-full mt-5">
            <h2 class="font-bold text-gray-300">Nom</h2>
            <h2 class="text-gray-300 font-bold pr-5">aaa aaa</h2>
          </div>
          <hr />
          <div class="flex justify-between w-full mt-5">
            <h2 class="font-bold text-gray-300">Pays</h2>
            <h2 class="text-gray-300 font-bold pr-5">France</h2>
          </div>
          <hr />
          <div class="flex justify-between w-full mt-5">
            <h2 class="font-bold text-gray-300">Inscrit le:</h2>
            <h2 class="text-gray-300 font-bold pr-5">2022-06-18</h2>
          </div>
          <hr />
        </div>
      </div>
    </div>
    <!-- Tournament info-->
    <div class="mt-2 lg:flex block lg:gap-2">
      <div class="mt-2 bg-gray-800 p-5 w-full rounded-md box-border shadow">
        <h2 class="font-bold text-lg text-gray-200">Tournois inscrits</h2>
        <p class="text-gray-400 font-lexend font-normal">
          New products this week
        </p>
      </div>
      <div class="mt-2 bg-gray-800 p-5 w-full rounded-md box-border shadow">
        <h2 class="font-bold text-lg text-gray-300 dark:text-gray-200">
          Equipes dont je fais parti
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
