import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Customer from '../views/dictionary/customer/CustomerList.vue'
import Employee from '../views/dictionary/employee/EmployeeList.vue'
import Introduce from '../views/dictionary/intro/introduce.vue'
import Report from '../views/dictionary/report/report.vue'
import BuyItem from '../views/dictionary/buy-item/buyItem.vue'
import Setting from '../views/dictionary/settingSys/setting.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'Home', component: Home },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/dictionary/customer',
        name: 'Customer',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Customer
    },
    {
        path: '/dictionary/employee',
        name: 'Employee',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Employee
    },
    {
        path: '/dictionary/report',
        name: 'Report',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Report
    },
    {
        path: '/dictionary/introduce',
        name: 'Introduce',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Introduce
    },
    {
        path: '/dictionary/buy',
        name: 'BuyItem',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: BuyItem
    },
    {
        path: '/dictionary/setting',
        name: 'Setting',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Setting
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router