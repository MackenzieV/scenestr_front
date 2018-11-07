<template>
  <div id="app">
    <img src="http://scenestr.com.au/images/scenestr-logos/Hi-res/scenestrlogo-black-cmyk-300dpi.jpg">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
