<template>
  <div class="log_form">
    <!--<div id="login" v-if="login_x === true">
      <input type="button" value="로그인" v-on:click="login_pop()">
      <login :showModal.sync="showModal"></login>
    </div>

    <div v-else>
      <input type="text" placeholder="로그인 완료" readonly>
      <div id="user">
        {{user_info.email}}
      </div>
      <input type="button" value="프로필 수정" v-on:click="goToProfile()">
      <input type="button" value="로그아웃" v-on:click="logout()">
    </div>-->
    <login></login>
    <div v-show="login_test==false">
      {{user_info.email}}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from 'firebase'
import login from '@/components/Login.vue'
export default {
  name: 'log_form',
  props:{
      login_test:''
  },
  data(){
    return{
      user:'',
      showModal:false,
      user_info:{
        email:'',
        name:''
      }
    }
  },
  components: {
    login,
    firebase
  },
  methods:{
    login_pop:function(){
      this.showModal=true;
    },
    login_state:function(){
      let user=firebase.auth().currentUser;
      if(user)
      {
        this.login_x=false;
        this.user_info.email=user.email
      }
      else{
        this.login_x=true;
      }
    },
    logout:function(){
      firebase.auth().signOut().then(function(){
        alert("로그아웃")
        window.location.reload(true)
      }).catch(function(err){
        alert(err)
      })
    },
      goToProfile:function(){
        window.location.href="/addProfile"
      }
  },
  created(){
    this.login_state()
  }
}
</script>

