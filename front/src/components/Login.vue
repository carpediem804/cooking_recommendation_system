<template>
<div>
    <div class="modal-card" id="log_form">
        <header class="modal-card-head"><h2 class="modal-card-title">로그인</h2></header>
        <section class="modal-card-body">
            <b-field>
                <b-input type="text" id="user_email" placeholder="이메일" autocomplete="off"></b-input>
            </b-field>
            <b-field>
                <b-input type="password" id="user_password" placeholder="비밀번호"></b-input>
            </b-field>
        </section>
        <footer class="modal-card-foot">
            <b-field id="button_center">
                <button class="button is-link" type="button" value="로그인" v-on:click="login()">로그인</button>
                <button class="button" type="button" @click="$parent.close()">취소</button>
            </b-field>
        </footer>
    </div>

</div>
</template>

<script>
import firebase from 'firebase'
import BField from "buefy/src/components/field/Field";
import BInput from "buefy/src/components/input/Input";

export default{
    name:'login',
    components: {BField,BInput},
    props:{
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
            }).then((res)=>{
                let user=res.user
                this.$store.state.user=res.user
                this.$store.state.loggedIn=true
                localStorage.setItem('newUser',JSON.stringify(user))
                localStorage.setItem('logState',this.$store.state.loggedIn)
                alert("로그인")
            })

        },
        logout:function(){
            firebase.auth().signOut().catch(function(err){
                alert(err)
            }).then(()=>{
                localStorage.clear()
                this.$store.state.user={}
                this.$store.state.loggedIn=false
                alert("로그아웃")
                window.location.reload(true)
            })
        }
    }
}
</script>

<style scoped>
    #log_form{
        margin:auto;
        width:250px;
    }
    #button_center{
        margin:auto;
    }
</style>
