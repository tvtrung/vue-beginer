import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import ListTodo from './components/page/ListTodo'
import ListPost from './components/page/ListPost'
import PostDetail from './components/page/PostDetail'

export const routers_data = [
    {path:'/', name:'HomePage', component:HomePage},
    {path:'/login', name:'LoginPage ', component:LoginPage},
    {path:'/list-to-do', name:'ListTodo ', component:ListTodo},
    {path:'/list-post', name:'ListPost ', component:ListPost},
    {path:'/post-detail/:id', name:'PostDetail ', component:PostDetail},
];