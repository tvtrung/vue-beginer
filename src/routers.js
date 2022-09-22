import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import ListTodo from './components/page/ListTodo'
import ListPost from './components/page/ListPost'
import PostDetail from './components/page/PostDetail'
import UserGeneric from './components/page/UserGeneric'
import Navigation from './components/page/Navigation'
import Vuex from './components/page/VueX/Vuex'
import LifeCycle from './components/page/LifeCycle'
import Axios from './components/page/Axios'
import Mixins from './components/page/mixins/Mixins'
import EventBus from './components/page/EventBus/index'
import Plugins from './components/page/Plugins/index'
import Style from './components/page/Style/parent'

export const routers_data = [
    {path:'/', name:'HomePage', component:HomePage},
    {path:'/login', name:'LoginPage ', component:LoginPage},
    {path:'/list-to-do', name:'ListTodo ', component:ListTodo},
    {path:'/list-post', name:'ListPost ', component:ListPost},
    {path:'/post-detail/:id', name:'PostDetail ', component:PostDetail},
    {path:'/post-detail/number/:id(\\d+)', name:'PostDetailNumber ', component:PostDetail}, //matches only numbers
    {path: '/user-:id(.*)',name:'AfterUser', component: UserGeneric },
    {path: '/chapters/:id+', name: 'ChaptersA', component: UserGeneric }, // matches /one, /one/two, /one/two/three, etc
    {path: '/chapters/:id*', name: 'ChaptersB', component: UserGeneric }, // matches /, /one, /one/two, /one/two/three, etc
    // will match /users/posva but not:
    // - /users/posva/ because of strict: true
    // - /Users/posva because of sensitive: true
    {path: '/users/:id', name: 'User', component: UserGeneric, sensitive: true  },
    //children
    {path: '/customer/:id', name: 'Customer', component: UserGeneric,
        children:[
            { 
                path:'profile',
                name: 'CustomerProfile',
                component:UserGeneric
            }
        ]
    },
    {path:'/navigation', name:'Navigation ', component:Navigation},
    {path:'/vuex', name:'Vuex ', component:Vuex},
    {path:'/lifecycle', name:'LifeCycle ', component:LifeCycle},
    {path:'/axios', name:'Axios ', component:Axios},
    {path:'/mixins', name:'Mixins ', component:Mixins},
    {path:'/eventbus', name:'EventBus ', component:EventBus},
    {path:'/plugin', name:'Plugins ', component:Plugins},
    {path:'/style', name:'Style ', component:Style},
    {path: '/:pathMatch(.*)*', name: 'NotFound', component: UserGeneric },
];