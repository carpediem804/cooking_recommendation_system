<template>
    <div id="mywrite">
        <div class="card">
            <h1>게시글 리스트</h1>
            <b-container fluid>
                <b-icon
                        pack="fas"
                        icon="user"
                        size="is-small">
                </b-icon>
                <b-row>
                    <b-col md="6" class="my-1">
                        <b-form-group horizontal label="Filter" class="mb-0">
                            <b-input-group>
                                <b-form-input v-model="filter" placeholder="Type to Search" class="input is is-rounded" style="width: auto"/>
                                <b-input-group-append>
                                    <b-btn :disabled="!filter" @click="filter = ''" class="button is-info">Clear</b-btn>
                                </b-input-group-append>
                            </b-input-group>
                        </b-form-group>
                    </b-col>

                </b-row>
                <b-table striped hover :items="titleList" :fields="fields"  @row-clicked="myRowClickHandler" @filtered="onFiltered" :filter="filter" style="margin:auto" :striped="striped">
                    <template slot="action" slot-scope="row">
                        <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
                        <b-button size="sm" class="button is-info"@click.stop="row.toggleDetails">
                            {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
                        </b-button>
                    </template>
                    <template slot="row-details" slot-scope="row">

                        <b-card style="margin: auto" bg-variant="primary"
                                text-variant="white"
                                class="text-center">
                            <b-row class="mb-2" >
                                <b-col sm="3" class="text-center"><b>작성자:</b></b-col>
                                <b-col>{{ row.item.authorname }}</b-col>
                            </b-row>
                            <b-row class="mb-2">
                                <b-col sm="3" class="text-sm-right"><b>제목:</b></b-col>
                                <b-col>{{ row.item.title }}</b-col>
                            </b-row>
                            <b-row class="mb-2">
                                <b-col sm="3" class="text-sm-right"><b>사진:</b></b-col>
                                <b-col><img v-bind:src=$url(test+row.item.image)></b-col>
                            </b-row>
                            <b-row class="mb-2">
                                <b-col sm="3" class="text-sm-right"><b>내용:</b></b-col>
                                <b-col>{{ row.item.body }}</b-col>
                            </b-row>
                            <b-button size="sm" class="button is-success" @click="row.toggleDetails">Hide Details</b-button>
                        </b-card>
                        <!--<b-card>-->
                        <!--<ul>-->
                        <!--<li v-for="(value, key) in row.item" :key="key">-->
                        <!--<h1> {{key}}</h1>:<b>{{value}}</b>>-->
                        <!--<div v-if="key==='image'">-->
                        <!--<img v-bind:src=$url(test+value)>-->
                        <!--</div>-->
                        <!--</li>-->
                        <!--</ul>-->
                        <!--</b-card>-->
                    </template>
                    <template slot="remove" slot-scope="row" >
                        <b-button size="lg" variant="Delete" class ="button is-danger" @click="deletedata(row)">
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
    </div>

</template>

<script>
    import firebase from 'firebase'
    import BIcon from "buefy/src/components/icon/Icon";
    export default {
        name: "mywrite",
        components: {BIcon,firebase},

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

                filter: null,
                modalInfo: { title: '', content: '' },
                mynickName : '',
                test : 'http://54.190.129.64:8000/'
            }
        },
        created(){
            firebase.firestore().collection('users').doc(this.$store.state.user.email).get().then((doc)=> {

                this.mynickName = doc.data().nickName
                console.log(this.mynickName)
                this.$http.post("http://54.190.129.64:8000/upload/myuser",{
                    mymynick : this.mynickName
                }).then((res) => {
                    this.titleList = res.data.myarticle
                })
            })

            // this.$http.get("http://localhost:8000/upload/img").then((res)=>{
            //     for(let i =0 ; i<res.data.bloglist.length;i++){
            //         if(res.data.bloglist[i].authorname == this.mynickName){
            //             this.titleList
            //         }
            //     }
            //     this.titleList = res.data.bloglist;
            //     console.log(res.data.bloglist)
            // })
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
                this.$http.post('http://54.190.129.64:8000/delete/',{
                    removeId: deleteid
                }).then(res=>{
                    console.log(res);
                    console.log("res응답욈");
                    console.log(res)
                    this.$http.get("http://54.190.129.64:8000/upload/img").then((res)=>{
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
