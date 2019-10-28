import Vue from 'vue'
import Main from './Main.vue'
import VueRouter from 'vue-router'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VCalendar from 'v-calendar';
import Header from './components/layouts/Header'
import Navigator from './components/layouts/Navigator'

Vue.component('b-header', Header)
Vue.component('b-nav', Navigator)

Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)
Vue.use(VCalendar, {
  componentPrefix: 'vc',
});

new Vue({
  el: '#app',
  router,
  render: h => h(Main)
})
