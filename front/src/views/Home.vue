<template>
  <div class="home">
    <log_form></log_form>
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
    firebase,
    log_form
  },
}
</script>
