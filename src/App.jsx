import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Components/Homepage/Home'
import Root from './Root'

const router = createBrowserRouter([
  {
    path: '/', Component: Root,
    children: [
      {
        index: true, Component: Home
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
