<template>
    <div id="addProfile" class="modal-card" style="width:300px">
        <div class="modal-card-head">
            <p>프로필 변경</p>
        </div>
        <section class="modal-card-body" >
            <b-field>
                <div class="dropbox">
                    <input class="input-file" type="file" name="file"
                           @change="upload($event.target.name, $event.target.files)"
                           @drop="upload($event.target.name, $event.target.files)">
                    <div class="content has-text-centered" v-if="!imageUp">
                        <i class="fas fa-image fa-3x"></i>
                    </div>
                    <div v-else>
                        <img :src="imgFile" />
                    </div>
                </div>

            </b-field>
            <div v-if="dropFiles">
                <span class="file-name">
                    {{ dropFiles.name }}
                </span>
            </div>
            <b-field>
                <b-input type="text" placeholder="닉네임" vmodel="nickName" id="nickName"></b-input>
            </b-field>
            <b-field class="has-text-centered">
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
import axios from 'axios'
import BUpload from "buefy/src/components/upload/Upload";

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

            axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
            let formData = new FormData();
            formData.append('file', this.file);
            axios.post('http://localhost:8000/upload/userimg', formData,{
                params: {
                        uid : this.$store.state.user
                }}).then((res)=>{
                if(res.data)
                {
                    alert("수정되었습니다")
                }
                else
                {
                    alert("수정 실패")
                }
            });

        },
        upload(name, files) {

            axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

            //  const formData = new FormData();
            //   formData.append(name, files[0], files[0].name);
            this.createImage(files[0]);
            console.log(files)
            this.file = files[0]
            let formData = new FormData()
            formData.append('file', this.file)
            this.imageUp=true

        },
        createImage(file) {
            var image = new Image();
            var reader = new FileReader();
            var vm = this;

            reader.onload = (e) => {
                vm.imgFile = e.target.result;
            };
            reader.readAsDataURL(file);
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
            nickName:'',
            sex:'',
            dropFiles:null,
            imageUp:false
        }
    },
    components:{
        BUpload,
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
    },
}
</script>

<style>
    .dropbox {
        outline: 2px dashed #aaa;
        background: #7fb4dd;
        width: 100px;
        height: 100px;
        position: relative;
        margin: 0 auto;
    }
    .input-file{
        position: absolute;
        opacity: 0;
        width:100%;
        height:100%;
        top:0;
        left:0;
        z-index: 3;
    }
</style>
