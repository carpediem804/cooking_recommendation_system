<template>
    <div id="show-blogs">
        <h1>요리 게시판</h1>
        <b-input type="text" v-model="search" placeholder="search"></b-input>
        <div v-for="blog in filteredBlogs" class="single-blog">
            <router-link v-bind:to="'/blog/' + blog.blogId"><h2>{{ blog.title }}</h2></router-link>
            <p>{{blog.category}}</p>
            <article>{{ blog.body }}</article>
        </div>
    </div>
</template>

<script>
    // Imports
    import searchMixin from '../mixins/searchMixin';
    export default {
        data () {
            return {
                blogs: [],
                search: ''
            }
        },
        created() {
            this.$http.get('http://54.190.129.64:4000/').then(function(data){

                this.blogs = data.body.data;
                this.$store.state.blogs = this.blogs;

                this.$_.forEach(this.blogs, function (blog) {
                    console.log(blog.title);
                });
            });
        },
        mixins: [searchMixin]
    }
</script>

<style>
    #show-blogs{
        max-width: 800px;
        margin: 0px auto;
    }
    .single-blog{
        padding: 20px;
        margin: 20px 0;
        box-sizing: border-box;
        background: #eee;
    }
    #show-blogs a{
        color: #444;
        text-decoration: none;
    }
</style>
