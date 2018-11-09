<template>
  <div class="footer">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import searchComponent from './components/Search.vue'
import eventCreate from './components/EventCreate.vue'


export default {
  name: 'Footer',
  components: {searchComponent},
  data () {
    return {
      msg: 'this is the footer component'
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
