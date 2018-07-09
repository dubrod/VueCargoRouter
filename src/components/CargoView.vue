<template>
  <section class="container">
    <div class="mt-4 mb-4 p-3 bg-white rounded">
      <h1 class="p-1 h2"><span>Cargo List</span> <button v-on:click="$root.newCargo()" class="btn btn-primary float-right"><i class="fas fa-plus"></i> NEW</button></h1>
      <hr>
      <div class="container">
        <cargo-item></cargo-item>
      </div>
      <cargo-edit></cargo-edit>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CargoView'
}
</script>
