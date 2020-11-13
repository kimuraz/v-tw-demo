<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <h2>VTW</h2>

    <button v-tw>Default</button>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@tailwind base;

@tailwind components;

@tailwind utilities;
</style>
