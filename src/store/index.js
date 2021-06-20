import Vue from 'vue';
import Vuex from 'vuex';
import DB from '../../database/data.json';
Vue.use(Vuex);

const stroe = new Vuex.Store({
    state: {
        data: DB
    },
    mutations: {
        showDetailPage( state, payload ){
            console.log( state );
            console.log( payload.item );
            console.log( payload.offsetX );
            console.log( payload.offsetY );
        }
    },
    actions: {

    }
});

export default stroe;