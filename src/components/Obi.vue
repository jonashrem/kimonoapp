<template>
  <div class="obi">
    <div class="obitext ">
    <h4>Obi Name</h4>
    <table style="width:50%">
     <tr>
       <td><b>Typ</b></td>
       <td>Yukata Gürtel</td>
     </tr>
     <tr>
       <td><b>Farbe</b></td>
       <td>Schwarz</td>
     </tr>
     <tr>
       <td><b>Formalität</b></td>
       <td>formal</td>
     </tr>
    </table>
    <br />
    </div>
     <div class="obiimage ">
     <img  class="kimonomiximage" v-bind:src="'https://miniapps.jonas.huenig.name/kimono-app/kimonos/' + kimono +'.webp'"  alt="Kimono" >
     <img class="obimiximage" v-bind:src="'https://miniapps.jonas.huenig.name/kimono-app/obis/' + obi +'.webp'"  alt="Kimono">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Obi',
  props: {
    kimono: String,
    obi: String
  }
}
</script>

<style scoped>

.obiimage
{
  position: relative;
}


.kimonomiximage
{
width:100%;
height:100%;
}

.obimiximage
{
position:absolute;
top:120px;
left:60px;
width:80px;
}


.obitext {
float: left;
padding: 5px;
width: 180px;
box-sizing: border-box;
}

.obiimage {
float: left;
padding: 5px;
width: 200px;
box-sizing: border-box;
}

.obi {
float:left;
margin: 10px;
padding: 10px;
border-style: solid;
}
</style>
