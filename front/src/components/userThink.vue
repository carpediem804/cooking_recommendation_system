<template>
    <div style="margin-top: 10px" v-if="this.$store.state.loggedIn">
        <div class="tile">
            <div class="tile is-5" style="margin: auto">
                <div class="card" style="width: 100%">
                    <div class="card-header">
                        <p class="card-header-title">한줄 토크</p>
                    </div>
                    <div class="card-body">

                        <article class="media" style="margin-top: 10px;">
                            <div class="media-left" style="margin: auto">
                                <p>
                                    <img width="128" height="128" v-bind:src=$url(img)><!-- 유저이미지 -->

                                    <div class="has-text-centered">
                                        <b>{{nickName}}</b>
                                    </div>
                                </p>
                            </div>
                            <div class="media-content">
                                <textarea class="textarea" v-model="body" placeholder="무슨 생각을 하고계세요?"></textarea>
                            </div>
                        </article>
                    </div>
                    <div class="card-footer">
                        <button class="button navbar-end" @click="postThink()">작성하기</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import firebase from 'firebase'
    export default{
        name:'userThink',
        data(){
            return{
                body:'',
                nickName:'',
                img:'',
            }
        },
        methods:{
            postThink:function() { //행님 글 post 하는 함수인데 user 는 유저 정보를 body 는 글 내용을 보냅니다요

                this.$http.post('http://54.190.129.64:8000/upload/userThink',{
                    nickName:this.nickName,
                    uid:this.$store.state.user.uid,
                    content:this.body
                }).then((res)=>{
                    if(res.data)
                    {
                        alert("등록되었습니다")
                    }
                    else
                    {
                        alert("오류")
                    }
                })
            }
        },
        created() {
            firebase.firestore().collection('users').doc(this.$store.state.user.email).get().then((doc)=>{
                this.nickName=doc.data().nickName
            })
            this.$http.get('http://54.190.129.64:8000/upload/userThink').then((res)=>{
                for(let i=0;i<res.data.snslist.length;i++)
                {
                    if(res.data.snslist[i].user==this.$store.state.user.uid)
                    {
                        this.img='http://54.190.129.64:8000/'+res.data.snslist[i].image;
                        console.log(this.img)
                    }
                }
            })
        }
    }
</script>
