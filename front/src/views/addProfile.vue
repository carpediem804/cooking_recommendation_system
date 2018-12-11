<template>
    <div id="addProfile" class="modal-card" style="width:300px">
        <div class="modal-card-head">
            <p>프로필 변경</p>
        </div>
        <section class="modal-card-body">
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
                nickName:document.getElementById('nickName').value,
            })
            }
            alert('변경사항이 저장되었습니다.')
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
