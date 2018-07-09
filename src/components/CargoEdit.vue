<template>
  <section class="edit-panel" v-bind:class="{ active: $root.editCargoActive }">
    <div class="edit-panel_header">
      <h3 class="m-0 p-0"><span>Edit:</span> <button v-on:click="$root.closeCargo()" class="btn btn-sm btn-secondary float-right"><i class="fas fa-clsoe"></i>X</button></h3>
    </div>
    <hr />
    <form>
      <div class="form-group">
        <label>Name: </label>
        <input type="text" name="" class="form-control" v-model="$root.editcargoobj.name">
      </div>
      <div class="form-group">
        <label>Weight:</label>
        <input type="text" name="" class="form-control" v-model="$root.editcargoobj.weight">
      </div>
      <div class="form-group">
        <label>Destination:</label>
        <input type="text" name="" class="form-control" v-model="$root.editcargoobj.destination.title">
      </div>
      <div class="form-group">
        <label>Assign to Truck:</label>
        <select v-model="$root.editcargoobj.truck" class="form-control">
          <option value="">Please Choose</option>
          <option v-for="option in $root.trucks" v-bind:value="option.id" v-bind:key="option.id">
            {{ option.name }}
          </option>
        </select>
      </div>
      <br><br>
    </form>
  </section>
</template>

<script>
export default {
  name: 'CargoEdit'
}
</script>

<style scoped>
h3{display: block;width:100%;}
</style>
