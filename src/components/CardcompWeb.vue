<template>
  <div>
    <b-card :img-src="require('../assets/images/codeblanc.png')" img-alt="Dev" img-top class="px-auto pt-4 bg-gris align-items-center border-light noradius my-5">
      <b-card-text>
        Je peux développer un Front-office afin de répondre à vos besoin.
        <br>
        <b-button class="mt-5"    v-b-modal.modal-1>Plus d'informations</b-button>

        <b-modal id="modal-1" title-tag="h4" hide-header size="lg" body-bg-variant="dark" header-bg-variant="dark" hide-footer centered title="Dévellopement Web">
          <h2>Dévellopement Web</h2>
          <h5>Je peux développer le Front-office de votre site Web afin de vous apporter une meilleur visibilité. J'ai aussi quelque base en développement de Back-end notament en PHP</h5>
          <br>
          <h5>Langages de Programmations, Logiciels, CMS et Framework utilisés :</h5>

        </b-modal>
      </b-card-text>
    </b-card>
    <b-card :img-src="require('../assets/images/devblanc.png')" img-alt="Dev" img-top class="px-auto pt-4 bg-gris align-items-center border-light noradius my-5">
      <b-card-text>
        Je peux développer un Front-office afin de répondre à vos besoin.
        <br>
        <b-button class="mt-5"    v-b-modal.modal2>Plus d'informations</b-button>

        <b-modal id="modal2" title-tag="h4" hide-header size="lg" body-bg-variant="dark" header-bg-variant="dark" hide-footer centered title="Dévellopement Web">
          <h2>Web Design</h2>
          <h5>Je peux créer les maquettes de votre sites afin de les réaliser par la suite. Je peux aussi développer quelque visuel de base. </h5>
          <br>
          <h5>Logiciels utilisés :</h5>

        </b-modal>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "CardcompWeb"
}
</script>

<style scoped>
.bg-gris{
  background: #2a2a2a!important;
  font-size: 1.25em;
}

h4, h5, h2{
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

img{
  max-width: 125px;
  max-height: 125px;
}

</style>
