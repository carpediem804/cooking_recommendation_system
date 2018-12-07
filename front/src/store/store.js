import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        blogs: [],
        user:{},
        loggedIn:''
    },
    getters:{
        loggedIn:function(state){
            return state.loggedIn
        },
        user:function(state){
            return state.user
        }
    }
});
