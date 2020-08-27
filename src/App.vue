<template>
  <div id="app" class="">
    <app-aside />
    <app-header />
    <!--<mob-menu />-->
    <!--<mob-catalog />-->
    <!--<mob-catalog-electric />-->
    <mob-about />
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader.vue'
  import AppAside from './components/AppAside'
  import MobMenu from './components/MobMenu'
  import MobCatalog from './components/MobCatalog'
  import MobCatalogElectric from './components/MobCatalogElectric'
  import MobAbout from './components/MobAbout'

  export default {
    name: 'App',
    components: {
      // eslint-disable-next-line vue/no-unused-components
      AppHeader,
      AppAside,
      // eslint-disable-next-line vue/no-unused-components
      MobMenu,
      // eslint-disable-next-line vue/no-unused-components
      MobCatalog,
      // eslint-disable-next-line vue/no-unused-components
      MobCatalogElectric,
      // eslint-disable-next-line vue/no-unused-components
      MobAbout,
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
