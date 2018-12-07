<template>
    <div id="addProfile">
        <div>
            <input type="text" placeholder="이름" id="name">
        </div>

        <div>
            <input type="text" placeholder="닉네임" id="nickName">
        </div>

        <div>
            <input type="radio" name='sex' id="male" value="male">남자
            <input type="radio" name='sex' id="female" value="female">여자
        </div>
        <input type="button" value="수정" v-on:click="addInfo()">
    </div>
</template>

<script>
import firebase from 'firebase'

export default{
    name:'addProfile',
    methods:{
        addInfo:function(){
            let user=this.$store.state.user
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
    components:{
        firebase
    },
    mounted(){
        (function(){
           let user=firebase.auth().currentUser;
           if(user==null)
           {
               alert("로그인부터 ㄱㄱ")
               window.location.href="/"
           }
        })()
    }
}
</script>
