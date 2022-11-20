import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/components/HomePage'
import TransportationPage from '@/components/TransportationPage'
import EntertainmentPage from '@/components/EntertainmentPage'
import SightseeingPage from '@/components/SightseeingPage'
import LodgingPage from '@/components/LodgingPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/transportation',
    name: 'transportation',
    component: TransportationPage
  },
  {
    path: '/entertainment',
    name: 'entertainment',
    component: EntertainmentPage
  },
  {
    path: '/sightseeing',
    name: 'sightseeing',
    component: SightseeingPage
  },
  {
    path: '/lodging',
    name: 'lodging',
    component: LodgingPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
