<template>
  <div v-if="!isMobile()">
    <div class="container">
        <CardWeb/>
    </div>
  </div>
  <div v-else>
    <div class="container">
        <CardMobile />
    </div>
  </div>
</template>

<script>
import CardWeb from "../components/CardWeb";
import CardMobile from "../components/CardMobile";
export default {
  name: "PageProjet",
  components:{
    CardWeb,
    CardMobile
  },
  props:{


  },
  data(){
    return{
      projet:[
        {img:"'../assets/images/priska.png'", txt:" Lors de mon stage de première année j'ai eu plusieurs missions, réalisation de brochure,\n" +
              "                      modification d'affiche, développement du Front-office d'une page changement de mot de passe,\n" +
              "                      dévelopement d'une landing page anglaise et chinoise.", titre:"Stage de Première Année.", imgalt:"Clem", video:"/media/videoclem.bb28b5bf.mp4"},
        {img:"/img/marie.ebb04ce8.png", txt:"Réalisation du portfolio d'une éléve de 3ème Année de l'axe Création Design selon les maquettes qu'elle a conçu. " +
              "J'ai donc du développer le site et modifier les maquettes affin de pouvoir développer une version optimal sur mobile", titre:"Stage de Première Année.", imgalt:"zeby", video: "/media/videomarie.740ff52b.mp4"},
        {img:"/img/priska.95cfb89c.png", txt:"Le site de l'artiste Priska a été réalisé dans le cadre d'une Bourse Au Projet (BAP)." +
              " Lors de ce projet j'étais en charge du développement de tout le Javascript du site, la réalisation du header et de ses animations," +
              " le css et placement des dossiers et leurs fenêtres, le preloader et le footer qui prend le role de menu.", titre:"Stage de Première Année.", imgalt:"Priska", video: "/media/videopriska.adf68d7e.mp4"},
      ],
    }
  },
  methods: {
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    },


  }
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
