<template>
  <div class="obi">
  <ObiFilter />
  <Kimono showbutton :kimono=$route.params.id />
  <Obi :kimono=$route.params.id  obi="1"/>
  <Obi :kimono=$route.params.id  obi="2"/>
  <Obi :kimono=$route.params.id  obi="1"/>
  <Obi :kimono=$route.params.id  obi="2"/>
  <Obi :kimono=$route.params.id  obi="1"/>
  <Obi :kimono=$route.params.id  obi="2"/>
  </div>
</template>


<script>
import Obi from '../components/Obi.vue'
import Kimono from '../components/Kimono.vue'
import ObiFilter from '../components/ObiFilter.vue'

export default {
  name: 'App',
  components: {
    Obi,
    Kimono,
    ObiFilter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
