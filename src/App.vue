<template>
  <div id="app">
    <KimonoFilter />
    <Kimono kimono="1"/>
    <Kimono kimono="1"/>
    <Kimono kimono="2"/>
    <Kimono kimono="1"/>
    <Kimono kimono="2"/>
    <Kimono kimono="1"/>
    <Kimono kimono="2"/>
    <Kimono kimono="1"/>
    <Kimono kimono="2"/>
  </div>
</template>

<script>
import Kimono from './components/Kimono.vue'
import KimonoFilter from './components/KimonoFilter.vue'

export default {
  name: 'App',
  components: {
    Kimono,
    KimonoFilter
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
