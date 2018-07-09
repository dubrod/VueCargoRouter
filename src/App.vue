<template>
  <div id="app">
    <button id="menuToggle">
      <span class="menu"></span>
    </button>
    <aside class="active" id="vueSidebar">
      <div id="asideHeader">
        <div class="text-white h4" style="padding: 6px 0 0 50px;">
          {{appName}}
        </div>
      </div>
      <ul>
        <li><router-link to="/"><i class="fas fa-chart-area"></i> &nbsp;<span>Dashboard</span></router-link></li>
        <li><router-link to="/cargo"><i class="fas fa-box-open"></i> &nbsp;<span>Cargo List</span></router-link></li>
        <li><router-link to="/trucks"><i class="fas fa-truck"></i> &nbsp;<span>Trucks List</span></router-link></li>
        <li><router-link to="/routes"><i class="fas fa-map-marked-alt"></i> &nbsp;<span>Routes</span></router-link></li>
      </ul>
    </aside>
    <main>
      <nav class="bg-white">
        <div class="p-1">
          <ul class="breadcrumb">
            <li class="breadcrumb-item">Dashboard</li>
          </ul>
        </div>
      </nav>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      appName: 'ShipRoutr'
    }
  }
}
</script>
