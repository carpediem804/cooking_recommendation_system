<template>
<div id="talk">
    <div class="tile is is-ancestor">
        <div class="tile is-vertical is-9">
            <div class="tile">
                <article class="tile notification is-warning">
                    토크의 전체 글을 볼 수 있어요.
                </article>
            </div>
            <div class="tile notification" v-for="item in list">
                <article class="media" style="width: 100%"> <!-- v-for 적용 -->
                    <figure class="media-left"> <!--사진-->
                        <p class="image is-128x128">
                            <img src="../../public/cook-image/1.jpg">
                        </p>
                    </figure>
                    <div class="media-content">
                        <nav class="navbar-menu">
                            <div class="navbar-end">
                                <a>좋아욧!</a>
                            </div>
                        </nav>
                        <div class="content" style="background-color: white;">
                            <b-field>
                                <h4>{{item.authorname}}</h4>
                            </b-field>
                            <b-field-body>
                                {{item.body}}
                            </b-field-body>
                            <b-field>
                                <img src="http://localhost:8000/file-1544187170205.jpg">
                            </b-field>
                        </div>
                    </div>
                </article>
            </div>
        </div>
        <div class="tile notification is-3 is-primary">

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
                list:{}
            }
        },
        methods:{

        },
        created(){
            this.$http.get("http://localhost:8000/upload/img").then((res)=>{
                this.list = res.data.bloglist;
            })
        },
    }
</script>

