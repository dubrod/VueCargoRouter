import Vue from 'vue'
import Router from 'vue-router'
import DashboardView from '@/components/DashboardView'
import TrucksView from '@/components/TrucksView'
import CargoView from '@/components/CargoView'
import RoutesView from '@/components/RoutesView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: DashboardView
    },
    {
      path: '/cargo',
      name: 'Cargo',
      component: CargoView
    },
    {
      path: '/trucks',
      name: 'Trucks',
      component: TrucksView
    },
    {
      path: '/routes',
      name: 'Routes',
      component: RoutesView
    }
  ]
})
