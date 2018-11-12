<template>
  <div class="Nav">
    <h1>{{ msg }}</h1>
    <router-link to="Main">Back</router-link>
    <router-link to="Account">Account</router-link>
    <router-link to="Settings">Settings</router-link>
    <router-link to="Faq">FAQ</router-link>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      msg: 'This is the Nav component'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
