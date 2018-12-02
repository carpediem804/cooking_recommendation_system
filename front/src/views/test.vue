<template>
  <div class="test">
    
  </div>
</template>

<script>
import Ingredient from '@/components/Ingredient.vue'
import firebase,{ functions } from 'firebase'

  export default{
    name:'test',
    components:{
      firebase
    },
    methods:{
      readDb:function(){
        var db=firebase.firestore();
        db.collection('users').doc('1').get().then((doc)=>{
          console.log(doc.data().name)
        })//db에서 읽는법

        db.collection('users').doc('2').set({
          name:'test2'
        }).then(function(){
          console.log('success')
        }).catch(function(err){
          console.log(err)
        })
      }
    }
  }
</script>