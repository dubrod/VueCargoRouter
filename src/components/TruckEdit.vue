<template>
  <section class="edit-panel" v-bind:class="{ active: $root.editTruckActive }">
    <div class="edit-panel_header">
      <h3 class="m-0 p-0"><span>Edit:</span> <button v-on:click="$root.closeTruck()" class="btn btn-sm btn-secondary float-right"><i class="fas fa-clsoe"></i>X</button></h3>
    </div>
    <hr />
    <form>
      <div class="form-group">
        <label>Name: </label>
        <input type="text" name="" class="form-control" v-model="$root.edittruckobj.name">
      </div>
      <div class="form-group">
        <label>Max Weight:</label>
        <input type="text" name="" class="form-control" v-model="$root.edittruckobj.maxweight">
      </div>
      <div class="form-group">
        <label>Max Range:</label>
        <input type="text" name="" class="form-control" v-model="$root.edittruckobj.maxrange">
      </div>
      <div class="form-group">
        <label>Max Stops:</label>
        <input type="text" name="" class="form-control" v-model="$root.edittruckobj.maxstops">
      </div>
      <br><br>
    </form>
  </section>
</template>

<script>
export default {
  name: 'TruckEdit'
}
</script>

<style scoped>
h3{display: block;width:100%;}
</style>
