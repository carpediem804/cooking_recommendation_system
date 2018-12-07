<template>
  <div id="app">
    <div id="nav">
      <div>
        <div v-if="loggedIn">
          아이디:{{this.$store.state.user.email}}
        </div>
        <div v-if="!loggedIn">
          로그인 ㄴㄴ
        </div>
      <app-header></app-header>
      <router-view></router-view>

      </div>
    </div>
  </div>
</template>
<script>
    // Imports
    import header from './components/header.vue';
    import { mapGetters } from 'vuex'
    export default {
        components: {
            'app-header': header
        },
        data () {
            return {
            }
        },
        methods: {
        },
        computed:{
            ...mapGetters({
                user:'user',
                loggedIn:'loggedIn'
            })
        },
        created(){
            let getUser=JSON.parse(localStorage.getItem('newUser'))
            let logState=JSON.parse(localStorage.getItem('logState'))
            if(logState !==false)
            {
                console.log(getUser)
                this.$store.state.loggedIn=logState
                this.$store.state.user=getUser
            }


        },
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
  color: white;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
