import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import ViewStory from './ViewStory.jsx'
import Profile from './Profile.jsx'
import CreatePost from "./CreatePost";
import ThemeProvider from "./context/ThemeContext";

const router = createBrowserRouter(
  [
    {
      path :'/',
      element : <App />
    },
    {
      path:'/story/:id/:tot',
      element:<ViewStory />
    },
    {
      path :'/profile',
      element: <Profile />
    },
    {
      path:"/create",
      element:<CreatePost/>
    }
  ]
)
createRoot(document.getElementById('root')).render(
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
)
