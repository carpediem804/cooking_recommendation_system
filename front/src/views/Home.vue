<template>
  <div class="home">
    <talk></talk>
  </div>
</template>

<script>
// @ is an alias to /src
import talk from '../components/talk'
export default {
  name: 'home',
  components: {
      talk
  },
    data(){
      return{
      }
    },
}
</script>
