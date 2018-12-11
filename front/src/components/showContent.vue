<template>
<div class="modal-card" style="width:700px; margin:auto">
    대현행님 글작성 테스트 창입니다 원본 그대로 있습니다요
    <header class="modal-card-head">
        <b-input type="text" v-model.lazy="blog.title" style="width:100%" required placeholder="제목"></b-input>
    </header>
    <section class="modal-card-body">
        <div class="tile is-ancestor">
            <div class="tile is-vertical is-8">
                <div class="tile">
                    <article class="tile is-child">
                        사진
                        <div class="dropbox">
                            <input class="input-file" type="file" name="file"
                                   @change="upload($event.target.name, $event.target.files)"
                                   @drop="upload($event.target.name, $event.target.files)">
                            <div v-if="!imgFile">
                                <h2>파일을 드래그해서 드랍해주세요. </h2>
                            </div>
                            <div v-else>
                                <img :src="imgFile" />
                            </div>
                        </div>
                    </article>
                </div>
                <div class="tile">
                    <div class="content" style="width:100%;">
                        <strong>{{blog.author}}</strong> <small>({{this.$store.state.user.email}})</small> <!--유저 정보 -->
                        <br>
                        <label>내용:</label>
                        <textarea class="textarea" rows="10" v-model.lazy.trim="blog.content"></textarea>
                        <div id="checkboxes">
                            <p>Categories:</p>
                            <label>한식</label>
                            <input type="checkbox" value="한식" v-model="blog.categories" />
                            <label>중식</label>
                            <input type="checkbox" value="중식" v-model="blog.categories" />
                            <label>일식</label>
                            <input type="checkbox" value="일식" v-model="blog.categories" />
                            <label>양식</label>
                            <input type="checkbox" value="양식" v-model="blog.categories" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="tile">
                <article class="tile notification is-warning">
                    요리 재료 선택해서 태그 추가하는거??
                </article>
            </div>
        </div>
    </section>
    <footer class="modal-card-foot" style="width: 100%">
        <button class="button is-primary" style="margin: auto" v-on:click="post()">Add Blog</button>
    </footer>
    </div>

</template>

<script>

import BField from "buefy/src/components/field/Field";
import BInput from "buefy/src/components/input/Input";
import firebase from 'firebase'
import axios from 'axios'
export default{
    name:'showContent',
    components: {BInput, BField},
    data () {
        return {
            blog: {
                title: '',
                content: '',
                categories: [],
                author: '',
                file: ''

            },
            //authors: ['The Net Ninja', 'The Angular Avenger', 'The Vue Vindicator'],
            submitted: false
        }
    },
    methods: {
        post: function(){
            console.log("post 됨 ");
            axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
            let formData = new FormData();
            formData.append('file', this.file);
            console.log(this.blog.title);
            this.submitted = true;
            axios.post('http://localhost:8000/upload/img', formData,{
                params: {
                    title: this.blog.title,
                    bodycotent: this.blog.content,
                    category: this.blog.categories,
                    // blogId: this.$store.state.blogs.length + 1,
                    author : this.blog.author
                }

            }).then(function(data){
                //this.blog.blogId
                this.submitted = true;
                console.log("submitted가 true 됨 ")
                console.log(data);
                //this.submitted = true;
                //console.log(this.submitted);
            });
        },
        upload(name, files) {

            axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

            //  const formData = new FormData();
            //   formData.append(name, files[0], files[0].name);
            this.createImage(files[0]);

            this.file = files[0]
            let formData = new FormData()
            formData.append('file', this.file)
            /*
                            alert("upLoad 함수 실행" );

                                            axios.post(`http://localhost:8000/upload/img`, formData, {

                                                params: {
                                                    user: '5c0a4266e1f4750640b389ab',
                                                    title: this.blog.title,

                                                }

                                            }).catch(e => {
                                                    this.errors.push(e)
                                                })
            */

        },
        createImage(file) {
            var image = new Image();
            var reader = new FileReader();
            var vm = this;

            reader.onload = (e) => {
                vm.imgFile = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        test:function(){
            firebase.firestore().collection('users').doc(this.$store.state.user.email).get().then(doc=>{
                this.blog.author=doc.data().name
            })//행님 유저 정보 읽어오는 함수입니다
        }
    },
    mounted(){
        this.test()
    }

}

</script>
<style scoped>
    .dropbox {
        outline: 2px dashed #aaa;
        background: #7fb4dd;
        width: 300px;
        height: 300px;
        position: relative;
        margin: 0 auto;
    }
    .input-file{
        position: absolute;
        opacity: 0;
        width:100%;
        height:100%;
        top:0;
        left:0;
        z-index: 3;
    }
</style>
