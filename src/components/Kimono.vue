<template>
  <div class="kimono">
    <div class="kimonotext ">
    <h2>Kimoni Name</h2>
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

    </div>
     <div class="kimonoimage ">
    <img src="https://miniapps.jonas.huenig.name/kimono-app/kimonos/1.webp" alt="Kimono" style="max-width:100%;height:auto;">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Kimono',
  props: {
    kimono: String
  }
}
</script>



<style scoped>
.kimonotext {
float: left;
width: 40%;
padding: 20px;
box-sizing: border-box;
}

.kimonoimage {
float: left;
width: 40%;
padding: 20px;
box-sizing: border-box;
}

.kimono {
float:left;
margin: 10px;
padding: 10px;
width: 600px;
border-style: solid;
}
</style>
