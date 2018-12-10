<template>
    <div id="blogtest">
        <h1>게시글 리스트</h1>
        <b-table striped hover :items="titleList" :fields="fields"  @row-clicked="myRowClickHandler">

        </b-table>
        <ul v-for="c in titleList" v-bind:key="c.id" >
        <li>{{c}}<br></li>
        </ul>
    </div>

</template>

<script>

    export default {
        name: "blogtest",
        data :function(){
            return{
                fields: {
                    // comment_date:{
                    // label : 'Date',
                    //     sortable: true
                    // },
                      blogId : {
                          label : 'BlogNumber',
                          sortable : true
                     },
                      title : {
                       label : 'Title'
                       },
              // body : {
              //       label : 'Content'
              // },
                      category : {
                          label : 'Category',
                          sortable : true,
                     },
                       authorname: {
                         label : 'Author',
                         sortable : true,
                    },
                    //      image : {
                    //          label : 'Image'
                    // }
                    hart : {
                          lable : "like number",
                        sortable : true
                    }

            },
                 titleList : []
            }
        },
        created(){
            this.$http.get("http://localhost:8000/upload/img").then((res)=>{
                this.titleList = res.data.bloglist;
            })
        },
        methods : {
            myRowClickHandler(record, index) {
                console.log("클릭된다된다 ");
                
                // 'record' will be the row data from items
                // `index` will be the visible row number (available in the v-model 'shownItems')
                console.log(record);
                console.log(index);// This will be the item data for the row
            }
        }
    }
</script>

<style scoped>

</style>