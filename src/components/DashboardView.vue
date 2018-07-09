<template>
  <section class="container">
    <div class="mt-4 mb-4 p-3 bg-white rounded">
      <h1 class="p-1 h2"><span>Overview</span></h1>
      <hr>
      <div class="container">
        <div class="row">
          <div class="col-4">
            <div class="p-4 text-center bg-light rounded">
              <h4 class="h1">{{$root.cargo.length}}</h4>
              <p>
                Cargo Items
              </p>
            </div>
          </div>
          <div class="col-4">
            <div class="p-4 text-center bg-light rounded">
              <h4 class="h1">{{$root.trucks.length}}</h4>
              <p>
                Trucks
              </p>
            </div>
          </div>
          <div class="col-4">
            <div class="p-4 text-center bg-light rounded">
              <h4 class="h1">{{$root.routesReadyCount()}}</h4>
              <p>
                Routes
              </p>
            </div>
          </div>
        </div>
        <div class="bg-info text-white p-2 rounded mt-3" v-if="$root.cargoReadyCount()">
          There are {{$root.cargoReadyCount()}} Cargo Items assigned and ready to forge routes.
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DashboardView'
}
</script>
