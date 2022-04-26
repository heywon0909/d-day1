import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue'
import Calendar from '../views/Calendar.vue'

Vue.use(VueRouter);


const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'Home',
            component:Home
        },
        {
            path:'/calendar',
            name:'Calendar',
            component:Calendar
        }
    ]
});

export default router;