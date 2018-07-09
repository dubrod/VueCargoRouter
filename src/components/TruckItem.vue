<template>
  <div class="row">
    <div class="col-4" v-for="item in $root.trucks" v-bind:trucks="item" v-bind:key="item.id">
      <div class="box-grid_item">
        <h5><i class="fas fa-truck"></i> <strong>{{item.name}}</strong></h5>
        <p>
          <small>
            <em>MAX WEIGHT:</em> {{item.maxweight}}lbs<br />
            <em>MAX RANGE:</em> {{item.maxrange}} Miles<br />
            <em>MAX STOPS:</em> {{item.maxstops}}
          </small>

        </p>
        <div class="box-grid_btns">
          <button v-on:click="$root.editTruck(item)"><i class="fas fa-pen-square"></i> EDIT</button>
          <button v-on:click="$root.deleteTruck(item)" class="delete"><i class="fas fa-trash"></i> DELETE</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TruckItem'
}
</script>
