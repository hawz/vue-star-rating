<template>
  <div id="app">
    <Rating :grade="3" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Rating from "./components/Rating.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    Rating
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
