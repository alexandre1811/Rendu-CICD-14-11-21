<template>
  <div v-if="!isMobile()">
    <div class="container">
      <footerweb/>
    </div>
  </div>

  <div v-else>
    <footermobile/>
  </div>
</template>

<script>
import footerweb from "../components/footerweb";
import footermobile from "../components/footermobile";
export default {
  name: "PageContact",
  components:{
    footerweb,
    footermobile
  },
  methods: {
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    },
  }
}
</script>

<style scoped>

</style>
