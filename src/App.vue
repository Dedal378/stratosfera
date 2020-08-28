<template>
  <div id="app">
    <app-aside></app-aside>
    <app-header></app-header>
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader.vue'
  import AppAside from './components/AppAside'

  export default {
    name: 'App',
    components: {
      AppHeader,
      AppAside,
    },
  }
</script>

<style lang="scss">
  #app {
    display: flex;
    text-align: center;
    position: relative;

    .active {
      display: block;
    }
  }

  @media (max-width: 930px) {
    #app {
      flex-wrap: wrap;
      flex-direction: column;
    }
  }
</style>
