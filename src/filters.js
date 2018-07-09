import Vue from 'vue'

Vue.filter('itemName', function (id) {
  if (!id) return ''
  for (var i = 0; i < $root.trucks.length; i++) {
    if ($root.trucks[i].id === id) {
      return $root.trucks[i].name
    }
  }
})
