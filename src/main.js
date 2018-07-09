// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import CargoItem from './components/CargoItem'
import CargoEdit from './components/CargoEdit'
import TruckItem from './components/TruckItem'
import TruckEdit from './components/TruckEdit'
import RoutesItem from './components/RoutesItem'

Vue.component('cargo-item', CargoItem)
Vue.component('cargo-edit', CargoEdit)
Vue.component('truck-item', TruckItem)
Vue.component('truck-edit', TruckEdit)
Vue.component('routes-item', RoutesItem)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data () {
    return {
      editCargoActive: false,
      editTruckActive: false,
      possibleroutes: [],
      routes: [],
      cargo: [
        { 'id': 'default',
          'name': '3 Cases of Hefe',
          'weight': 2.5,
          'destination': {
            'title': 'Prost Tampa',
            'address': '2802 E Bearss Ave',
            'city': 'Tampa',
            'state': 'FL',
            'zip': 33613,
            'lat': 28.0807629,
            'long': -82.4302603
          }
        },
        { 'id': 1,
          'name': 'Yuengling Delivery',
          'weight': 5.5,
          'destination': {
            'title': 'Yuengling Brewing Company',
            'address': '11111 N 30th St.',
            'city': 'Tampa',
            'state': 'FL',
            'zip': 33612,
            'lat': 28.0503295,
            'long': -82.4463579
          }
        },
        { 'id': 2,
          'name': 'LE Bottled Brew',
          'weight': 4.8,
          'truck': 2,
          'destination': {
            'title': 'Tampa Harley',
            'address': '6920 N. Dale Mabry Hwy',
            'city': 'Tampa',
            'state': 'FL',
            'zip': 33614,
            'lat': 28.0129936,
            'long': -82.5055445
          }
        },
        { 'id': 3,
          'name': 'Mugs',
          'weight': 8.2,
          'destination': {
            'title': 'Hofbrahaus',
            'address': '123 4th St. S',
            'city': 'St. Petersburg',
            'state': 'FL',
            'zip': 33701,
            'lat': 27.7718938,
            'long': -82.6414387
          }
        },
        { 'id': 4,
          'name': '2 Bud Light Kegs',
          'weight': 18.0,
          'destination': {
            'title': 'The Hangar',
            'address': '540 1st St. S',
            'city': 'St. Petersburg',
            'state': 'FL',
            'zip': 33701,
            'lat': 27.7693497,
            'long': -82.6356022
          }
        }
      ],
      trucks: [
        { 'id': 'default',
          'name': 'Box Truck',
          'maxweight': 22.0,
          'maxrange': 45,
          'maxstops': 4
        },
        { 'id': 1,
          'name': 'Cargo Truck',
          'maxweight': 26.0,
          'maxrange': 75,
          'maxstops': 6
        },
        { 'id': 2,
          'name': 'Pickup Truck',
          'maxweight': 16.0,
          'maxrange': 35,
          'maxstops': 3
        }
      ],
      editcargoobj: {
        'id': '',
        'name': 'Default',
        'weight': '1',
        'destination': {
          'title': 'Destination',
          'address': '',
          'city': '',
          'state': '',
          'zip': '',
          'lat': '',
          'long': ''
        }
      },
      edittruckobj: {
        'id': '',
        'name': 'Default',
        'maxweight': 1,
        'maxrange': 100,
        'maxstops': 5
      }
    }
  },
  methods: {
    closeCargo: function () {
      this.editCargoActive = false
    },
    newCargo: function () {
      let key = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
      let cargoModel = {
        'id': key,
        'name': 'New Cargo',
        'weight': '1',
        'destination': {
          'title': 'Destination',
          'address': '',
          'city': '',
          'state': '',
          'zip': '',
          'lat': '',
          'long': ''
        }
      }
      this.cargo.push(cargoModel)
    },
    editCargo: function (obj) {
      this.editCargoActive = !this.editCargoActive
      this.editcargoobj = obj
    },
    deleteCargo: function (item) {
      for (let i = 0; i < this.cargo.length; i++) {
        if (this.cargo[i] === item) {
          this.$delete(this.cargo, i)
          return false
        }
      }
    },
    closeTruck: function () {
      this.editTruckActive = false
    },
    newTruck: function () {
      let key = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
      let truckModel = {
        'id': key,
        'name': 'New Truck',
        'maxweight': 100,
        'maxrange': 1,
        'maxstops': 1
      }
      this.trucks.push(truckModel)
    },
    editTruck: function (obj) {
      this.editTruckActive = !this.editTruckActive
      this.edittruckobj = obj
    },
    deleteTruck: function (item) {
      for (let i = 0; i < this.trucks.length; i++) {
        if (this.trucks[i] === item) {
          this.$delete(this.trucks, i)
          return false
        }
      }
    },
    truckName: function (id) {
      if (!id) return ''
      for (let i = 0; i < this.trucks.length; i++) {
        if (this.trucks[i].id === id) {
          return this.trucks[i].name
        }
      }
    },
    truckStops: function (id) {
      if (!id) return ''
      for (let i = 0; i < this.trucks.length; i++) {
        if (this.trucks[i].id === id) {
          return this.trucks[i].maxstops
        }
      }
    },
    stopsClass: function (routeStops, truckId) {
      const truck = this.trucks.filter(item => item.id === truckId)
      if (routeStops > truck[0].maxstops) {
        return 'text-danger'
      }
    },
    truckRange: function (id) {
      if (!id) return ''
      for (let i = 0; i < this.trucks.length; i++) {
        if (this.trucks[i].id === id) {
          return this.trucks[i].maxrange
        }
      }
    },
    truckWeight: function (id) {
      if (!id) return ''
      for (let i = 0; i < this.trucks.length; i++) {
        if (this.trucks[i].id === id) {
          return this.trucks[i].maxweight
        }
      }
    },
    weightClass: function (routeWeight, truckId) {
      const truck = this.trucks.filter(item => item.id === truckId)
      if (routeWeight > truck[0].maxweight) {
        return 'text-danger'
      }
    },
    cargoReadyCount: function () {
      const obj = this.cargo.filter(item => item.truck)
      return obj.length
    },
    routesReadyCount: function () {
      const obj = this.routes.filter(item => item.cargo.length)
      return obj.length
    },
    createRoutes: function () {
      this.routes = []
      for (let i = 0; i < this.trucks.length; i++) {
        let key = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
        let routeModel = {
          'id': key,
          'truckId': this.trucks[i].id,
          'weight': 0,
          'stops': 0,
          'range': 0,
          'cargo': []
        }
        this.routes.push(routeModel)
      }
      this.updateRoutes()
    },
    updateRoutes: function () {
      console.log('updateRoutes')
      for (let i = 0; i < this.routes.length; i++) {
        this.routes[i].cargo = []
        this.routes[i].stops = 0
        this.routes[i].weight = 0
      }
      const readyCargo = this.cargo.filter(item => item.truck)
      for (let i = 0; i < readyCargo.length; i++) {
        for (let r = 0; r < this.routes.length; r++) {
          if (this.routes[r].truckId === readyCargo[i].truck) {
            this.routes[r].stops++
            this.routes[r].weight = this.routes[r].weight + readyCargo[i].weight
            this.routes[r].cargo.push(readyCargo[i])
          }
        }
      }
    }
  },
  mounted () {
    this.createRoutes()
  },
  watch: {
    cargo: {
      handler (val) {
        this.updateRoutes()
      },
      deep: true
    },
    trucks: {
      handler (val) {
        this.createRoutes()
      },
      deep: true
    }
  }
})

require('./assets/css/fontawesome.css')
require('./assets/css/bootstrap.min.css')
require('./assets/css/dash.css')
