<template>
    <div class="home">
        <userThink></userThink>
        <talk></talk>
    </div>
</template>

<script>
    // @ is an alias to /src
    import talk from '../components/talk'
    import userThink from '../components/userThink'
    export default {
        name: 'home',
        components: {
            talk,
            userThink
        },
        data(){
            return{
            }
        },
    }
</script>
