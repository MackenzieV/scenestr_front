<template>
  <div class="nav">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import accountComponent from './components/Account.vue'
import settingsComponent from './components/Settings.vue'
import faqComponent from './components/Faq.vue'

export default {
  name: 'Nav',
  components: {accountComponent, settingsComponent, faqComponent}
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
