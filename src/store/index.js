import Vue from 'vue';
import Vuex from 'vuex';
import DB from '../../database/data.json';
Vue.use(Vuex);

const stroe = new Vuex.Store({
    state: {
        data: DB,
        isView: false,
        isScroll: false,
        timer: null,
    },
    mutations: {
        onHeader(state,payload){
            state.isView = payload.isView
        }
    },
    actions: {
        onHeader({commit}, payload){
            commit('onHeader', payload);
        }
    }
});

export default stroe;