<template>
    <div id="SignUp">
        <h2>회원가입</h2>
        <form id="sign_form" autocomplete="off" method="POST" action="#">
            <div>
                <input v-model="email" type="text" id="user_email" placeholder="이메일">
            </div>
            <div>
                <input v-model="password" id="user_pwd" type="password" placeholder="비밀번호">
            </div>
            <div>
                <input type="password" id="pwd_check" placeholder="비밀번호확인">
            </div>
            <input type="button" value="회원가입" v-on:click="signUp()">
        </form>
    </div>
</template>

<script>
import firebase from 'firebase'

export default{
    name:"SignUp",
    data(){
        return{
            email:'',
            password:'',
        }
    },
    methods:{
        signUp:function(){
            let db=firebase.firestore();

            console.log(document.getElementById('user_pwd').value)
            console.log(document.getElementById('pwd_check').value)
            if(document.getElementById('user_pwd').value===document.getElementById('pwd_check').value)
            {
                firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
                .then((user)=>{
                    db.collection('users').doc(document.getElementById('user_email').value).set({
                        name:'',
                        nickName:'',
                        sex:'',
                        super:0
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