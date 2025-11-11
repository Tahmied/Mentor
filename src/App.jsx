import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AllCourses from './Components/Courses/AllCourses'
import Home from './Components/Homepage/Home'
import Root from './Root'

const router = createBrowserRouter([
  {
    path: '/', Component: Root,
    children: [
      {
        index: true, Component: Home, loader: ()=> fetch('/courses.json')
      }, {
        path: '/courses', Component : AllCourses, loader: ()=> fetch('/courses.json')
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
