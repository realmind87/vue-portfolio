import VueRouter from "vue-router";
import Vue from 'vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/vuex', 
        component: ()=> import('@/Test')
    }
]

export default new VueRouter({
    mode:'history',
    routes
});
