<template>
  <div id="app" class="">
    <Aside />
    <Header />
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Aside from './components/Aside'

  export default {
    name: 'App',
    components: {
      Header,
      Aside
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
