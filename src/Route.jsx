import Home from './pages/Home'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout'

export let myRoutes=createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/contacts",
                element:<Contact/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/signup",
                element:<Signup/>
            }
        ]
    }
])