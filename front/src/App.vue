<template>
  <div id="app" class="container is-fluid">
    <div id="nav">
      <div>
        <div class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item" href="/">home</a>
            <button class="button is-primary is-normal" v-if="!loggedIn" @click="loginPop=true">login</button>

            <b-modal :active.sync="loginPop" has-modal-card>
              <login></login>
            </b-modal>

            <button class="button is-link" v-if="loggedIn" v-on:click="logout()">logout</button>
          </div>
        </div>
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
    import firebase from 'firebase'
    import BModal from "buefy/src/components/modal/Modal";
    import login from './components/Login.vue'
    export default {
        components: {
            BModal,
            'app-header': header,
            firebase,
            login
        },
        data () {
            return {
                loginPop:false,
            }
        },
        methods: {
            logout:function(){
                firebase.auth().signOut().catch(function(err){
                    alert(err)
                }).then(()=>{
                    localStorage.clear()
                    this.$store.state.user={}
                    this.$store.state.loggedIn=false
                    alert("로그아웃")
                })
            }
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
  color: black;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
