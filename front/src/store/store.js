import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        blogs: [],
        user:{}
    },
    getters:{
        user:function(){
            return this.state.user
        }
    }
});
