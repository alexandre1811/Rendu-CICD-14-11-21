<template>
  <div>
    <h2 class="mt-5">Me contacter</h2>
    <div class="d-inline ">
      <div class="col-8 my-5 mx-auto bg-gris whiteborder">
        <img class="my-4" alt="tel" src="../assets/images/telblanc.png">
        <p class="mt-2">(+33) 06 64 20 15 24</p>
      </div>
      <div class="col-8 my-5 mx-auto bg-gris whiteborder">
        <img class="my-4" alt="Mail" src="../assets/images/mailblanc.png">
        <p class="mt-2">a-fontaine@outlook.com</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "footermobile"
}
</script>

<style scoped>
.bg-gris{
  background: #2a2a2a!important;
  font-size: 1.15em;
}
.whiteborder{
  border: 1px white solid!important;
}
</style>
