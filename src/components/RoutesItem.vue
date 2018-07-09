<template>
  <div class="row">
    <div class="col-12" v-for="item in $root.routes" v-bind:routes="item" v-bind:key="item.id">
      <h4 class="text-info">{{ $root.truckName(item.truckId) }}</h4>
      <ul class="small">
        <li v-bind:class="$root.stopsClass(item.stops, item.truckId)"><strong>Stops:</strong> {{item.stops}} of {{ $root.truckStops(item.truckId) }}</li>
        <li><strong>Range:</strong>  {{item.range}} of {{ $root.truckRange(item.truckId) }} miles</li>
        <li v-bind:class="$root.weightClass(item.weight, item.truckId)"><strong>Weight:</strong> {{item.weight}} of {{ $root.truckWeight(item.truckId) }} lbs</li>
      </ul>
      <div class="px-4">
        <p><strong>Cargo:</strong></p>
        <table class="table" v-if="item.cargo.length">
          <thead>
            <tr><th>Name</th><th>Weight</th><th>Destination</th></tr>
          </thead>
          <tbody>
          <tr v-for="cargo in item.cargo" v-bind:cargo="cargo" v-bind:key="cargo.id">
            <td>{{cargo.name}}</td><td>{{cargo.weight}}</td><td>{{cargo.destination.title}}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoutesItem'
}
</script>
