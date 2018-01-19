import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import RoomIndex from '@/components/room/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/room/:room',
      name: 'room',
      component: RoomIndex,
      props: true
    }
  ]
})
