<template>
  <div id="app" class="">
    <app-aside />
    <!--<app-header />-->
    <mob-menu />
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader.vue'
  import AppAside from './components/AppAside'
  import MobMenu from './components/MobMenu'

  export default {
    name: 'App',
    components: {
      // eslint-disable-next-line vue/no-unused-components
      AppHeader,
      AppAside,
      MobMenu,
    }
  }
</script>

<style lang="scss">
  #app {
    display: flex;
    text-align: center;
  }

  @media (max-width: 930px) {
    #app {
      flex-wrap: wrap;
      flex-direction: column;
    }

  }
</style>
