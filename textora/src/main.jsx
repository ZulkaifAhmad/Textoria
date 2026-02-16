import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Work from './Pages/Work.jsx'
import Contact from './Pages/Contact.jsx'
import Blog from './Pages/Blog.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'     
import Outlit from './Layout/Outlit.jsx'
import BlogDetails from './Pages/BlogDetails.jsx'

let router = createBrowserRouter([
  {
    path : "/",
    element : <Outlit /> ,
    children : [
      {
        path : "",
        element : <Home />
      } ,
      {
        path : "about" ,
        element : <About />
      },
      {
        path : "work" ,
        element : <Work />
      },
      {
        path : "contact" ,
        element : <Contact />
      },
      {
        path : "blog" ,
        element : <Blog />
      },
      {
        path : "blog/:id",
        element : <BlogDetails />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
