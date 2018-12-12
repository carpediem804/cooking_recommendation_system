<template>
    <div>
        <div class="tile">
            <div class="tile is-6" style="margin: auto">
                <div class="card" style="width: 100%">
                    <div class="card-header">
                        <p class="card-header-title">한줄 토크</p>
                    </div>
                    <div class="card-body">

                        <article class="media" style="margin-top: 10px;">
                            <div class="media-left">
                                <p class="image is-128x128">
                                    <img src="../../public/cook-image/1.jpg"><!-- 유저이미지 -->
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
                img:''
            }
        },
        methods:{
            postThink:function() { //행님 글 post 하는 함수인데 user 는 유저 정보를 body 는 글 내용을 보냅니다요
                firebase.firestore().collection('users').doc(this.$store.state.user.email).get().then((doc)=>{
                    this.nickName=doc.data().nickName
                })

                this.$http.post('http://localhost:8000/upload/userThink',{
                    nickName:this.nickName,
                    uid:this.$store.state.user.uid,
                    body:this.body
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
        }
    }
</script>
