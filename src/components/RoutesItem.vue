<template>
  <div class="row">
    <div class="col-12" v-for="item in $root.routes" v-bind:routes="item" v-bind:key="item.id">
      <div style="background: #fdfdfd; padding: 1rem; border-radius: 1rem;">
        <h4 class="text-info">{{ $root.truckName(item.truckId) }}</h4>
        <div class="row">
          <div class="col-4">
            <ul class="small">
              <li v-bind:class="$root.stopsClass(item.stops, item.truckId)"><strong>Stops:</strong> {{item.stops}} of {{ $root.truckStops(item.truckId) }}</li>
              <li v-bind:class="$root.rangeClass(item.range, item.truckId)"><strong>Range:</strong>  {{item.range}} of {{ $root.truckRange(item.truckId) }} miles</li>
              <li v-bind:class="$root.weightClass(item.weight, item.truckId)"><strong>Weight:</strong> {{item.weight}} of {{ $root.truckWeight(item.truckId) }} lbs</li>
            </ul>
          </div>
          <div class="col-4">
            <ul class="small">
              <li>
                <strong>Headquarters:</strong> {{ $root.truckHq(item.truckId) }}
              </li>
            </ul>
          </div>
        </div>
        <div class="px-4 mt-4" v-if="item.cargo.length">
          <p><strong>Cargo:</strong></p>
          <table class="table">
            <thead>
              <tr><th>Name</th><th>Weight</th><th>Destination</th></tr>
            </thead>
            <tbody>
            <tr v-for="cargo in item.cargo" v-bind:cargo="cargo" v-bind:key="cargo.id">
              <td>{{cargo.name}}</td>
              <td>{{cargo.weight}}</td>
              <td>
                {{cargo.title}}
                <br />
                {{cargo.range}}
              </td>
            </tr>
            <tr>
              <td></td>
              <td>0</td>
              <td>
                Back to Headquarters
                <br />
                {{item.rangeback}}
              </td>
            </tr>
            </tbody>
           </table>
          </div>
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
