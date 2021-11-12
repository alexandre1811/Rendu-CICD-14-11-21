<template>
    <div v-if="!isMobile()">
      <desktop>
          <div class="container">
            <div class="col-05 bg-bleugris h17"></div>
            <div class="col-7 bg-bleugris2 txt-bleugris h-auto p-1">Si vous trouvez cette easter egg<br>alors contactez moi</div>
            <div class="d-flex">
                <div class="pr-4 mr-4 ml-2 pl-1 text-left col-6">
                  <h1 class="mt-3">Alexandre Fontaine</h1>
                  <hr>
                  <h4 class="poppins-light">Développeur Front-end / Chef de Projet</h4>
                  <p class="poppins-light">Je suis actuellement en 3ème année à l'Institut de l'Internet et du Multimedia (IIM) dans l'axe Développement Web.
                    Je me suis spécialisé dans le Développement Front-End. J'ai aussi les compétences necessaire pour gêrer un projet.</p>
                  <br>
                  <a href="CV-Alexandre-Fontaine.pdf" download="CV-Alexandre-Fontaine.pdf" class="menu">Télécharger mon CV</a>
                </div>
                <div class="col-05 bg-bleugris h25"></div>
            </div>
            <div class="col-7 bg-bleugris2 txt-bleugris h-auto p-1">Si vous trouvez cette easter egg<br>alors contactez moi</div>
            <div class="col-05 bg-bleugris h17"></div>
          </div>
      </desktop>
    </div>
    <div v-else>
      <mobile>
        <div class="container">
          <div class="col-10 ml-4 bg-gris m-10 bordureblanche pb-5">
            <div class="text-left">
              <h1 class="mt-3">Alexandre Fontaine</h1>
              <hr>
              <h4 class="poppins-light">Développeur Front-end / Chef de Projet</h4>
              <p class="poppins-light">Je suis actuellement en 3ème année à l'Institut de l'Internet et du Multimedia (IIM) dans l'axe Développement Web.
                Je me suis spécialisé dans le Développement Front-End. J'ai aussi les compétences necessaire pour gêrer un projet.</p>
              <br>
              <a href="CV-Alexandre-Fontaine.pdf" download="CV-Alexandre-Fontaine.pdf" class="menu">Télécharger mon CV</a>
            </div>
          </div>
        </div>

      </mobile>
    </div>
</template>

<script>
export default {
  name: 'PageAccueil',
  components: {

  },
  methods: {
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
  }
}
</script>

<style scoped>
.bg-bleugris{
  background: rgba(10, 121, 120, 0.75);
}

.bg-gris{
  background: #2a2a2a;
}

.bg-bleugris2{
  background: #0a7978;
}

.txt-bleugris{
  color: #0a7978;
}

.txt-bleugris::selection { background: white; }

hr{
  height: 2px;
  background: #0a7978;
}

.h17{
  height: 12.75em !important;
}

.h25{
  height: 25em;
}

.col-05{
  width: 100%;
  max-width: 5.5%;
}

.m-10{
  margin: 4rem 0 ;
}

p{
  font-size: 1.25em;
}

.menu {
  height: 100%;
  padding: 0.75em;
  position: relative;
  transition:color 2s ease;
  border: 1px white solid;
  font-size: 1.25rem !important;
}
.menu::after {
  position: absolute;
  content: '';
  top:0;
  left: 0;
  width: 0;
  height: 100%;
  background: rgba(10, 121, 120, 0.75);
  transition:width 0.25s ease;
  z-index:-1;
}
.menu:hover::after {
  width: 100%;
}

desktop{
  overflow:hidden !important;
}

.bordureblanche{
  border: 1px solid white;
}

</style>
