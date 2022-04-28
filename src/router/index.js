import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue'
import Calendar from '../views/Calendar.vue'
import Setting from '../views/Setting.vue'
import Schedule from '../views/Schedule.vue'
import Board from '../views/Board.vue'

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
        },
        {
            path: '/setting',
            name: 'Setting',
            component:Setting
        },
        {
            path: '/schedule',
            name: 'schedule',
            component:Schedule
        },
         {
            path: '/board',
            name: 'board',
            component: Board
        }
    ]
});

export default router;