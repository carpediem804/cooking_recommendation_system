<template>
  <div id="app">
    <div id="nav">
      <div>
      <app-header></app-header>
      <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
    // Imports
    import header from './components/header.vue';
    export default {
        components: {
            'app-header': header
        },
        data () {
            return {
            }
        },
        methods: {
        }
    }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
