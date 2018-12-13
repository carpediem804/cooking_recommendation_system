<template>
    <div id="single-blog">
        <h1>{{ blog.title }}</h1>
        <article>{{ blog.body }}</article>
        </div>
</template>

<script>
// Imports
import searchMixin from '../mixins/searchMixin';
export default {
    data () {
        return {
            id: this.$route.params.id,
            blog: {}
        }
    },
    created() {
        this.$http.get('http://54.190.129.64:4000/posts/' + this.id).then(function(data){
            this.blog = data.body.data;
        });
    }
}
</script>

<style>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
}
</style>
