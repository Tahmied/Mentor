import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Root from './Root'

const router = createBrowserRouter([
  {
    path: '/', Component : Root
  }
])

function App() {

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
