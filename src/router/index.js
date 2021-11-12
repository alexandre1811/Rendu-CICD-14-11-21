import Vue from 'vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import PageAccueil from "../views/PageAccueil";
import PageProjet from "../views/PageProjet";
import PageComp from "../views/PageComp";
import PageContact from "../views/PageContact";

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const routes = [
    { path: '/', component: PageAccueil },
    { path: '/projets', component: PageProjet },
    { path: '/compétences', component: PageComp },
    { path: '/contact', component: PageContact },
]

export default new VueRouter({
    routes
});
