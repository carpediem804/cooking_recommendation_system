<template>
    <div id="recommend">
        <h2>요리 이름</h2>

    </div>
</template>

<script>
export default {
    name:'recommend',
    data(){
        return {
            name:'',

        }
    },
    methods:{
        test:function(){
            this.$http.get('http://localhost:8000/findcook/recommend').then(res=>{
                console.log("hi")
                console.log(res)
                //요리이름
                //이미지
                //요리법
                //url

            }).catch(res=>{
                console.log(res)
            })
        }
    },
    mounted:{

    }
}
</script>
