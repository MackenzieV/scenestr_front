<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import homeComponent from './components/Home.vue'
export default {
  name: 'App',
  components: {homeComponent}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  max-width: 150px;
  max-height: 150px;
}
</style>
