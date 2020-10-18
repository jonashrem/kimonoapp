<template>
  <div class="kimono">
    <div class="kimonotext ">
    <h4>Kimoni Name</h4>
    <table style="width:50%">
     <tr>
       <td><b>Typ</b></td>
       <td>Yukata</td>
     </tr>
     <tr>
       <td><b>Farbe</b></td>
       <td>Weiß</td>
     </tr>
     <tr>
       <td><b>Formalität</b></td>
       <td>unformal</td>
     </tr>
    </table>
    <br />
    <router-link v-if="!showbutton" v-bind:to="'obi/' + kimono" class="btn btn-primary btn-lg active" role="button"  >Auswählen</router-link>
    </div>
     <div class="kimonoimage ">
    <img v-bind:src="'https://miniapps.jonas.huenig.name/kimono-app/kimonos/' + kimono +'.webp'"  alt="Kimono" style="max-width:100%;height:auto;">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Kimono',
  props: {
    kimono: String,
    showbutton: Boolean
  }
}
</script>

<style scoped>
.kimonotext {
float: left;
padding: 5px;
width: 180px;
box-sizing: border-box;
}

.kimonoimage {
float: left;
padding: 5px;
width: 200px;
box-sizing: border-box;
}

.kimono {
float:left;
margin: 10px;
padding: 10px;
border-style: solid;
}
</style>
