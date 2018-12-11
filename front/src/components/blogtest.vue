<template>
    <div id="blogtest">
        <h1>게시글 리스트</h1>
        <b-container fluid>
        <b-row>
            <b-col md="6" class="my-1">
                <b-form-group horizontal label="Filter" class="mb-0">
                    <b-input-group>
                        <b-form-input v-model="filter" placeholder="Type to Search" />
                        <b-input-group-append>
                            <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
                        </b-input-group-append>
                    </b-input-group>
                </b-form-group>
            </b-col>

            <b-col md="6" class="my-1">
                <b-form-group horizontal label="Per page" class="mb-0">
                    <b-form-select :options="pageOptions" v-model="perPage" />
                </b-form-group>
            </b-col>
        </b-row>
        <b-table striped hover :items="titleList" :fields="fields"  @row-clicked="myRowClickHandler" @filtered="onFiltered" :filter="filter">

        </b-table>
        <ul v-for="c in titleList" v-bind:key="c.id" >
        <li>{{c}}<br></li>
        </ul>
        </b-container>
        <img src="http://localhost:8000/file-1544187170205.jpg">
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
                    heart : {
                          lable : "like number",
                        sortable : true
                    }

            },
                titleList : [],
                currentPage: 1,
                perPage: 5,
               // totalRows: titleList.length,
                pageOptions: [ 5, 10, 15 ],
               // sortBy: null,
               // sortDesc: false,
               // sortDirection: 'asc',
                filter: null,
                modalInfo: { title: '', content: '' }
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
            },
            onFiltered (filteredItems) {
                // Trigger pagination to update the number of buttons/pages due to filtering
                this.totalRows = filteredItems.length
                this.currentPage = 1
            }
        }
    }
</script>

<style scoped>

</style>