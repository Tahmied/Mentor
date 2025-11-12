import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './Components/Authentication/Login/Login'
import Registration from './Components/Authentication/Register/Registration'
import AllCourses from './Components/Courses/AllCourses'
import Home from './Components/Homepage/Home'
import EditProfile from './Components/Profile/EditProfile'
import MyProfile from './Components/Profile/MyProfile'
import Root from './Root'

const router = createBrowserRouter([
  {
    path: '/', Component: Root,
    children: [
      {
        index: true, Component: Home, loader: ()=> fetch('/courses.json')
      }, 
      {
        path: '/courses', Component : AllCourses, loader: ()=> fetch('/courses.json')
      }, 
      {
        path: '/login', Component : Login
      },
      {
        path: '/register', Component : Registration
      },
      {
        path: '/profile', Component : MyProfile
      },
      {
        path: 'edit-profile', Component : EditProfile
      }
    ]
  },
])

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
