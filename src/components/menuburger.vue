<template>
  <div>
    <div v-if="!isMobile()">
      <desktop>
        <Slide width="250"  :crossIcon="false">
          <div class="p-0" v-for="navbar in navbars" :key="navbar.name">
            <router-link :id="navbar.name"  :to="navbar.href">
              <span class="menu">{{navbar.name}}</span>
            </router-link>
          </div>
        </Slide>
      </desktop>
    </div>
    <div v-else>
      <mobile>
        <Slide right width="250"  :crossIcon="false">
          <div class="p-0" v-for="navbar in navbars" :key="navbar.name">
            <router-link :id="navbar.name"  :to="navbar.href">
              <span class="menu">{{navbar.name}}</span>
            </router-link>
          </div>
        </Slide>
      </mobile>
    </div>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'
export default {
  name: "menuburger",
  components: {
    Slide
  },
  data(){
    return{
      navbars: [
        {href: "/", name: 'Accueil'},
        {href: "/projets", name: 'Projets'},
        {href: "/compétences", name: 'Compétences'},
        {href: "/contact", name: 'Contact'},
      ],
    }
  },
  methods: {
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
  }
}
</script>

<style scoped>

.bm-item-list > * > * {
  text-decoration: none;
  padding: 0.7em;
}
.bm-item-list > * > * > span {
  margin-left: 10px;
  font-weight: 700;
  color: white;
}
.menu {
  height: 100%;
  padding: 0.45em;
  position: relative;
  transition:color 2s ease;
  border: 1px white solid;
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
</style>
