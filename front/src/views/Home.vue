<template>
  <div class="home">
  <showContent></showContent>
  </div>
</template>

<script>
// @ is an alias to /src
import showContent from '../components/showContent'
export default {
  name: 'home',
  components: {
      showContent
  },
    data(){
      return{
          user:''
      }
    },
}
</script>
