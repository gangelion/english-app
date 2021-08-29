<template>
  <div class="text-4xl">
    <div class="bg-blue-200 h-40"></div>
    <div class="flex h-screen">
      <div class="w-1/4 text-center bg-blue-200"></div>
      <div class="w-2/4 text-center">
        <div class="text-center text-9xl mt-20">English App</div>
        <div class="text-center mt-20">
          Menu
        </div>
        <div class="flex">
          <router-link to="quiz-view" class="m-4 w-1/2 text-center text-white ml-20 bg-blue-300 rounded-md">Quiz</router-link>
          <router-link to="" class="m-4 w-1/2 text-center text-white mr-20 bg-blue-300 rounded-md">right</router-link>
        </div>
      </div>
      <div class="w-1/4 text-center bg-blue-200"></div>
    </div>
    <div class="bg-yellow-900 h-screen"></div>
  </div>
</template>
