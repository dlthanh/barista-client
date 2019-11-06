import Vue from 'vue'
import Main from './Main.vue'
import VueRouter from 'vue-router'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VCalendar from 'v-calendar';
import Header from './components/layouts/Header'
import Navigator from './components/layouts/Navigator'
import Footer from './components/layouts/Footer'
import Contact from './components/layouts/Contact'

Vue.component('b-header', Header)
Vue.component('b-nav', Navigator)
Vue.component('b-footer', Footer)
Vue.component('b-contact', Contact)

Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)
Vue.use(VCalendar, {
  componentPrefix: 'vc',
});

Vue.prototype.$defaultTile = 'Trung tâm đào tạo pha chế Barista Skills'

new Vue({
  el: '#app',
  router,
  render: h => h(Main)
})
