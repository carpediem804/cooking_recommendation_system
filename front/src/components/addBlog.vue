<template>
    <div id="add-blog">
        <h2>게시판 글올리기</h2>
        <form v-if="!submitted">
            <label>제목:</label>
            <input type="text" v-model.lazy="blog.title" required />
            <label>내용:</label>
            <textarea v-model.lazy.trim="blog.content"></textarea>
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

            <label>Author: {{blog.author}}</label><!--유저 정보 읽어서 이름 뽑도록 수정-->
            <!--<select v-model="blog.author">
                <option v-for="author in authors">{{ author }}</option>
            </select>-->
            <hr />
            <button v-on:click.prevent="post">Add Blog</button>
        </form>
        <div v-if="submitted">
            <h3>Thanks for adding your post</h3>
        </div>
        <div id="preview">
            <h3>Preview</h3>
            <p>제목: {{ blog.title }}</p>
            <p>내용:</p>
            <p style="white-space: pre">{{ blog.content }}</p>
            <p>Categories:</p>
            <ul>
                <li v-for="category in blog.categories">{{ category }}</li>
            </ul>
            <p>Author: {{ blog.author }}</p>
        </div>
    </div>
</template>

<script>
    // Imports
    import firebase from 'firebase'
    import axios from 'axios'

    export default {
        data () {
            return {
                blog: {
                    title: '',
                    content: '',
                    categories: [],
                    author: '',
                    file: ''
                },
                authors: ['The Net Ninja', 'The Angular Avenger', 'The Vue Vindicator'],
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
                axios.post('http://localhost:8000/upload/img', formData,{
                    params: {
                        title: this.blog.title,
                        bodycotent: this.blog.content,
                        category: this.blog.categories,
                        blogId: this.$store.state.blogs.length + 1
                    }

                }).then(function(data){
                    console.log(data);
                    this.submitted = true;
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
                firebase.firestore().collection('users').doc(firebase.auth().currentUser.email).get().then(doc=>{
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
    #add-blog *{
        box-sizing: border-box;
    }
    #add-blog{
        margin: 20px auto;
        max-width: 500px;
    }
    label{
        display: block;
        margin: 20px 0 10px;
    }
    input[type="text"], textarea{
        display: block;
        width: 100%;
        padding: 8px;
    }
    #preview{
        padding: 10px 20px;
        border: 1px dotted #ccc;
        margin: 30px 0;
    }
    h3{
        margin-top: 10px;
    }
    #checkboxes input{
        display: inline-block;
        margin-right: 10px;
    }
    #checkboxes label{
        display: inline-block;
        margin-top: 0;
    }
    .dropbox {
        outline: 2px dashed #aaa;
        background: #7fb4dd;
        width: 300px;
        height: 300px;
        position: relative;
        margin: 0 auto;
    }
    img{
        width: 300px;
        height: 300px;
    }
    .dropbox > h2{
        position: absolute;
        top: 50px;
        left: 0;
        z-index: 2;
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
