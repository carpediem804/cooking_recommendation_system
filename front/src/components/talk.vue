<template>
<div id="talk" style="margin-top: 20px">
    <div class="tile is is-ancestor is-6" style="margin: auto;">
        <div class="tile is-vertical">
            <div class="tile">
                <article class="tile notification is-warning">
                    한줄 토크의 모든 내용을 볼 수 있어요.
                    <router-link to="/" exact>새로고침</router-link>
                </article>
            </div>
            <div class="tile notification" v-for="(item,idx) in list">
                <article class="media" style="width: 100%"> <!-- v-for 적용 -->
                    <figure class="media-left"> <!--사진-->
                        <p class="image is-128x128">
                            <img width="parent" height="auto" v-bind:src=$url(item.image)>
                            <b></b>
                        </p>
                    </figure>
                    <div class="media-content">
                        <div class="content">
                            <b-field-body style="background-color: lightyellow; height:30">
                                <textarea class="textarea" readonly>{{item.title}}</textarea>
                            </b-field-body>
                        </div>
                        <nav class="navbar-menu"><!-- 이름,댓글,좋아요 -->
                            <b-field>
                                <b></b>
                            </b-field>

                        </nav>
                    </div>
                </article>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import BField from "buefy/src/components/field/Field";
    import BFieldBody from "buefy/src/components/field/FieldBody";
    import BIcon from "buefy/src/components/icon/Icon";
    export default{
        name:'',
        components: {BIcon, BFieldBody, BField},
        data(){
            return{
                list:[],
                items:[]
            }
        },
        methods:{
            like:function(item){
                console.log(this.$store.state.user)
                this.$http.post('http://localhost:8000/like/',{
                    heart:item.heart,
                    id : item._id,
                    uid:this.$store.state.user.uid
                }).then((res)=>{
                    if(res.data=="reject")
                    {
                        alert("이미 추천하셨습니다.")
                        this.$http.get("http://localhost:8000/upload/img").then((res)=>{
                            this.list = res.data.bloglist;
                            console.log(this.list)
                            for(let i=0;i<this.list.length;i++)
                            {
                                this.list[i].image='http://localhost:8000/'+this.list[i].image;
                            }
                        })
                    }
                    else
                    {
                        this.$http.get("http://localhost:8000/upload/img").then((res)=>{
                            this.list = res.data.bloglist;
                            console.log(this.list)
                            for(let i=0;i<this.list.length;i++)
                            {
                                this.list[i].image='http://localhost:8000/'+this.list[i].image;
                            }
                        })
                        alert("추천하셨습니다")
                    }
                })
               // this.reList()
            },
            reList:function () {
                this.$http.get("http://localhost:8000/upload/userThink").then((res)=>{
                    this.list = res.data.snslist;
                    for(let i=0;i<this.list.length;i++)
                    {
                        if(res.data.snslist[i].title!=='')
                        {
                            this.list[i].image='http://localhost:8000/'+this.list[i].image;
                        }
                    }
                })
            }
        },
        created(){
            this.$http.get('http://localhost:8000/upload/userThink').then((res)=>{
                for(let i=res.data.snslist.length;i>0;i--)
                {
                    if(res.data.snslist[i-1].title!=='')
                    {
                        this.list.push(res.data.snslist[i-1])
                    }
                }

                for(let i=0;i<this.list.length;i++)
                {
                    this.list[i].image='http://localhost:8000/'+this.list[i].image;
                }
            })
        },
    }
</script>

