<template>
    <div class="board">
        <ul>
            <li v-for="list in lists" :key="list.id">
                <router-link v-bind:to="list.to">{{list.title}}</router-link>
            </li>
        </ul>
        <router-view/>
    </div>
</template>

<script>
    export default {
        data: function(){
            return{
                lists:[],
            }
        },
        created: function(){
            this.$http.get('http://localhost:8000/post').then((res)=>{

                this.lists=res.data

                for(let i=0;i<this.lists.length;i++){

                    this.lists[i].to="/post/"+this.lists[i].id;

                }
            })
        },


    }
</script>

