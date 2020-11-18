<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <h2>VTW</h2>

    <div v-twc="cardDef">
      <button v-tw>Default</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      cardDef: {
        card: ['bordered'],
      },
    }
  },
};
</script>

<style>
@tailwind base;

@tailwind components;

@tailwind utilities;
</style>
