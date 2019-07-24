import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import HomePage from 'views/main/HomePage'
import Personal from 'views/personal/Personal'
import Carts from 'views/carts/Carts'
import Sort from 'views/sort/Sort'
import Worthtobuy from 'views/worthtobuy/Worthtobuy'
import Home from 'views/Home'
import Details from 'views/Details/Details'
import List from 'views/List'
import Recommend from 'views/Recommend'
import SearchList from 'views/SearchList'

import Resign from 'views/personal/Resign'
import Login from 'views/personal/Login'
const routes = [
        {
            path : '/',
            redirect :'/home'
        },
        {
            path : '/home',
            component :Home,
            redirect :'/home/homepage',
            children :[
                {
                    name: 'homepage',
                    path: 'homepage',
                    component: HomePage,
                },
               
                {
                    name: 'carts',
                    path: 'carts',
                    component: Carts
                }
                ,{
                    name: 'sort',
                    path: 'sort',
                    component: Sort
                },
                {
                    name: 'worthtobuy',
                    path: 'worthtobuy',
                    component: Worthtobuy
                }
            ]
        },
        {
           
            path: '/personal',
            component: Personal
        },

        {
            path : '/details',
            component :Details
        },
        {
            path :'/list',
            component :List
        },
        {
            path :'/recommend',
            component :Recommend
        },
        {
            path :'/search-list',
            component :SearchList
        },
        {
            path :'/resign',
            component :Resign
        },
        {
            path :'/login',
            component :Login
        },
    
        
   
    
]



const router = new VueRouter({
    routes
})

export default router