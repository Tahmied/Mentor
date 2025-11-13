import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './Components/Authentication/Login/Login'
import Registration from './Components/Authentication/Register/Registration'
import CourseDetails from './Components/CourseDetails/CourseDetails'
import AllCourses from './Components/Courses/AllCourses'
import CreateCourse from './Components/Courses/CreateCourse'
import EditCourse from './Components/Courses/EditCourse'
import MyCourses from './Components/Courses/MyCourses'
import Dashboard from './Components/Dashboard/Dashboard'
import Home from './Components/Homepage/Home'
import MyEnrollments from './Components/MyEnrollments/MyEnrollments'
import EditProfile from './Components/Profile/EditProfile'
import MyProfile from './Components/Profile/MyProfile'
import ErrorPage from './Components/Utilis/ErrorPage'
import Loader from './Components/Utilis/Loader'
import PrivateRoutes from './Components/Utilis/PrivateRoutes'
import Watch from './Components/Watch/Watch'
import Root from './Root'

const router = createBrowserRouter([
  {
    path: '/', Component: Root,
    children: [
      {
        index: true, Component: Home, loader: () => fetch(`${import.meta.env.VITE_BACKEND}/api/v1/course/getAllCourses`)
      },
      {
        path: '/courses', Component: AllCourses, loader: () => fetch(`${import.meta.env.VITE_BACKEND}/api/v1/course/getAllCourses`)
      },
      {
        path: '/login', Component: Login
      },
      {
        path: '/register', Component: Registration
      },
      {
        path: '/profile', element: <PrivateRoutes><MyProfile></MyProfile></PrivateRoutes>
      },
      {
        path: 'edit-profile', element: <PrivateRoutes><EditProfile></EditProfile></PrivateRoutes>
      },
      {
        path: 'my-courses',
        element: <PrivateRoutes><MyCourses /></PrivateRoutes>
      },
      {
        path: 'create-course',
        element: <PrivateRoutes><CreateCourse /></PrivateRoutes>
      },
      {
        path: 'course/:courseId',
        element: <PrivateRoutes><CourseDetails /></PrivateRoutes>
      },
      {
        path: 'edit-course/:courseId',
        element: <PrivateRoutes><EditCourse /></PrivateRoutes>
      },
      {
        path: 'my-enrollments', element: <PrivateRoutes><MyEnrollments></MyEnrollments></PrivateRoutes>, loader: () => fetch(`${import.meta.env.VITE_BACKEND}/api/v1/course/my-enrollments`, { method: 'GET', credentials: 'include' })
      },
      {
        path: '/watch/:courseId', element : <PrivateRoutes><Watch></Watch></PrivateRoutes>
      },
      {
        path: '*', Component: ErrorPage
      },
      {
        path: 'dashboard', element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>
      }
    ]
  },
])

function App() {

  return (
    <>
      <RouterProvider   hydrateFallback={<Loader></Loader>} router={router}></RouterProvider>
    </>
  )
}

export default App
