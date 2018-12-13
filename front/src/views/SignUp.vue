<template>
    <div id="SignUp">
        <section class="modal-card" style="width:300px">
            <div class="modal-card-body">
                <b-field label="이메일" type="is-danger">
                    <b-input type="email" v-model="email" id="user_email" maxlength="30" autocomplete="off"></b-input>
                </b-field>

                <b-field label="이름" type="is-success">
                    <b-input  v-model="name" id="name" maxlength="30" autocomplete="off"></b-input>
                </b-field>

                <b-field label="닉네임" message="글 작성시 닉네임이 표시됩니다">
                    <b-input id="nickName" maxlength="30" autocomplete="off"></b-input>
                </b-field>

                <b-field label="비밀번호">
                    <b-input type="password" v-model='password' id="user_pwd" password-reveal></b-input>
                </b-field>
                <b-field label="비밀번호 확인">
                    <b-input type="password" id="pwd_check" password-reveal></b-input>
                </b-field>
                <div id="sex-center" class="has-text-centered">
                    <b-radio name="sex" native-value="male" id="male">남자</b-radio>
                    <b-radio name="sex" native-value="female" id="female">여자</b-radio>
                </div>
                <b-field class="has-text-centered">
                    <input class="button is-link" type="button" value="회원가입" v-on:click="signUp()">
                </b-field>
            </div>


        </section>

    </div>
</template>

<script>
import firebase from 'firebase'
import BField from "buefy/src/components/field/Field";
import BInput from "buefy/src/components/input/Input";
import BRadio from "buefy/src/components/radio/Radio";

export default{
    name:"SignUp",
    components: {BRadio, BInput, BField},
    data(){
        return{
            name:'',
            email:'',
            password:'',
            dbData:{},
            test:''
        }
    },
    methods:{
        signUp:function(){
            let db=firebase.firestore();

            if(document.getElementById('user_pwd').value===document.getElementById('pwd_check').value)
            {
                firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
                .then((user)=>{
                    db.collection('users').doc(document.getElementById('user_email').value).set({
                        name:document.getElementById('name').value,
                        nickName:document.getElementById('nickName').value,
                        sex:document.querySelector('input[name="sex"]:checked').value,
                        super:0,
                        pwd:document.getElementById('user_pwd').value,
                        uid:user.user.uid
                    })

                    this.$http.post('http://54.190.129.64:8000/signup',{
                        params:{
                            name:document.getElementById('name').value,
                            nickName:document.getElementById('nickName').value,
                            sex:document.querySelector('input[name="sex"]:checked').value,
                            super:0,
                            pwd:document.getElementById('user_pwd').value,
                            uid:user.user.uid
                        }
                    }).then((res)=>{

                    })

                    alert('회원가입 완료')
                    this.$parent.close();
                })
                .catch((err)=>{
                    switch(err.code){
                        case "auth/invalid-email": {
                            alert('유효하지 않은 메일입니다');
                            break;
                        }
                        case "auth/wrong-password":{
                            alert('잘못된 패스워드 입니다.');
                            break;
                        }
                    }
                })
            }
            else
            {
                alert('비밀번호가 맞지 않습니다')
            }
        }
    }
}
</script>

<style>
#SignUp{
    display:inline-block;
}
    #sex-center{
        margin:auto;
        margin-bottom: 10px;
    }
</style>
