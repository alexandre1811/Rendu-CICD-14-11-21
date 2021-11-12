<template>
  <div class="container">

    <CardcompWeb/>
  </div>

</template>

<script>
import CardcompWeb from "../components/CardcompWeb";
export default {
  name: "PageComp",
  components:{
    CardcompWeb,
  },
}
</script>

<style scoped>
.bg-gris{
  background: #2a2a2a!important;
  font-size: 1.25em;
}

h4{
  color: white!important;
}

video{
  max-width: 720px;
}

.noradius{
  border-radius: 0!important;
}

.whiteborder{
  border: 1px white solid!important;
}
</style>
