<template>
<div id='login'>

    <form id="log_form" @click.self="$emit('update:showModal',false)" autocomplete="off"><!--v-show="showModal"-->
        <h2>로그인</h2>
        <div>
            <input type="text" id="user_email" placeholder="이메일">
        </div>
        <div>
            <input type="password" id="user_password" placeholder="비밀번호">
        </div>
        <input type="button" value="로그인" v-on:click="login()">
        <div>
            <input type="button" value="취소" v-on:click="$emit('update:showModal',!showModal)">
        </div>
        <div>
            <a href="#">아이디 찾기</a>
            <span> | </span>
            <a href="#">비밀번호 찾기</a>
            <span> | </span>
            <a href="/signUp">회원가입</a>
        </div>
        <div>
            <input type="button" value="로그아웃" v-on:click="logout()">
        </div>
    </form>


</div>
</template>

<script>
import firebase from 'firebase'

export default{
    name:'login',
    props:{
        showModal:false,
    },
    data(){
        return{
            email:'',
            password:'',
        }
    },
    methods:{
        login:function(){
            this.email=document.getElementById("user_email").value
            this.password=document.getElementById("user_password").value
            firebase.auth().signInWithEmailAndPassword(this.email,this.password).catch(function(err){
                switch(err.code)
                {
                    case "auth/invalid-email": {
                        alert('유효하지 않은 메일입니다');
                        break;
                    }
                    case "auth/wrong-password":{
                        alert('잘못된 패스워드 입니다.');
                        break;
                    }
                }
            }).then(()=>{
                this.$store.state.user=firebase.auth().currentUser
            })

        },
        logout:function(){
            firebase.auth().signOut().catch(function(err){
                alert(err)
            }).then(()=>{
                this.$store.state.user={}
                alert("로그아웃")
                window.location.reload(true)
            })
        }
    }
}
</script>

<style>
#log_form{
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    background: azure;
    padding: 1rem;
    border-radius: 1rem;
    border: 1px solid gray;

}
#log_form div a{
    text-decoration: none;
    color: black;
}
</style>
