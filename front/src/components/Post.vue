<template>
    <div class="post">
        <h1>{{ title }}</h1>
        <h2>{{ link }}</h2>
        <h1>{{ author }}</h1>
        <h2>{{ img }}</h2>
    </div>

</template>

<script>
    export default {
        name: 'Post',
        props: {
            title: String,
            link: String,
            author: String,
            img: String
        }
    }
</script>