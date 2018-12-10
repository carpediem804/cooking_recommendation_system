<template>
    <div id="SignUp">
        <section>
            <b-field label="Email" type="is-danger" message="This email is invalid">
                <b-input type="email" v-model="email" id="user_email" maxlength="30"></b-input>
            </b-field>

            <b-field label="Username" type="is-success" message="This username is available">
                <b-input  v-model="name" id="name" maxlength="30"></b-input>
            </b-field>

            <b-field label="Nickname" type="is-success" message="This username is available">
                <b-input id="nickName" maxlength="30"></b-input>
            </b-field>

            <b-field label="Password">
                <b-input type="password" v-model='password' id="user_pwd" password-reveal></b-input>
            </b-field>
            <b-field label="Password Check">
                <b-input type="password" id="pwd_check" password-reveal></b-input>
            </b-field>
            <b-field>
                <b-radio name="sex" native-value="male" id="male">남자</b-radio>
                <b-radio name="sex" native-value="female" id="female">여자</b-radio>
            </b-field>
            <input class="button is-link" type="button" value="회원가입" v-on:click="signUp()">

        </section>



       <!-- <form id="sign_form" autocomplete="off" method="POST" action="#">
            <div>
                <input v-model="email" type="text" id="user_email" placeholder="이메일">
            </div>
            <div>
                <input v-model="password" id="user_pwd" type="password" placeholder="비밀번호">
            </div>
            <div>
                <input type="password" id="pwd_check" placeholder="비밀번호확인">
            </div>
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
            <input type="button" value="회원가입" v-on:click="signUp()">
        </form>-->
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
                        pwd:document.getElementById('user_pwd').value
                    })
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
                alert('회원가입 완료')
                window.location.href='/'
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
</style>
