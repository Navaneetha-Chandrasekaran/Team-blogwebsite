import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Pages/Home.jsx'
import Blog from './Pages/Blog.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Services from './Pages/Services.jsx'
import SingleBlog from './Pages/SingleBlog.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
      path:'/',
      element:<Home/>
    },
    {
      path:'/Blog',
      element:<Blog/>
    },
    {
      path:'/About',
      element:<About/>
    },
    {
      path:'/Contact',
      element:<Contact/>
    },
    {
      path:'/Services',
      element:<Services/>
    },
    {
      path:'/blogs/:id',
      element:<SingleBlog/>,
      loader:({params})=> fetch(`http://localhost:5000/blogs/${params.id}`)
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
