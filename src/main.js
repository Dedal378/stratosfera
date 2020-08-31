import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import MobMenu from './components/MobMenu';
import MobAbout from "./components/MobAbout";
import MobCatalog from './components/MobCatalog'
import MobCatalogElectric from "./components/MobCatalogElectric";

import './styles/main.scss'

Vue.use(BootstrapVue)
Vue.component('mob-menu', MobMenu)
Vue.component('mob-about', MobAbout)
Vue.component('mob-catalog', MobCatalog)
Vue.component('mob-catalog-electric', MobCatalogElectric)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
