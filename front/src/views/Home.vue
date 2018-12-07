<template>
  <div class="home">
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from 'firebase'
import login from '@/components/Login.vue'
import log_form from '@/components/LogForm.vue'
export default {
  name: 'home',
  components: {
    login,
  },
    data(){
      return{
          user:''
      }
    },
}
</script>
