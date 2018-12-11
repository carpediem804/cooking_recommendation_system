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

            <!--<b-col md="6" class="my-1">-->
                <!--<b-form-group horizontal label="Per page" class="mb-0">-->
                    <!--<b-form-select :options="pageOptions" v-model="perPage" />-->
                <!--</b-form-group>-->
            <!--</b-col>-->
        </b-row>
        <b-table striped hover :items="titleList" :fields="fields"  @row-clicked="myRowClickHandler" @filtered="onFiltered" :filter="filter" style="margin:auto">
            <template slot="action" slot-scope="row">
                <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
                <b-button size="sm" @click.stop="row.toggleDetails">
                    {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
                </b-button>
            </template>
            <template slot="row-details" slot-scope="row">
                <b-card>
                    <ul>
                        <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value}}</li>
                    </ul>
                </b-card>
            </template>
            <template slot="remove" slot-scope="row">
                <b-button size="lg" variant="Delete" @click="deletedata(row)">
                    delete
                </b-button>
            </template>


        </b-table>

        <!--<ul v-for="c in titleList" v-bind:key="c.id" >-->
        <!--<li>{{c}}<br></li>-->
        <!--</ul>-->
        </b-container>
        <!--<img src="http://localhost:8000/file-1544187170205.jpg">-->
    </div>

</template>

<script>

    export default {
        name: "blogtest",
        data :function(){
            return{
                fields: {
                      blogId : {
                          label : 'BlogNumber',
                          sortable : true
                     },
                      title : {
                       label : 'Title'
                       },
                      category : {
                          label : 'Category',
                          sortable : true,
                     },
                       authorname: {
                         label : 'Author',
                         sortable : true,
                    },
                    heart : {
                          lable : "like number",
                        sortable : true
                    },
                    action : {

                    },
                    remove : {

                    }
            },
                titleList : [],
                currentPage: 1,
                //perPage: 5,
               // totalRows: titleList.length,
               // pageOptions: [ 5, 10, 15 ],
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
            },
            deletedata(data){
                let deleteid = data.item._id;
                this.$http.post('http://localhost:8000/delete/',{
                    removeId: deleteid
                }).then(res=>{
                    console.log(res);
                    console.log("res응답욈");
                    console.log(res)
                    this.$http.get("http://localhost:8000/upload/img").then((res)=>{
                        this.titleList = res.data.bloglist;
                    })
                })

                //console.log("data : "+data);


            }
        }
    }
</script>

<style scoped>

</style>
