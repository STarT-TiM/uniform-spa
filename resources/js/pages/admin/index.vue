<template>
  <div class="row">

    <div class="col-md-9">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'admin',
    middleware: 'auth',
  }
</script>

<style>
  .settings-card .card-body {
    padding: 0;
  }
</style>
