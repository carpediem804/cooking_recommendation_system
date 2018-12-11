<template>
<div id="talk">
    <div class="tile is is-ancestor is-7" style="margin: auto;">
        <div class="tile is-vertical">
            <div class="tile">
                <article class="tile notification is-warning">
                    토크의 전체 글을 볼 수 있어요.
                    <a class="navbar-end" @click="reList()">새로고침</a>
                </article>
            </div>
            <div class="tile notification" v-for="(item,idx) in list">
                <article class="media" style="width: 100%"> <!-- v-for 적용 -->
                    <figure class="media-left"> <!--사진-->
                        <p class="image is-128x128">
                            <img src="../../public/cook-image/1.jpg">
                        </p>
                    </figure>
                    <div class="media-content">
                        <nav class="navbar-menu"><!-- 이름,댓글,좋아요 -->
                            <b-field>
                                <b>{{item.authorname}}</b>
                            </b-field>
                            <div class="navbar-end">
                                <a class="navbar-item" @click="like(item)">좋아욧!:{{item.heart}}</a>
                                <a class="navbar-item" @click="">댓글</a>
                            </div>

                        </nav>
                        <div class="content" style="background-color: white;">

                            <b-field-body>
                                {{item.body}}
                            </b-field-body>
                            <b-field>
                                <img width="parent" height="parent" v-bind:src=$url(item.image)>
                            </b-field>
                        </div>
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
                list:{},
            }
        },
        methods:{
            like:function(item){
                this.$http.get('http://localhost:8000/like',{
                    heart:item._id
                }).then((res)=>{
                    this.list = res.data.bloglist;
                    for(let i=0;i<this.list.length;i++)
                    {
                        this.list[i].image='http://localhost:8000/'+this.list[i].image;
                    }
                })
            },
            reList:function () {
                this.$http.get("http://localhost:8000/upload/img").then((res)=>{
                    this.list = res.data.bloglist;
                    for(let i=0;i<this.list.length;i++)
                    {
                        this.list[i].image='http://localhost:8000/'+this.list[i].image;
                    }
                })
            }
        },
        created(){
            this.$http.get("http://localhost:8000/upload/img").then((res)=>{
                this.list = res.data.bloglist;
                console.log(this.list)
                for(let i=0;i<this.list.length;i++)
                {
                    this.list[i].image='http://localhost:8000/'+this.list[i].image;
                }
            })
        },
    }
</script>

