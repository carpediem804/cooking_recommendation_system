<template>
    <div id="addProfile">
        <input type="text" placeholder="이름" id="name">
        <input type="text" placeholder="닉네임" id="nickName">
        <input type="radio" name='sex' id="male" value="male">남자
        <input type="radio" name='sex' id="female" value="female">여자
        <input type="button" value="등록" v-on:click="addInfo()">
    </div>
</template>

<script>
import firebase from 'firebase'

export default{
    name:'addProfile',
    methods:{
        addInfo:function(){
            let user=firebase.auth().currentUser
            var db=firebase.firestore();

            if(user===null)//로그인 상태가 아니면
            {
              alert('로그인ㄱㄱ')  
            }
            else
            {
                db.collection('users').doc(user.email).update({
                name:document.getElementById('name').value,
                nickName:document.getElementById('nickName').value,
                sex:document.querySelector('input[name="sex"]:checked').value
            })
            }

            db.collection('users').doc(user.email).get().then((doc)=>{
                alert(doc.data().sex)
            })   
        },
        /*db에서 읽는법
        readDb:function(){
        var db=firebase.firestore();
        db.collection('users').doc('1').get().then((doc)=>{
          console.log(doc.data().name)
        })
      }*/
    },
    data(){
        return{
            name:'',
            sex:''
        }
    },
    componenets:{
        firebase
    }
}
</script>