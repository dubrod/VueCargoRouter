<template>
  <div class="row">
    <div class="col-4" v-for="item in $root.cargo" v-bind:cargo="item" v-bind:key="item.id">
      <div class="box-grid_item">
        <h5><i class="fas fa-box-open"></i> <strong>{{item.name}}</strong></h5>
        <p>
          <small>
            <em>WEIGHT:</em> {{item.weight}}lbs<br />
            <em>DESTINATION:</em><br />
            {{item.destination.title}}<br />
            {{item.destination.address}} {{item.destination.city}} {{item.destination.state}} {{item.destination.zip}}
          </small>
          <small class="bg-info text-white d-block p-1" v-if="item.truck">
            <strong>TRUCK:</strong> {{ $root.truckName(item.truck) }}
          </small>
          <small class="bg-warning text-white d-block p-1" v-else>
            <strong>TRUCK:</strong> Not Assigned
          </small>
        </p>
        <div class="box-grid_btns">
          <button v-on:click="$root.editCargo(item)"><i class="fas fa-pen-square"></i> EDIT</button>
          <button v-on:click="$root.deleteCargo(item)" class="delete"><i class="fas fa-trash"></i> DELETE</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CargoItem'
}
</script>
