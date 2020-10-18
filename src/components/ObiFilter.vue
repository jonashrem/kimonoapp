<template>
<div>
<b-container class="fluid Obifilter pb-1" >
<b-row>
  <b-col><h2>Filter</h2></b-col>
</b-row>
<b-row>
<b-col class="pb-1" ><router-link to="/" class="btn btn-primary btn-lg active" role="button"  >zurück</router-link></b-col>
</b-row>
    <b-row>
      <b-col><b-form-select id="typfilter" v-model="selectedtype" :options="typen"></b-form-select></b-col>
      <b-col><b-form-select id="farbfilter" v-model="selectedcolor" :options="farben"></b-form-select></b-col>
      <b-col><b-form-select id="formalfilter" v-model="selectedformal" :options="formal"></b-form-select></b-col>
      <b-col><b-form-select id="jahreszeitenfilter" v-model="selectedjahreszeit" :options="jahrzeiten"></b-form-select></b-col>
  </b-row>
</b-container>
</div>
</template>


<script>
export default {
data() {
  return {
      name: 'ObiFilter',
      selectedtype: null,
      selectedcolor: null,
      selectedformal: null,
      selectedjahreszeit: null,
      typen: [
      { value: null, text: 'Typen Filtern' },
      { value: 'yukata', text: 'Yukata Gürtel' },
      { value: 'Obi', text: 'Obi' },
      ],
      jahrzeiten: [
      { value: null, text: 'Jahreszeiten Filtern' },
      { value: 'fruehling', text: 'Frühling' },
      { value: 'sommer', text: 'Sommer' },
      { value: 'herbst', text: 'Herbst' },
      { value: 'winter', text: 'Winter' },

      ],
      farben: [
      { value: null, text: 'Farbe Filtern' },
      { value: 'weiß', text: 'Weiß' },
      { value: 'weiß', text: 'Schwarz' },
      { value: 'weiß', text: 'Rot' },
      { value: 'weiß', text: 'Grün' },
      { value: 'weiß', text: 'Blau' },
      { value: 'weiß', text: 'Gelb' },
      { value: 'weiß', text: 'Lila' },
      { value: 'weiß', text: 'Orange' },
      ],
      formal: [
      { value: null, text: 'Formal Filtern' },
      { value: '10', text: 'sehr formal' },
      { value: '1', text: 'nicht formal' },
      ],
    }
  }
}
</script>

<style scoped>
.Obifilter {

border-style: solid;
}
</style>
