<template>
    <div id="addProfile" class="modal-card">
        <section class="modal-card-body">
            <b-field>
                <b-input type="text" id="name" placeholder="이름"></b-input>
            </b-field>

            <b-field>
                <b-input type="text" placeholder="닉네임" id="nickName"></b-input>
            </b-field>

            <b-field>
                <textarea class="textarea" placeholder="자기소개" id="self"></textarea>
            </b-field>
            <b-field>
                <button class="button" value="수정" v-on:click="addInfo()">수정</button>
            </b-field>
        </section>


    </div>

</template>

<script>
import firebase from 'firebase'
import BField from "buefy/src/components/field/Field";
import BFieldBody from "buefy/src/components/field/FieldBody";
import BInput from "buefy/src/components/input/Input";

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
        BInput,
        BFieldBody,
        BField,
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
